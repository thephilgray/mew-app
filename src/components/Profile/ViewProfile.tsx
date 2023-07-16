
import React, { useEffect } from 'react'
import { gql, useLazyQuery } from '@apollo/react-hooks'
import { profileByProfileId } from '../../graphql/queries'
import { Avatar, Button, Card, CardContent, CardMedia, Chip, Divider, Grid, IconButton, Link, List, ListItem, Stack, Typography } from '@mui/material'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { Edit, Launch } from '@mui/icons-material'
import { useProfile, useUser } from '../../auth/hooks'
import { navigate } from 'gatsby'
import If from '../If'
import { getCloudFrontURL } from '../../utils'
import GroupGuard from '../Auth/GroupGuard'
import { Group, ROUTES } from '../../constants'
import Loading from '../Loading'

const ViewProfile: React.FC<{ profileId: string }> = ({ profileId = '' }) => {
  const user = useUser()
  const { profile: profileInState, refetch: refetchProfileInState, loading: loadingProfileInState } = useProfile()
  const getOwnProfile = !profileId;

  const [fetchProfile, {
    loading: getProfileLoading,
    error: getProfileError,
    data: getProfileData,
    refetch: getProfileRefetch
  }] = useLazyQuery(gql(profileByProfileId))

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
          <Avatar src={avatarPath} sx={{ width: 150, height: 150 }} alt={profile?.displayName || profile?.name} />
        </CardMedia>
        <CardContent sx={{ maxWidth: '80vw', overflow: 'auto' }} >
          <Typography gutterBottom variant="h5" sx={{ textAlign: 'center' }}>
            {profile?.displayName || profile?.name} <GroupGuard groups={[Group.admin]}><If condition={profile?.id === profileInState?.id}><Chip label="ADMIN" color="secondary" /></If></GroupGuard>
          </Typography>
          {profile?.bio ? <><Divider sx={{ mb: 2, mt: 2 }} />
            <Typography variant="body1" component="h2">Bio</Typography>
            <pre>
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
          {/* <Divider sx={{ mb: 2, mt: 2 }} /> 
          <Typography variant="body1" component="h2">Submissions</Typography> */}
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