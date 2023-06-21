import * as React from 'react'
import { Link, navigate } from 'gatsby'
import { makeStyles } from 'tss-react/mui';

import { Avatar, IconButton, Menu, MenuItem, Toolbar, Typography, useMediaQuery } from '@mui/material'
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import mewAppLogo from '../../assets/mewlogo.png'
import { useProfile, useSignOut, useUser } from '../../auth/hooks'
import { getCloudFrontURL } from '../../utils';
import { ROUTES } from '../../constants';

import MenuIcon from '@mui/icons-material/Menu';
import { useLayout } from './layout.context';


interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));





const useStyles = makeStyles()(() =>
({
    title: {
        marginRight: 'auto',
        justifySelf: 'flex-start',
    },

    menuButton: {},

    toolbar: {
        width: '100%',
        // maxWidth: '1000px',
        margin: '0 auto',
    }
}));



const AppHeader: React.FC<{ siteTitle: string }> = ({ siteTitle = '' }) => {
    const { classes } = useStyles()
    const { profile } = useProfile();
    const [drawerOpen, setDrawerOpen] = useLayout()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const user = useUser()
    const isOpen = Boolean(anchorEl)

    const authenticated = !!user
    const signout = useSignOut()

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleSignout = () => {
        handleClose()
        navigate('/')
        signout()
    }

    const handleGoToProfile = () => {
        handleClose()
        return navigate(ROUTES.profile.path)
    }

    const lg = useMediaQuery((theme) => theme.breakpoints.up('lg'));


    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

    return <>
        <AppBar position={lg ? 'static' : 'fixed'} open={drawerOpen}>
            <Toolbar className={classes.toolbar}>
                {!lg && authenticated ?
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(drawerOpen && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    : null
                }
                <div className={classes.title}>
                    <Link to={authenticated ? '/app/' : '/'}>
                        <img src={mewAppLogo} alt={siteTitle} width={lg ? 90 : 60} style={{ padding: '.25rem' }} />
                    </Link>
                </div>
                {authenticated && (
                    <div className={classes.menuButton}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            size="medium"
                        >
                            <Avatar src={profile?.avatar ? getCloudFrontURL(profile.avatar) : ''} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={isOpen}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleGoToProfile}>Profile</MenuItem>
                            <MenuItem onClick={handleSignout}>Signout</MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    </>


}


export default AppHeader
