import React, { useEffect, useMemo, useState } from 'react'
import If from '../If'
import { Alert, Box, Button, Card, CardContent, CardMedia, CircularProgress, Grid, IconButton, LinearProgress, Typography, Select, MenuItem, ListSubheader, OutlinedInput, Chip, FormControl, InputLabel, FormHelperText } from '@mui/material'
import { SkipNext as SkipNextIcon, SkipPrevious as SkipPreviousIcon, CheckCircleTwoTone } from '@mui/icons-material'
import { FeedbackSection } from '../Feedback'
import useColorThief from 'use-color-thief'
import { gql, useQuery } from '@apollo/react-hooks'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { getBreakoutGroupByMembership, getBreakoutGroupName, getCloudFrontURL } from '../../utils'
import { listComments } from '../feedback.queries'
import mewAppLogo from '../../assets/mewlogo.png'
import Error from '../Error'
import { FileRequest } from '../../models'
import { countBy, sortBy, uniqBy } from 'lodash'
import { useUser } from '../../auth/hooks'
import { feedbackAreaOptions } from '../../constants'
import { Controller, useForm } from 'react-hook-form'

export const GiveFeedback: React.FC<{
  fileRequestData: FileRequest
}> = ({
  fileRequestData,
  feedbackGiven,
  setFeedbackGiven,
  setShowPlaylist,
  showPlaylist
}) => {
    const MAX_FEEDBACK = fileRequestData?.workshop?.maxFeedback || 5;
    const [currentIndex, setCurrentIndex] = useState(0)
    const [feedbackGivenOnLoad, setFeedbackGivenOnLoad] = useState(0)
    const [feedbackAreas, setFeedbackAreas] = useState<string[] | null>(null);
    const assignmentId = fileRequestData?.id
    const user = useUser()

    const { control, watch, handleSubmit } = useForm({
        defaultValues: {
            feedbackAreas: []
        }
    });

    const { data: commentsData, loading: commentsLoading, error: commentsError } = useQuery(gql(listComments), {
      variables: {
        filter: { assignmentId: { eq: assignmentId } }
      },
      fetchPolicy: 'no-cache'
    })

    const { breakoutGroupId } = useMemo((): { breakoutGroupName?: string, breakoutGroupId?: string } => {
      if (fileRequestData) {
        const workshop = fileRequestData?.workshop
        return {
          breakoutGroupName: getBreakoutGroupName(workshop, user),
          breakoutGroupId: getBreakoutGroupByMembership(workshop, user)?.id
        }
      } else {
        return { breakoutGroupName: '', breakoutGroupId: '' }
      }

    }, [fileRequestData, user])


    const PLAYLIST_ARTWORK = fileRequestData?.artwork?.path && getCloudFrontURL(fileRequestData.artwork.path) || mewAppLogo;
    const { color, palette } = useColorThief(PLAYLIST_ARTWORK, {
      format: 'hex',
      colorCount: 10,
      quality: 10,
    });

    const feedbackGivenCounts = countBy(commentsData?.listComments?.items, 'email');

    useEffect(() => {
      if (!feedbackGiven && feedbackGivenCounts && feedbackGivenCounts[user?.email]) {
        setFeedbackGiven(feedbackGivenCounts[user?.email])
        setFeedbackGivenOnLoad(feedbackGivenCounts[user?.email])
      }
    }, [user, feedbackGivenCounts])

    const submissions = fileRequestData?.submissions?.items;

    const sortedSubmissions = useMemo(() => sortBy(
      submissions.filter(o =>
        o.email !== user.email &&
        (!breakoutGroupId || breakoutGroupId === o.breakoutGroupId) &&
        o.requestFeedback &&
        uniqBy(o.comments.items, 'email').length < 2 &&
        o.comments.items.filter(c => c.email === user.email).length === 0 &&
        (feedbackAreas && feedbackAreas.length > 0 ? o.feedbackAreas?.some(area => feedbackAreas.includes(area)) : true)
      ),
      o => uniqBy(o.comments.items, 'email').length
    ).slice(0, MAX_FEEDBACK - feedbackGivenOnLoad), [submissions, user, breakoutGroupId, feedbackAreas, MAX_FEEDBACK, feedbackGivenOnLoad]);

    const selectedSongs = sortedSubmissions.map(submission => {
      const { name, fileId, artist, id, artwork, lyrics, workshopId, email, feedbackAreas, completionStage } = submission
      const songFilePath = `${assignmentId}/${fileId}`
      if (songFilePath) {
        const cloudFrontURL = getCloudFrontURL(songFilePath)
        return {
          src: cloudFrontURL,
          name,
          img: artwork?.path && getCloudFrontURL(artwork.path) || PLAYLIST_ARTWORK || mewAppLogo,
          cover: artwork?.path && getCloudFrontURL(artwork.path) || PLAYLIST_ARTWORK || mewAppLogo,
          writer: artist,
          singer: artist,
          fileId,
          id,
          lyrics,
          workshopId,
          email,
          feedbackAreas,
          completionStage
        }
      }
    })

    const nextIndex = currentIndex < selectedSongs.length - 1 ? currentIndex + 1 : 0
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : selectedSongs.length - 1

    const onFeedbackSuccess = () => {
      setFeedbackGiven(feedbackGiven + 1)
    }

    const onSubmit = (values: { feedbackAreas: string[] }) => {
        setFeedbackAreas(values.feedbackAreas);
    }

    if (commentsError) return <Error errorMessage={commentsError} />
    if (commentsLoading) return <CircularProgress />
    // @ts-ignore
    if (!commentsLoading && !fileRequestData?.submissions?.items) return <p>Assignment does not exist or has been deleted.</p>

    if (!feedbackAreas) {
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6">What areas of feedback are you interested in giving?</Typography>
                        <Typography variant="body2">Leave blank to be shown all available tracks.</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Controller
                            name="feedbackAreas"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                                <FormControl fullWidth>
                                    <InputLabel id="feedback-areas-label">What areas do you want to give feedback on?</InputLabel>
                                    <Select
                                        {...field}
                                        labelId="feedback-areas-label"
                                        multiple
                                        input={<OutlinedInput label="What areas do you want to give feedback on?" />}
                                        renderValue={(selected) => (
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                {selected.map((value) => (
                                                    <Chip
                                                        key={value}
                                                        label={value}
                                                        onDelete={() => {
                                                            const newValues = field.value.filter((v) => v !== value);
                                                            field.onChange(newValues);
                                                        }}
                                                        onMouseDown={(event) => {
                                                            event.stopPropagation();
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        )}
                                        MenuProps={{
                                            PaperProps: {
                                                style: {
                                                    maxHeight: 300,
                                                },
                                            },
                                        }}
                                    >
                                        {Object.entries(feedbackAreaOptions).map(([group, options]) => [
                                            <ListSubheader key={group}>{group}</ListSubheader>,
                                            ...options.map((option) => (
                                                <MenuItem
                                                    key={option}
                                                    value={option}
                                                    disabled={field.value.length >= 5 && !field.value.includes(option)}
                                                >
                                                    {option}
                                                </MenuItem>
                                            )),
                                        ])}
                                    </Select>
                                    <FormHelperText>Select up to 5 areas.</FormHelperText>
                                </FormControl>
                            )}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained">Start Giving Feedback</Button>
                    </Grid>
                </Grid>
            </form>
        )
    }

    if (!selectedSongs.length) return <Alert severity="warning">
      <Typography variant='body1'>No more feedback to give! If you've already given feedback for {MAX_FEEDBACK} tracks, wait for the playlist. Otherwise, check back later.</Typography>
    </Alert>

    const currentSong = selectedSongs[currentIndex]

    return (
      <If condition={!!currentSong}>
        <Grid item xs={12}>
          <If condition={selectedSongs.length > 1}>
            <IconButton onClick={() => setCurrentIndex(previousIndex)}><SkipPreviousIcon /></IconButton>
          </If>
          Giving feedback for track {currentIndex + 1} of {selectedSongs.length}
          <If condition={selectedSongs.length > 1}>
            <IconButton onClick={() => setCurrentIndex(nextIndex)}><SkipNextIcon /></IconButton>
          </If>
          <If condition={showPlaylist}>
            <Button onClick={() => setShowPlaylist(false)} variant='contained' color='warning' sx={{ float: 'right' }}>Quit</Button>
          </If>
        </Grid>
        <Grid item xs={12} bottom={2}>
          <Box sx={{ display: 'flex', alignItems: 'center', pb: 2, pt: 2 }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress color='success' variant="determinate" value={((feedbackGiven) / MAX_FEEDBACK) * 100} />
            </Box>
            <Box sx={{ minWidth: 80 }}>
              <CheckCircleTwoTone color='success' sx={{ verticalAlign: 'bottom', mr: 1 }} />
              <Typography variant="body2" component='span' color="text.secondary">{feedbackGiven || '0'} of {selectedSongs.length}</Typography>
            </Box>
          </Box>

        </Grid>
        <Grid item xs={12}>
          <Card sx={{ display: 'flex', height: '380px', backgroundImage: palette ? `linear-gradient(${palette[0]}80, ${palette[1]}80), url(${PLAYLIST_ARTWORK})` : '', backgroundSize: 'cover' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="h2" variant="h5" color="white" style={{ lineHeight: "37px", backgroundColor: "rgba(0,0,0,.8)", fontWeight: 100, padding: "4px 7px" }}>
                  {currentSong?.name}
                </Typography>
                <Typography component="h3" variant="subtitle1" color="#ccc" style={{ lineHeight: 1.2, backgroundColor: "rgba(0,0,0,.8)", fontWeight: 100, marginTop: "4px", padding: "2px 7px 3px" }}>
                  {currentSong?.singer}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
                  {currentSong?.completionStage && <Chip label={currentSong.completionStage} size="small" sx={{ backgroundColor: 'rgba(0,0,0,0.8)', color: 'white' }} />}
                  {currentSong?.feedbackAreas?.map((area) => (
                    <Chip key={area} label={area} size="small" sx={{ backgroundColor: 'rgba(0,0,0,0.8)', color: 'white' }} />
                  ))}
                </Box>
              </CardContent>
            </Box>
            <Box sx={{ alignSelf: 'center', marginLeft: 'auto', paddingRight: '0.5em' }}>
              <CardMedia
                component="img"
                sx={{ width: 340, height: 340 }}
                image={currentSong?.img}
                alt={`${currentSong?.name} by ${currentSong?.singer}`}
              />

            </Box>
          </Card>
          <AudioPlayer
            src={currentSong?.src}
          />
        </Grid >
        <If condition={!!currentSong?.lyrics}></If>
        <Grid item xs={12}>
          <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
            <Typography variant="body2">
              {currentSong?.lyrics}
            </Typography>
          </pre>
        </Grid>
        <Grid item xs={12}>
          <FeedbackSection
            requestedFeedback={true}
            assignmentId={assignmentId}
            submissionId={currentSong?.id}
            workshopId={currentSong?.workshopId}
            showToggle={false}
            showByMe={true}
            showAll={false}
            onSuccess={onFeedbackSuccess}
            recipientEmail={currentSong?.email}
          />
        </Grid>
      </If>
    )
  }