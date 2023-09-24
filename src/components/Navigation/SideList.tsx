import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Avatar, Button, Typography } from '@mui/material';
import { useLocation } from 'react-use';
import { getCloudFrontURL, getDisplayName, getRouteConfigFromLocation } from '../../utils';
import { ROUTES } from '../../constants';
import { navigate, Link } from 'gatsby';
import { useProfile, useUserInAtLeastOneOfTheseGroups } from '../../auth/hooks';
import { ArrowForward } from '@mui/icons-material';
import AdminViewToggle from '../AdminViewToggle';

export default function NavList() {
  const location = useLocation()
  const [routeConfig, setRouteConfig] = React.useState()

  React.useEffect(() => {
    if (location) {
      setRouteConfig(getRouteConfigFromLocation(location))
    }
  }, [location])

  const getUrl = (navPath) => {
    const { params } = routeConfig;
    console.log({ params, navPath, routeConfig })
    const url = ROUTES[navPath]?.getPath ? ROUTES[navPath]?.getPath(params) : ROUTES[navPath].path;
    return url;
  }

  return <List component="nav" aria-label="main mailbox folders">
    {routeConfig?.navPaths
      ?.filter((navPath) => ROUTES[navPath].groups ? useUserInAtLeastOneOfTheseGroups(ROUTES[navPath].groups) : true)
      ?.map(navPath =>
        <ListItemButton
          key={navPath}
          onClick={() => {
            const url = getUrl(navPath)
            navigate(url);
          }}
          selected={getUrl(navPath) === location.pathname}
        >
          {ROUTES[navPath]?.icon ? <ListItemIcon>{ROUTES[navPath].icon()}</ListItemIcon> : null}
          <ListItemText primary={ROUTES[navPath]?.name}></ListItemText>
        </ListItemButton>

      )}
    <AdminViewToggle />
  </List >
}

export const SideBarNav = () => {
  const { profile } = useProfile();
  const displayName = getDisplayName(profile)
  const shouldSetupProfile = !profile?.displayName || !profile?.avatar
  return (

    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

      <Box sx={{ p: 1, display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to={ROUTES.profile.path}>
          <Avatar
            sx={{ width: 150, height: 150, mb: 1 }}
            src={profile?.avatar ? getCloudFrontURL(profile.avatar) : ''}
            alt={getDisplayName(profile)}
          />
        </Link>
        <Typography sx={{ flexBasis: '100%' }} variant="h5" align='center'><span>Hi</span><span style={{
          display: "-webkit-box",
          "WebkitLineClamp": "1",
          "WebkitBoxOrient": "vertical",
          overflow: "hidden",
          "textOverflow": "ellipsis",
        }}>{displayName}</span></Typography>
        {shouldSetupProfile ? <Typography variant="body1">
          <Button endIcon={<ArrowForward />} component={Link} to={ROUTES.editProfile.path} sx={{ color: 'primary.main', textAlign: 'center' }} >
            Setup your profile
          </Button>
        </Typography> : null}
      </Box>
      <Divider />
      <NavList />
    </Box >
  )
}