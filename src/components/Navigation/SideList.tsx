import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Button, Typography } from '@mui/material';
import { useLocation } from 'react-use';
import { getDisplayName, getRouteConfigFromLocation } from '../../utils';
import { ROUTES } from '../../constants';
import { navigate, Link } from 'gatsby';
import { useProfile } from '../../auth/hooks';
import { ArrowForward } from '@mui/icons-material';


export default function NavList() {
  const location = useLocation()
  const [routeConfig, setRouteConfig] = React.useState()

  React.useEffect(() => {
    if (location) {
      setRouteConfig(getRouteConfigFromLocation(location))
    }
  }, [location])

  const getUrl = (navPath) => {
    const { params } = ROUTES[navPath];
    const url = ROUTES[navPath]?.getPath ? ROUTES[navPath]?.getPath(params) : ROUTES[navPath].path;
    return url;
  }

  return <List component="nav" aria-label="main mailbox folders">
    {routeConfig?.navPaths?.map(navPath =>
      <ListItemButton
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
  </List >
}

export const SideBarNav = () => {
  const { profile } = useProfile();
  const displayName = getDisplayName(profile)
  const shouldSetupProfile = !profile?.displayName || !profile?.avatar
  return (

    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

      <Box sx={{ p: 1 }}>
        <Typography variant="h4">Hi {displayName}</Typography>
        {shouldSetupProfile ? <Typography variant="body1">
          <Button endIcon={<ArrowForward />} component={Link} to={ROUTES.editProfile.path} sx={{ color: 'primary.main' }} >
            Setup your profile
          </Button>
        </Typography> : null}
      </Box>
      <Divider />
      <NavList />
    </Box>
  )
}