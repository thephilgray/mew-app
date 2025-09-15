
import React, { useContext, useEffect } from 'react'
import { gql, useLazyQuery } from '@apollo/react-hooks'
import { Avatar, Button, Card, CardContent, CardMedia, Chip, Divider, Grid, IconButton, Link, List, ListItem, Stack, Typography } from '@mui/material'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { Edit, Launch, PlayArrow } from '@mui/icons-material'
import { AudioPlayerContext } from '../AudioPlayer/audio-player.context'
import { useProfile, useUser } from '../../auth/hooks'
import { navigate } from 'gatsby'
import If from '../If'
import { getCloudFrontURL, getDisplayName } from '../../utils'
import GroupGuard from '../Auth/GroupGuard'
import { Group, ROUTES } from '../../constants'
import Loading from '../Loading'

const ViewProfile: React.FC<{ profileId: string }> = ({ profileId = '' }) => {
  const user = useUser()
  const { profile: profileInState, refetch: refetchProfileInState, loading: loadingProfileInState } = useProfile()
  const getOwnProfile = !profileId;

  const { setAudioLists } = useContext(AudioPlayerContext)

  const [fetchProfile, {
    loading: getProfileLoading,
    error: getProfileError,
    data: getProfileData,
    refetch: getProfileRefetch
  }] = useLazyQuery(gql`
    query ProfileByProfileId(
      $id: ID!
      $sortDirection: ModelSortDirection
      $filter: ModelProfileFilterInput
      $limit: Int
      $nextToken: String
    ) {
      profileByProfileId(
        id: $id
        sortDirection: $sortDirection
        filter: $filter
        limit: $limit
        nextToken: $nextToken
      ) {
        items {
          email
          id
          name
          displayName
          links {
            id
            text
            url
          }
          avatar
          bio
          sub
          featuredSubmissions {
            items {
              fileRequestSubmission {
                id
                name
                artist
                artwork {
                  path
                }
                duration
                fileId
              }
            }
          }
          curatedPlaylists {
            items {
              playlist {
                id
                title
                artwork {
                  path
                }
                tracks {
                  items {
                    submission {
                      id
                      fileId
                      artist
                      name
                      duration
                    }
                  }
                }
              }
            }
          }
        }
        nextToken
      }
    }
  `)

  useEffect(() => {
    if (!getProfileLoading && !getProfileLoading && !getProfileData) {
      if (!!profileId && !getOwnProfile) {
        fetchProfile({
          variables: { id: profileId },
        })
      }
    }

  }, [profileId, profileInState])

  useEffect(() => {
    if (!profileId) {
      refetchProfileInState()
    }

  }, [])


  if (getProfileLoading) {
    return <Loading />
  }

  const profile = getOwnProfile ? profileInState : getProfileData?.profileByProfileId?.items?.[0]
  const avatarPath = profile?.avatar ? getCloudFrontURL(profile.avatar) : ''

  if (!profile) {
    return <Typography>That profile does not exist.</Typography>
  }

  return <Grid container spacing={3} sx={{ maxWidth: '800px' }}>
    <Grid item xs={12}>
      <AppBreadcrumbs
        paths={[ROUTES.home, ROUTES.viewProfile]}
      />
    </Grid>
    <Grid item xs={12}>
      <Card>
        <CardMedia sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
          <Avatar src={avatarPath} sx={{ width: 150, height: 150 }} alt={getDisplayName(profile)} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ textAlign: 'center' }}>
            {profile?.displayName || profile?.name} <GroupGuard groups={[Group.admin]}><If condition={profile?.id === profileInState?.id}><Chip label="ADMIN" color="secondary" /></If></GroupGuard>
          </Typography>
          {profile?.bio ? <><Divider sx={{ mb: 2, mt: 2 }} />
            <Typography variant="body1" component="h2">Bio</Typography>
            <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
              <Typography variant="body2" color="text.secondary">
                {profile?.bio}
              </Typography>
            </pre>
          </> : null}
          <If condition={profile?.links?.length}>
            <Divider sx={{ mb: 2, mt: 2 }} />
            <Typography variant="body1" component="h2">Links</Typography>
            <List>
            </List>
            {profile?.links && profile.links.map(({ url, text, id }) => (
              <ListItem key={id}>
                <Link target='_blank' href={url}>{text} <Launch /></Link>
              </ListItem>
            ))}
          </If>
          <If condition={profile?.featuredSubmissions?.items?.length}>
            <Divider sx={{ mb: 2, mt: 2 }} />
            <Typography variant="body1" component="h2">Featured Tracks</Typography>
            <List>
              {profile.featuredSubmissions.items.map(({ fileRequestSubmission: submission }) => (
                <ListItem
                  key={submission.id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="play" onClick={() => setAudioLists([{
                      name: submission.name,
                      singer: submission.artist,
                      cover: submission.artwork?.path ? getCloudFrontURL(submission.artwork.path) : '',
                      musicSrc: getCloudFrontURL(submission.fileId),
                    }])}>
                      <PlayArrow />
                    </IconButton>
                  }
                >
                  <img src={submission.artwork?.path ? getCloudFrontURL(submission.artwork.path) : 'https://via.placeholder.com/150'} alt="artwork" width={50} height={50} style={{ marginRight: '1em' }} />
                  <Typography>{submission.artist} - {submission.name}</Typography>
                </ListItem>
              ))}
            </List>
          </If>
          <If condition={profile?.curatedPlaylists?.items?.length}>
            <Divider sx={{ mb: 2, mt: 2 }} />
            <Typography variant="body1" component="h2">Curated Playlists</Typography>
            <List>
              {profile.curatedPlaylists.items.map(({ playlist }) => (
                <ListItem
                  key={playlist.id}
                  secondaryAction={
                    <IconButton edge="end" aria-label="play" onClick={() => {
                      const audioList = playlist.tracks.items.map(({ submission }) => ({
                        name: submission.name,
                        singer: submission.artist,
                        cover: playlist.artwork?.path ? getCloudFrontURL(playlist.artwork.path) : 'https://via.placeholder.com/150',
                        musicSrc: getCloudFrontURL(submission.fileId),
                      }))
                      setAudioLists(audioList)
                    }}>
                      <PlayArrow />
                    </IconButton>
                  }
                >
                  <img src={playlist.artwork?.path ? getCloudFrontURL(playlist.artwork.path) : 'https://via.placeholder.com/150'} alt="artwork" width={50} height={50} style={{ marginRight: '1em' }}/>
                  <Typography>{playlist.title}</Typography>
                </ListItem>
              ))}
            </List>
          </If>
        </CardContent>
      </Card>
    </Grid>
    {
      user?.email === profile?.email ?
        <Grid item xs={12}>
          <Divider orientation="vertical" flexItem />
          <Button
            onClick={() => navigate(ROUTES.editProfile.path)}
            type="button"
            color="primary"
            variant='contained'
            fullWidth
            startIcon={<Edit />}
            aria-label="Edit Profile"
            size="large">
            Edit Profile
          </Button>
        </Grid>
        : null
    }

  </Grid >

}

export default ViewProfile