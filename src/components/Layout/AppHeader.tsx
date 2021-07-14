import * as React from 'react'
import { Link, navigate } from 'gatsby'
import { Auth } from 'aws-amplify'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, Avatar, IconButton, Menu, MenuItem, Toolbar } from '@material-ui/core'
import { logout, isLoggedIn } from '../../auth/utils'
import { ROUTE_NAMES } from '../../pages/app'
import mewAppLogo from '../../assets/mewlogo.png'

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
                    <Link to={authenticated ? '/app/' : '/'}>
                        <img src={mewAppLogo} alt={siteTitle} width="25%" style={{ padding: '.25rem' }} />
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
                            <Avatar />
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
