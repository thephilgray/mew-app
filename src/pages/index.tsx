import * as React from 'react'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/react'
import watercolor from '../assets/watercolor.png'
import { Button, Grid, Typography, Box } from '@mui/material'
import mewAppLogo from '../assets/mewlogo.png'
import Theme from '../components/Layout/Theme';

const IndexPage: React.FC = (): JSX.Element => {
    return (
        <Theme>
            <title>MEW HOME</title>
            <Global
                styles={css`
                    body {
                        background-image: url(${watercolor});
                        animation: moveIt 60s linear infinite;
                        background-size: cover;
                    }
                  @keyframes moveIt {
                    from {background-position: bottom left;}
                    to {background-position: top right;}
                    }
                `}
            />
            <Box
              sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                zIndex: -1,
              }}
            />
            <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                <Button component={Link} variant="contained" color="secondary" to="/app">
                    Member Sign In
                </Button>
            </Box>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                sx={{ minHeight: '100vh', padding: 2, textAlign: 'center' }}
            >
                <Box sx={{ maxWidth: '800px' }}>
                    <img src={mewAppLogo} alt="MEW logo" style={{ width: "100%", maxWidth: "200px", padding: '.25rem' }} />
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="h5" component="h1" gutterBottom>
                            ABOUT MUSIC EVERY WEEK
                        </Typography>
                        <Typography variant="body1" paragraph>
                            MEW is a music community and songwriting accountability group that's been active since November 2019. We’ve written 8,685 songs as of May 2024, and more every week. The current session is open for registration until September 18th, and then we will close until January or February 2026.
                        </Typography>
                        <Typography variant="h6" component="h2" gutterBottom>
                            These are the rules:
                        </Typography>
                        <Box component="ul" sx={{ display: 'inline-block', textAlign: 'left', padding: 0, listStylePosition: {xs: 'inside', md: 'outside'}} }>
                            <Typography component="li" variant="body1">Write and record a new song every week – or you’re out!</Typography>
                            <Typography component="li" variant="body1">When you submit a song, you can hear everyone else’s songs</Typography>
                            <Typography component="li" variant="body1">There are optional theme prompts each week, but it’s very open ended</Typography>
                            <Typography component="li" variant="body1">All genres and levels are welcome and encouraged!</Typography>
                            <Typography component="li" variant="body1">We have peer workshops and skill shares too sometimes, and a discord group to chat music and miscellany</Typography>
                            <Typography component="li" variant="body1">Everything is free, forever</Typography>
                        </Box>
                        <Typography variant="h5" component="p" sx={{ mt: 2 }}>
                            You’re invited!
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    href="http://eepurl.com/hp04-9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    join the email list
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href="https://www.patreon.com/c/MusicEveryWeek"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    support the project
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ mt: 4 }}>
                        <Typography variant="body2">
                            Questions? Email <a href="mailto:MEWisMusicEveryWeek@gmail.com">MEWisMusicEveryWeek@gmail.com</a>.
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Theme>
    )
}

export default IndexPage