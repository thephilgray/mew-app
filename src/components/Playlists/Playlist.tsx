/* eslint-disable react/display-name */
import React, { useEffect, useState, useMemo, PropsWithChildren, useContext, useRef } from 'react'
import { CircularProgress, Grid, Typography, Card, CardContent, CardMedia, Box, IconButton, useTheme, ButtonGroup, Button, Menu, MenuItem, Modal, Select, InputLabel, FormControl, Snackbar, Stack, Paper, styled, Switch, Alert, Badge } from '@mui/material'
import { RouteComponentProps } from '@reach/router'
import useColorThief from 'use-color-thief';
import gql from 'graphql-tag'
import { useLazyQuery, useMutation } from '@apollo/react-hooks'
import { API } from 'aws-amplify'
import { ReactJkMusicPlayerAudioListProps } from 'react-jinke-music-player'
import 'react-jinke-music-player/lib/styles/index.less'
import './playlist.css'
import mewAppLogo from '../../assets/mewlogo.png'
import orderBy from 'lodash/orderBy'
import { ROUTES } from '../../constants'
import Error from '../Error'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { useProfile, useUser, useViewAdmin } from '../../auth/hooks'
import { Close, CopyAll, Edit, Forum, MoreVert, Pause, PauseCircleRounded, PlayArrow as PlayArrowIcon, PlayArrowOutlined, PlayArrowRounded, PlaylistAdd, SkipNext as SkipNextIcon, SkipPrevious as SkipPreviousIcon, Speaker } from '@mui/icons-material'
import isNumber from 'lodash/isNumber'
import sum from 'lodash/sum'
import isPast from 'date-fns/isPast'
import { FeedbackSection } from '../Feedback'
import { getFileRequest, getPlaylist, playlistsByDate, createTrack } from './playlist.queries'
import If from '../If';
import { formatAudioDuration, getBreakoutGroupName, hasBreakoutGroup, getCloudFrontURL, getBreakoutGroup } from '../../utils';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import { AudioPlayerContext, useClonePlaylist } from '../AudioPlayer/audio-player.context';
import { Link, navigate } from 'gatsby';
import { LinkedMemberAvatar } from '../Avatar';
import { usePrevious } from 'react-use';

const GET_FILE_REQUEST = gql(getFileRequest)

const TrackListItem = styled(Paper)(({ theme, isCurrentIndex }) => ({
    backgroundColor: isCurrentIndex ? '#f2f2f2' : '#fff',
    width: '100%',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    borderRadius: 'initial',
    color: theme.palette.text.secondary,
    '&:hover': {
        backgroundColor: '#f2f2f2',
        cursor: 'pointer'
    }
}));

const Playlist: React.FC<PropsWithChildren<RouteComponentProps<{ assignmentId: string, playlistId: string }>>> = ({
    assignmentId = '',
    playlistId,
}) => {
    const { audioLists, setAudioLists, currentIndex, setCurrentIndex, isPlaying, setIsPlaying, playerRef, playlistId: globalPlaylistId, setPlaylistId: setGlobalPlaylistId, assignmentId: globalAssignmentId, setAssignmentId: setGlobalAssignmentId, previousAssignmentId, previousPlaylistId } = useContext(AudioPlayerContext)
    const [loading, setLoading] = useState(false)
    const [addSongsToPlaylistLoading, setAddSongsToPlaylistLoading] = useState(false)
    const [toggleTrackView, setToggleTrackView] = useState(false)
    const [toggleBreakoutView, setToggleBreakoutView] = useState<boolean | null>(null)
    const [data, setData] = useState<{
        expiration: string
        title: string
        details: string
        workshopId: string
    } | null>(null)
    const [error, setError] = useState(null)
    const theme = useTheme();
    const user = useUser()
    const loggedIn = !!user
    const { profile } = useProfile()
    const [addToPlaylistSelection, setAddToPlaylistSelection] = useState('new')
    const [snackbarOpen, setSnackbarOpen] = useState(false)
    const [trackDurations, setTrackDurations] = useState([])
    const [viewAdmin] = useViewAdmin()
    const previousToggleBreakoutView = usePrevious(toggleBreakoutView)
    const [songsShouldLoad, setSongsShouldLoad] = useState(true)
    // Authenticated user access

    const [fetchGetFileRequest, { loading: fetchGetFileRequestLoading, error: fetchGetFileRequestError, data: fetchGetFileRequestData }] = useLazyQuery(GET_FILE_REQUEST, {
        variables: { id: assignmentId },
    })
    const [fetchGetPlaylist, { loading: fetchGetPlaylistLoading, error: fetchGetPlaylistError, data: fetchGetPlaylistData }] = useLazyQuery(gql(getPlaylist), {
        variables: { id: playlistId },
    })
    const [fetchListPlaylists, { loading: fetchListPlaylistsLoading, error: fetchListPlaylistsError, data: fetchListPlaylistsData }] = useLazyQuery(gql(playlistsByDate), {
        fetchPolicy: 'network-only',
        variables: {
            type: 'Playlist',
            sortDirection: "DESC",
            limit: 50,
            filter: {
                playlistOwnerId: { eq: profile?.email }
            }
        },
    })

    const [fetchCreateTrack, { loading: fetchCreateTrackLoading, error: fetchCreateTrackError, data: fetchCreateTrackData }] = useMutation(gql(createTrack))

    const { setClonedPlaylistItems } = useClonePlaylist()


    const { breakoutGroupName, breakoutGroupId, breakoutGroupHasTracks } = useMemo((): { breakoutGroupName?: string, breakoutGroupId?: string } => {
        if (fetchGetFileRequestData) {
            const workshop = fetchGetFileRequestData.getFileRequest?.workshop
            const userSubmission = fetchGetFileRequestData.getFileRequest?.submissions?.items?.find(submission => submission.email === user?.email)
            const userBreakoutGroupFromSubmission = userSubmission?.breakoutGroup
            const result = {
                breakoutGroupName: userBreakoutGroupFromSubmission?.name || getBreakoutGroupName(workshop, user),
                breakoutGroupId: userBreakoutGroupFromSubmission?.id || getBreakoutGroup(workshop, user)?.id
            }
            const breakoutGroupHasTracks = fetchGetFileRequestData.getFileRequest?.submissions?.items?.some(submission => submission.breakoutGroup?.id === result.breakoutGroupId)
            return { ...result, breakoutGroupHasTracks };
        } else {
            return { breakoutGroupName: '', breakoutGroupId: '', breakoutGroupHasTracks: false }
        }

    }, [fetchGetFileRequestData, user])

    const previousBreakoutGroupId = usePrevious(breakoutGroupId)

    const params = new URLSearchParams(window.location.search)
    const trackFromParams = params.get('track') // track is actually submissionId

    // clones playlist or current track to a new playlist
    // TODO: rename, confusing
    const handleClonePlaylist = (currentTrack = false) => {
        let items
        if (assignmentId) {
            items = data?.submissions?.items
            if (currentTrack) {
                const { submissionId } = audioLists[currentIndex]
                items = items.filter(submission => submission.id === submissionId)
            }
            setClonedPlaylistItems(items.map((submission, i) => ({
                submission,
                id: submission.id,
                fileRequestSubmissionID: submission.id,
                order: i,
                create: true
            })))
        }
        else if (playlistId) {
            items = data?.tracks?.items;
            if (currentTrack) {
                const { submissionId } = audioLists[currentIndex]
                items = items.filter(track => track?.submission?.id === submissionId)
            }
            setClonedPlaylistItems(items.map((track, i) => ({
                ...track,
                order: i,
                create: true
            })))
        }
        navigate(ROUTES.newPlaylist.path)
    }

    const trackPlaylistMenuRef = useRef()
    const playlistMenuRef = useRef()
    const [playlistMenuOpen, setPlaylistMenuOpen] = useState(false)
    const [addToPlaylistModalOpen, setAddToPlaylistModalOpen] = useState(false)
    const modalStyle = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const playlistArtworkPath = data?.artwork?.path || data?.fileRequest?.artwork?.path || data?.workshop?.artwork?.path
    const PLAYLIST_ARTWORK = playlistArtworkPath ? getCloudFrontURL(playlistArtworkPath) : mewAppLogo;
    const SONG_ARTWORK = audioLists[currentIndex]?.cover;
    const { color, palette } = useColorThief(PLAYLIST_ARTWORK, {
        format: 'hex',
        colorCount: 10,
        quality: 10,
    });

    const canView = !!viewAdmin || (data?.playlistStartDate ? isPast(new Date(data?.playlistStartDate)) : true)

    useEffect(() => {
        if (playlistId) {
            if (globalPlaylistId === null || globalPlaylistId != previousPlaylistId) {
                setSongsShouldLoad(true)
                setAudioLists([])
                setGlobalPlaylistId(playlistId)
                setGlobalAssignmentId(null)
                setCurrentIndex(0) // or query param
                setData(null)
            }
        }

        if (assignmentId) {
            if (globalPlaylistId === null || globalPlaylistId != previousAssignmentId) {
                setSongsShouldLoad(true)
                setAudioLists([])
                setGlobalAssignmentId(assignmentId)
                setGlobalPlaylistId(null)
                setCurrentIndex(0) // or query param
                setData(null)
            }
        }

        return () => {

        }
    }, [playlistId, assignmentId, globalAssignmentId])


    // switch the current index if track in the query params
    useEffect(() => {
        // still very hacky and somewhat glitchy but seems to work in most cases
        if (audioLists.length > 0) {
            if (trackFromParams) {
                const trackIndex = audioLists.findIndex(item => item.submissionId === trackFromParams)
                if (trackIndex > -1) {
                    setCurrentIndex(trackIndex)
                    setToggleTrackView(true)
                }
            } else if (toggleTrackView) {
                // do nothing if it's already in track view
                // setToggleTrackView(true)
            }
            else {
                setToggleTrackView(false)
            }
        }
    }, [audioLists, currentIndex])

    // Authenticated user access
    useEffect(() => {
        if (loggedIn) {
            if (assignmentId && !fetchGetFileRequestLoading && !fetchGetFileRequestError && !fetchGetFileRequestData) {
                fetchGetFileRequest()
            }
            else if (playlistId && !fetchGetPlaylistLoading && !fetchGetPlaylistError && !fetchGetPlaylistData) {
                fetchGetPlaylist()
            }
        }

    }, [assignmentId, playlistId, loggedIn])

    useEffect(() => {
        if (!loggedIn) return
        if (assignmentId) {
            if (fetchGetFileRequestData?.getFileRequest && !data) {
                // lazy hack for now; we can just conditionally load this as playlistId
                if (fetchGetFileRequestData?.getFileRequest?.playlist?.id) {
                    const queryParams = window.location.search;
                    const redirectPath = `${ROUTES.playlist.getPath({ playlistId: fetchGetFileRequestData?.getFileRequest?.playlist?.id })}${queryParams}`

                    if (canView) {
                        navigate(redirectPath, { replace: true })
                    }
                }
                else {
                    setData(fetchGetFileRequestData.getFileRequest)
                }
            }
            if (fetchGetFileRequestError && !error) {
                // @ts-ignore
                setError(fetchGetFileRequestError)
            }
            if (loading) {
                setLoading(fetchGetFileRequestLoading)
            }
        } else if (playlistId) {
            if (fetchGetPlaylistData?.getPlaylist && !data) {
                setData(fetchGetPlaylistData.getPlaylist)
            }
            if (fetchGetPlaylistError && !error) {
                // @ts-ignore
                setError(fetchGetPlaylistError)
            }
            if (loading) {
                setLoading(fetchGetPlaylistLoading)
            }
        }

    }, [data, fetchGetFileRequestLoading, fetchGetFileRequestError, fetchGetFileRequestData, fetchGetPlaylistData, fetchGetPlaylistLoading, fetchGetPlaylistError])

    // Anonymous access
    useEffect(() => {
        async function getFileRequest() {
            setLoading(true)
            // Switch authMode to API_KEY
            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const { data: fileRequestData } = await API.graphql({
                    query: GET_FILE_REQUEST,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    authMode: 'API_KEY',
                    variables: {
                        id: assignmentId,
                    },
                })
                setData(fileRequestData?.getFileRequest)
            } catch (err) {
                // @ts-ignore
                setError(err)
            } finally {
                setLoading(false)
            }

        }

        async function fetchPlaylistWithoutAuth() {
            setLoading(true)   // Switch authMode to API_KEY
            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const { data: playlistData } = await API.graphql({
                    query: getPlaylist,
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    authMode: 'API_KEY',
                    variables: {
                        id: playlistId,
                    },
                })
                setData(playlistData?.getPlaylist)
            } catch (err) {
                // @ts-ignore
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        if (assignmentId && !loggedIn) {
            getFileRequest()
        } else if (playlistId && !loggedIn) {
            fetchPlaylistWithoutAuth()
        }
    }, [])


    const fetchDuration = (path) => {
        return new Promise(resolve => {
            const audio = document.createElement('audio');
            audio.src = path;
            setTimeout(() => { resolve(0) }, 2000)
            audio.addEventListener('loadedmetadata', (e) => {
                resolve(audio.duration)
            });
        })
    }

    async function addSongsToPlaylist() {
        const songs: Array<ReactJkMusicPlayerAudioListProps> = []
        const seenFileIds: string[] = []
        if (assignmentId) {
            // @ts-ignore
            if (data?.submissions?.items) {
                // @ts-ignore
                const sortedSubmissions = orderBy(data.submissions.items, 'submissionDate', 'asc');
                for (let index = 0; index < sortedSubmissions.length; index++) {
                    // @ts-ignore
                    const { name, fileId, artist, id, artwork, lyrics, workshopId, duration, requestFeedback, profile, breakoutGroup, email, comments } = sortedSubmissions[index];
                    // don't add nonexistent or duplicate files to the playlist
                    if (fileId && !seenFileIds.includes(fileId) && (!breakoutGroupId || (toggleBreakoutView && breakoutGroupId === breakoutGroup?.id)) || (!toggleBreakoutView)) {
                        const songFilePath = `${assignmentId}/${fileId}`;
                        const musicSrc = getCloudFrontURL(songFilePath);
                        // const trackDuration = await fetchDuration(musicSrc)
                        // const fileAccessURL = await Storage.get(songFilePath, { expires: 86400 })
                        songs.push({
                            order: index,
                            musicSrc,
                            trackDuration: duration,
                            name,
                            cover: artwork?.path && getCloudFrontURL(artwork.path) || PLAYLIST_ARTWORK || mewAppLogo,
                            singer: artist,
                            profile,
                            fileId,
                            submissionId: id,
                            lyrics,
                            workshopId,
                            assignmentId,
                            requestFeedback,
                            commentsCount: comments?.items?.length
                        });
                        seenFileIds.push(fileId);
                    }
                }
                const initiallySorted = orderBy(songs, 'commentsCount', 'asc');
                setAudioLists(initiallySorted);
            }

        } else if (playlistId) {
            // @ts-ignore
            if (data?.tracks?.items) {
                // @ts-ignore
                for (let index = 0; index < data.tracks.items.length; index++) {
                    // @ts-ignore
                    const { submission, order } = data.tracks.items[index];
                    const { name, fileId, artist, id, artwork, lyrics, fileRequestId: assignmentId, workshopId, duration, requestFeedback, profile, comments } = submission
                    // don't add nonexistent or duplicate files to the playlist
                    if (fileId && !seenFileIds.includes(fileId)) {
                        const songFilePath = `${assignmentId}/${fileId}`
                        const musicSrc = getCloudFrontURL(songFilePath)
                        // const trackDuration = await fetchDuration(musicSrc)
                        // const fileAccessURL = await Storage.get(songFilePath, { expires: 86400 })
                        songs.push({
                            order,
                            musicSrc,
                            trackDuration: duration,
                            name,
                            cover: artwork?.path && getCloudFrontURL(artwork.path) || PLAYLIST_ARTWORK || mewAppLogo,
                            singer: artist,
                            profile,
                            fileId,
                            submissionId: id,
                            lyrics,
                            assignmentId,
                            workshopId,
                            requestFeedback,
                            commentsCount: comments?.items?.length
                        })
                        seenFileIds.push(fileId)
                    }
                }
                const sortedSongs = orderBy(songs, 'commentsCount', 'asc')
                setAudioLists(sortedSongs)
            }
        }
        setAddSongsToPlaylistLoading(false)
    }

    useEffect(() => {
        if (!data || !canView || addSongsToPlaylistLoading || !songsShouldLoad) return;
        if (
            (data?.submissions?.items || data?.tracks?.items) &&
            (assignmentId || playlistId)
        ) {
            setAddSongsToPlaylistLoading(true)
            addSongsToPlaylist()
            setSongsShouldLoad(false)
        }
    }, [data, canView, audioLists, addSongsToPlaylistLoading, songsShouldLoad])

    useEffect(() => {
        if (breakoutGroupId && toggleBreakoutView === null && breakoutGroupHasTracks && !trackFromParams) {
            setToggleBreakoutView(true);
        }
    }, [breakoutGroupId])

    useEffect(() => {
        if (!data || !breakoutGroupId) return;
        if (toggleBreakoutView !== previousToggleBreakoutView) {
            console.log('breakout group set or view toggled')
            setSongsShouldLoad(true)
            setAddSongsToPlaylistLoading(false)
            setAudioLists([])
        }

    }, [toggleBreakoutView, breakoutGroupId, data])

    useEffect(() => {
        let isSubscribed = true
        if (audioLists.length && !trackDurations.length) {
            Promise.all(
                audioLists.map(async item => item.trackDuration ?
                    item.trackDuration :
                    await fetchDuration(item.musicSrc)
                )
            )
                .then(items => {
                    if (isSubscribed) {
                        setTrackDurations(items)
                    }
                })
        }
        return () => isSubscribed = false

    }, [trackDurations, audioLists])

    const totalPlaylistDuration = trackDurations.length ? formatAudioDuration(sum(trackDurations)) : 0

    const onSubmitAddToPlaylist = async (e) => {
        e.preventDefault()
        if (!addToPlaylistSelection) {
            // just clone the current track 
            handleClonePlaylist(true)
        } else {
            const { submissionId } = audioLists[currentIndex]
            await fetchCreateTrack({
                variables: {
                    input: {
                        order: addToPlaylistSelection?.tracks?.items?.length,
                        trackSubmissionId: submissionId,
                        playlistTracksId: addToPlaylistSelection?.id
                    }
                }
            })
            setSnackbarOpen(true)
            setAddToPlaylistModalOpen(false)
        }
    }

    if (error) return <Error errorMessage={error} />
    if (loading || fetchGetFileRequestLoading || fetchGetPlaylistLoading) return <CircularProgress />
    if (!loading && data && !canView) return <p>Playlist is not yet live.</p>
    if (!loading && !data && (fetchGetFileRequestData || fetchGetPlaylistData)) return <CircularProgress />
    if (!loading && !data && !(fetchGetFileRequestData || fetchGetPlaylistData)) return <p>Playlist does not exist.</p>
    // TODO: move this down 
    // if (!loading && data && (data?.submissions?.items || data?.tracks?.items) && !(data?.submissions?.items?.length || data?.tracks?.items?.length)) return <p>Playlist has no tracks.</p>


    const PlaylistMenu = ({ menuRef }) => {
        return <Menu
            anchorEl={menuRef.current}
            open={playlistMenuOpen}
            onClose={() => setPlaylistMenuOpen(false)}>
            <MenuItem onClick={() => {
                fetchListPlaylists()
                setAddToPlaylistModalOpen(true)
                setPlaylistMenuOpen(false)
            }}>
                <PlaylistAdd sx={{ mr: 1 }} />
                Add track to playlist
            </MenuItem>
            <MenuItem onClick={() => handleClonePlaylist()}>
                <CopyAll sx={{ mr: 1 }} />
                Clone playlist
            </MenuItem>
            <If condition={playlistId && (profile?.email === data?.playlistOwnerId || viewAdmin)}>
                <MenuItem onClick={() => navigate(ROUTES.editPlaylist.getPath({ playlistId: data?.id }))}>
                    <Edit sx={{ mr: 1 }} />
                    Edit Playlist
                </MenuItem>
            </If>
        </Menu>
    }

    return (
        <Grid container spacing={3} style={{ minHeight: '90 vh' }} >
            <If condition={loggedIn}>
                <Grid item xs={12}>
                    <AppBreadcrumbs
                        paths={assignmentId ? [
                            ROUTES.home,
                            ROUTES.workshop,
                            {
                                path: ROUTES.assignment.getPath({ assignmentId }),
                                name: data?.title || assignmentId,
                            },
                            ROUTES.assignmentPlaylist,
                        ] : [ROUTES.home, ROUTES.playlists, { name: data?.title }]}
                        workshopId={data?.workshopId}
                    />
                </Grid>
            </If>
            <If condition={isNumber(currentIndex)}>
                <Grid item xs={12}>
                    <If condition={!!breakoutGroupName}>
                        <Stack direction="row" spacing={1} alignItems="center" justifyContent="end" sx={{ float: { xs: 'right', sm: 'left' }, width: { xs: '100%', md: 'auto' } }}>
                            <Typography>Session</Typography>
                            <Switch
                                checked={toggleBreakoutView}
                                onChange={e => setToggleBreakoutView(e.target.checked)}
                            />
                            <Typography>{breakoutGroupName}</Typography>
                        </Stack>
                    </If>
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="end" sx={{ float: 'right', ml: 'auto', width: { xs: '100%', md: 'auto' } }}>
                        <Typography>Playlist</Typography>
                        <Switch
                            checked={toggleTrackView}
                            onChange={e => setToggleTrackView(e.target.checked)}
                        />
                        <Typography>Track</Typography>
                    </Stack>
                </Grid>
            </If>
            <If condition={!isNumber(currentIndex) || !toggleTrackView}>
                <Grid item xs={12}>
                    <Card>
                        <CardMedia
                            sx={{ height: 380, position: 'relative' }}
                            image={PLAYLIST_ARTWORK}
                            title={data?.title}
                        >
                            <If condition={!!audioLists.length}>
                                {!!isPlaying ?
                                    <IconButton
                                        title='Pause'
                                        onClick={() => {
                                            playerRef?.current?.pause()
                                            setIsPlaying(false)
                                        }}
                                        sx={{
                                            position: 'absolute',
                                            top: ' 50%',
                                            left: ' 50%',
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    >
                                        <PauseCircleRounded color='secondary' sx={{ height: '5em', width: '5em' }} />
                                    </IconButton> :
                                    <IconButton
                                        title='Play'
                                        onClick={() => {
                                            // setToggleTrackView(true)
                                            if (!isNumber(currentIndex)) {
                                                setCurrentIndex(0)
                                            }
                                            if (playerRef?.current?.paused) {
                                                playerRef?.current?.play()
                                            }
                                        }}
                                        sx={{
                                            position: 'absolute',
                                            top: ' 50%',
                                            left: ' 50%',
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    ><PlayArrowRounded color='secondary' sx={{ height: '5em', width: '5em' }} />
                                    </IconButton>
                                }
                            </If>
                            <If condition={loggedIn}>
                                <Box sx={{ float: 'right', m: 1 }}>
                                    <IconButton
                                        onClick={() => setPlaylistMenuOpen(!playlistMenuOpen)}
                                        ref={playlistMenuRef}
                                        sx={{
                                            backgroundColor: 'rgba(0,0,0,.75)',
                                            '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
                                        }}>
                                        <MoreVert color='secondary'></MoreVert>
                                    </IconButton>
                                    <PlaylistMenu menuRef={playlistMenuRef} />
                                </Box>
                            </If>
                        </CardMedia>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {data?.title}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <If condition={data?.owner}>
                                        <Typography variant="body2" sx={{ pb: 1 }}>Playlist by:</Typography>
                                        <LinkedMemberAvatar profile={data.owner} />
                                    </If>
                                </Grid>
                                <Grid item xs={12} sx={{ pb: '100px' }}>
                                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between" flexWrap="wrap">
                                        <Typography variant="h6">Tracks</Typography>
                                        <If condition={!!assignmentId}>
                                            <Stack direction="row" spacing={1} alignItems="center" flexShrink={0}>
                                                <Typography>Original order</Typography>
                                                <Switch
                                                    defaultChecked={true}
                                                    onChange={(e) => {
                                                        if (e.target.checked) {
                                                            const sortedByComments = orderBy(audioLists, 'commentsCount', 'asc');
                                                            setAudioLists(sortedByComments);
                                                        } else {
                                                            const originalOrder = orderBy(audioLists, 'order');
                                                            setAudioLists(originalOrder);
                                                        }
                                                    }}
                                                    inputProps={{ 'aria-label': 'Sort toggle' }}
                                                />
                                                <Typography>Least reviewed</Typography>
                                            </Stack>
                                        </If>
                                    </Stack>
                                    <If condition={!!audioLists?.length} fallbackContent={addSongsToPlaylistLoading ? <CircularProgress /> : <Typography>No tracks in {toggleBreakoutView ? 'breakout view of ' : ''} playlist.</Typography>}>
                                        <Stack direction="column" sx={{ minWidth: 0 }}>
                                            {audioLists.map((item, index) => (
                                                <TrackListItem
                                                    isCurrentIndex={index === currentIndex}
                                                    key={item.submissionId}
                                                    onClick={() => {
                                                        setCurrentIndex(index)
                                                        if (isPlaying) {
                                                            playerRef?.current?.pause()
                                                            setIsPlaying(false)
                                                        } else {
                                                            playerRef?.current?.play()
                                                            setIsPlaying(true)
                                                        }

                                                    }}>
                                                    <Box sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        width: '100%',
                                                        justifyContent: 'space-between'
                                                    }}>
                                                        <Box style={{ margin: '5px 5px 0 0', width: '20px' }}>
                                                            <div style={{
                                                                width: '20px',
                                                                height: '20px',
                                                                backgroundImage: `url(${item.cover ? item.cover : PLAYLIST_ARTWORK})`,
                                                                backgroundSize: 'cover',
                                                                backgroundPosition: '50% 50%'
                                                            }}></div>
                                                        </Box>
                                                        <Typography noWrap sx={{ marginRight: 'auto' }}>
                                                            {item.order !== undefined ? item.order + 1 : index + 1} {item.singer} – {item.name}
                                                        </Typography>
                                                        <IconButton
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                setCurrentIndex(index)
                                                                setToggleTrackView(true)
                                                            }}
                                                            sx={{ mr: 2 }}
                                                        >
                                                            <Badge badgeContent={audioLists[index]?.commentsCount} color="secondary">
                                                                <Forum />
                                                            </Badge>
                                                        </IconButton>
                                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                            {isPlaying && currentIndex === index ? <Pause /> : <PlayArrowOutlined />}
                                                            <If condition={trackDurations.length}>
                                                                <Typography variant='caption'>
                                                                    {formatAudioDuration(item.trackDuration || trackDurations[index])}
                                                                </Typography>
                                                            </If>
                                                        </Box>
                                                    </Box>
                                                </TrackListItem>
                                            ))}
                                            <If condition={!!totalPlaylistDuration}>
                                                <TrackListItem>
                                                    <Typography align='right'>Total: {totalPlaylistDuration}</Typography>
                                                </TrackListItem>
                                            </If>
                                        </Stack>
                                    </If>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </If >
            {/* <If condition={isNumber(currentIndex) && !!audioLists.length}> */}
            {/* for auth users, the player is part of the global layout */}
            <If condition={!user}>
                < AudioPlayer />
            </If>
            {/* </If> */}
            <If condition={toggleTrackView}>
                <If condition={isNumber(currentIndex) && !!audioLists?.[currentIndex]} fallbackContent={
                    <Grid item xs={12}>
                        <p>No tracks in {toggleBreakoutView ? 'breakout view of ' : ''} playlist.</p>
                    </Grid>
                } >
                    <Grid item xs={12}>
                        <Card sx={{
                            display: 'flex',
                            height: '380px',
                            backgroundImage: palette ? `linear-gradient(${palette[0]}80, ${palette[1]}80), url(${PLAYLIST_ARTWORK})` : `url(${PLAYLIST_ARTWORK})`,
                            backgroundSize: 'cover'
                        }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="h2" variant="h5" color="white" style={{ lineHeight: "37px", backgroundColor: "rgba(0,0,0,.8)", fontWeight: 100, padding: "4px 7px" }}>
                                        {audioLists?.[currentIndex]?.name?.toString()}
                                    </Typography>
                                    <If condition={audioLists?.[currentIndex]?.profile?.id} fallbackContent={
                                        <Typography component="h3" variant="subtitle1" color="#ccc" style={{ lineHeight: 1.2, backgroundColor: "rgba(0,0,0,.8)", fontWeight: 100, marginTop: "4px", padding: "2px 7px 3px" }}>
                                            {audioLists?.[currentIndex]?.singer?.toString()}
                                        </Typography>
                                    }>
                                        <Link to={ROUTES.viewProfile.getPath({ profileId: audioLists?.[currentIndex]?.profile?.id })} style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <Typography component="h3" variant="subtitle1" color="#ccc" style={{ lineHeight: 1.2, backgroundColor: "rgba(0,0,0,.8)", fontWeight: 100, marginTop: "4px", padding: "2px 7px 3px" }}>
                                                {audioLists?.[currentIndex]?.singer?.toString()}
                                            </Typography>
                                        </Link>
                                    </If>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', ml: 2, mb: 2, pl: 1, backgroundColor: "rgba(0,0,0,.8)", width: '150px' }}>
                                    <IconButton aria-label="previous" onClick={() => playerRef.current.playPrev()}>
                                        {theme.direction === 'rtl' ? <SkipNextIcon sx={{ color: "#fff" }} /> : <SkipPreviousIcon sx={{ color: "#fff" }} />}
                                    </IconButton>
                                    {
                                        !!isPlaying ?
                                            <IconButton aria-label="pause" onClick={() => {
                                                playerRef.current.pause()
                                            }
                                            }>
                                                <Pause sx={{ color: "#fff", height: 38, width: 38 }} />
                                            </IconButton>
                                            : <IconButton aria-label="play" onClick={() => {
                                                playerRef.current.play()
                                            }}>
                                                <PlayArrowIcon sx={{ color: "#fff", height: 38, width: 38 }} />
                                            </IconButton>


                                    }
                                    <IconButton aria-label="next" onClick={() => playerRef.current.playNext()}>
                                        {theme.direction === 'rtl' ? <SkipPreviousIcon sx={{ color: "#fff" }} /> : <SkipNextIcon sx={{ color: "#fff" }} />}
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box sx={{ alignSelf: 'center', marginLeft: 'auto', paddingRight: '0.5em' }}>
                                <CardMedia
                                    component="img"
                                    image={SONG_ARTWORK}
                                    alt={`${audioLists?.[currentIndex]?.name?.toString()} by ${audioLists?.[
                                        currentIndex
                                    ]?.singer?.toString()}`}
                                />

                            </Box>
                            <If condition={loggedIn}>
                                <Box sx={{ float: 'right', m: 1 }}>
                                    <IconButton
                                        onClick={() => setPlaylistMenuOpen(!playlistMenuOpen)}
                                        ref={trackPlaylistMenuRef}
                                        sx={{
                                            backgroundColor: 'rgba(0,0,0,.75)',
                                            '&:hover': { backgroundColor: 'rgba(255,255,255,1)' }
                                        }}>
                                        <MoreVert color='secondary'></MoreVert>
                                    </IconButton>
                                    <PlaylistMenu menuRef={trackPlaylistMenuRef} />
                                </Box>
                            </If>
                        </Card>
                    </Grid >
                </If>
                <If condition={isNumber(currentIndex) && !!audioLists?.[currentIndex]}>
                    <If condition={!!audioLists?.[currentIndex]?.lyrics}>
                        <Grid item xs={12}>
                            <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                                <Typography variant="body2">
                                    {audioLists?.[currentIndex]?.lyrics}
                                </Typography>
                            </pre>
                        </Grid>
                    </If>
                    <Grid item xs={12} sx={{ pb: '100px' }}>
                        <If condition={!!loggedIn}
                            fallbackContent={<Alert severity="info">
                                <Link to={ROUTES.assignment.getPath({ assignmentId })}>Sign in</Link> for comments and more content and features.
                            </Alert>}>
                            <FeedbackSection
                                requestedFeedback={!!audioLists?.[currentIndex]?.requestFeedback}
                                assignmentId={assignmentId || audioLists?.[currentIndex]?.assignmentId}
                                submissionId={audioLists?.[currentIndex]?.submissionId}
                                recipientEmail={audioLists?.[currentIndex]?.profile?.email}
                                workshopId={data?.workshopId || audioLists?.[currentIndex]?.workshopId}
                                showToggle={false}
                            />
                        </If>
                    </Grid>
                </If >
            </If>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                sx={{ zIndex: 3000 }}
                open={snackbarOpen}
                onClose={() => setSnackbarOpen(false)}
                color={fetchCreateTrackData ? "success" : "error"}
                autoHideDuration={3000}
                message={fetchCreateTrackData ? `Successfully added track to playlist` : `Could not add track to playlist.`}
            />
            <Modal open={addToPlaylistModalOpen} onClose={() => setAddToPlaylistModalOpen(false)}>
                <Box sx={modalStyle}>
                    <IconButton sx={{ float: 'right', m: 1, position: 'absolute', right: 0, top: 0 }} onClick={() => setAddToPlaylistModalOpen(false)}>
                        <Close />
                    </IconButton>
                    <form onSubmit={onSubmitAddToPlaylist}>
                        <FormControl fullWidth sx={{ pt: 2 }}>
                            <InputLabel id="modal-playlist-select">My playlists</InputLabel>
                            <Select labelId="modal-playlist-select" label="My playlists" value={addToPlaylistSelection} onChange={e => setAddToPlaylistSelection(e.target.value)}>
                                <MenuItem value="">
                                    <em>Create New</em>
                                </MenuItem>
                                {fetchListPlaylistsData?.playlistsByDate?.items.map(playlist => (
                                    <MenuItem value={playlist} key={playlist.id}>
                                        {playlist.title}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Button type="submit" fullWidth>{addToPlaylistSelection ? 'Add' : 'Create New'}</Button>
                    </form>
                </Box>
            </Modal>
        </Grid >
    )
}

export default Playlist
