
import React from 'react'
import { gql, useQuery } from '@apollo/react-hooks'
import { profileByProfileId } from '../../graphql/queries'
import { Avatar, Button, Card, CardContent, CardMedia, Chip, CircularProgress, Divider, Grid, IconButton, Link, List, ListItem, Stack, Typography } from '@mui/material'
import AppBreadcrumbs from '../AppBreadcrumbs'
import { ROUTE_NAMES } from '../../pages/app'
import { Edit, Launch } from '@mui/icons-material'
import { useProfile, useUser } from '../../auth/hooks'
import { navigate } from 'gatsby'
import If from '../If'
import { getCloudFrontURL } from '../../utils'
import GroupGuard from '../Auth/GroupGuard'
import { Group } from '../../constants'

const ViewProfile: React.FC<{ profileId: string }> = ({ profileId = '' }) => {
  const user = useUser()
  const { profile: profileInState } = useProfile()

  const {
    loading: getProfileLoading,
    error: getProfileError,
    data: getProfileData,
    refetch: getProfileRefetch,
  } = useQuery(gql(profileByProfileId), {
    variables: { id: profileId || profileInState?.id },
  })


  if (getProfileLoading) {
    return <CircularProgress />
  }

  const [profile] = getProfileData?.profileByProfileId?.items || []
  const avatarPath = profile?.avatar ? getCloudFrontURL(profile.avatar) : ''

  if (!profile) {
    return <Typography>That profile does not exist.</Typography>
  }

  return <Grid container spacing={3}>
    <Grid item xs={12}>
      <AppBreadcrumbs
        paths={[ROUTE_NAMES.home, ROUTE_NAMES.viewProfile]}
      />
    </Grid>
    <Grid item xs={12}>
      <Card>
        <CardMedia sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
          <Avatar src={avatarPath} sx={{ width: 150, height: 150 }} alt={profile?.displayName || profile?.name} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" sx={{ textAlign: 'center' }}>
            {profile?.displayName || profile?.name} <GroupGuard groups={[Group.admin]}><Chip label="ADMIN" color="secondary" /></GroupGuard>
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
    {user?.email === profile?.email ?
      <Grid item xs={12}>
        <Divider orientation="vertical" flexItem />
        <Button
          onClick={() => navigate(ROUTE_NAMES.editProfile.path)}
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
      : null}

  </Grid>

}

export default ViewProfile