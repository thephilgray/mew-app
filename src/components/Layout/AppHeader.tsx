import * as React from 'react'
import { Link, navigate } from 'gatsby'
import { Auth } from 'aws-amplify'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { logout, isLoggedIn } from '../../utils/auth'
import { ROUTE_NAMES } from '../../pages/app'

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            marginRight: 'auto',
            justifySelf: 'flex-start',
        },
        menuButton: {},
        toolbar: {
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto',
        },
    }),
)

const AppHeader: React.FC<{ siteTitle: string }> = ({ siteTitle = '' }) => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const open = Boolean(anchorEl)
    const authenticated = isLoggedIn()

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleSignout = () => {
        handleClose()
        return (
            Auth.signOut()
                .then(() => logout(() => navigate('/')))
                // tslint:disable-next-line: no-console
                .catch((err) => console.log('error:', err))
        )
    }

    const handleGoToProfile = () => {
        handleClose()
        return navigate(ROUTE_NAMES.profile.path)
    }

    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <div className={classes.title}>
                    <IconButton component={Link} to={authenticated ? '/app/' : '/'} color="inherit">
                        <Typography variant="h6" component="h1">
                            {siteTitle}
                        </Typography>
                    </IconButton>
                </div>
                {authenticated && (
                    <div className={classes.menuButton}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            edge="end"
                            size="medium"
                        >
                            <AccountCircle />
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
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleGoToProfile}>Profile</MenuItem>
                            <MenuItem onClick={handleSignout}>Signout</MenuItem>
                        </Menu>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default AppHeader
