import React, { useEffect } from 'react';
import SideListNav, { SideBarNav } from '../Navigation/SideList'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import { Avatar, Box, Button, CssBaseline, Divider, Grid, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery, } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer';

import { useUser } from '../../auth/hooks'
import If from '../If'
import { useLayout } from './layout.context';
import NavList from '../Navigation/SideList';
import { useTheme } from '@emotion/react';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


type SideNavProps = {

};

const SideNav: React.FC<SideNavProps> = () => {
  const user = useUser()
  const [drawerOpen, setDrawerOpen] = useLayout()
  const theme = useTheme()
  const lg = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    if (drawerOpen && !!lg) {
      handleDrawerClose()
    }
  }, [lg])

  return <If condition={lg} fallbackContent={
    <Drawer variant="permanent" open={drawerOpen}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <NavList />
    </Drawer>

  }>
    <Grid item xs={12} lg={2} sx={{
      width: 250, borderRight: '1px solid #ececf1', overflow: 'auto', padding: '50px 0 20px'
    }}>
      <SideBarNav />
    </Grid>

  </If>
}
export default SideNav;