import * as React from 'react'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/react'
import watercolor from '../assets/watercolor.png'
import { Button, Grid, Typography } from '@mui/material'
import mewAppLogo from '../assets/mewlogo.png'

const IndexPage: React.FC = (): JSX.Element => {
    return (
        <>
            <title>MEW HOME</title>
            <Global
                styles={css`
                    body {
                        background-image: url(${watercolor});
                        animation: moveIt 60s linear infinite;
                    }
                  @keyframes moveIt {
                    from {background-position: bottom left;}
                    to {background-position: top right;}
                    }
                `}
            />
            <Grid container justifyContent="center" alignItems="center" style={{ height: '90vh' }}>
                <Grid item>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item xs={12} sx={{ textAlign: "center" }}>
                            <img src={mewAppLogo} alt="MEW logo" style={{ width: "100%", maxWidth: "200px", padding: '.25rem' }} />
                        </Grid>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Button component={Link} variant="contained" color="secondary" to="/app">
                                Sign in
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default IndexPage
