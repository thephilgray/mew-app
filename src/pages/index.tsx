import * as React from 'react'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/react'
import watercolor from '../assets/watercolor.png'
import { Button, Grid, Typography } from '@material-ui/core'

const IndexPage: React.FC = (): JSX.Element => {
    return (
        <>
            <title>MEW HOME</title>
            <Global
                styles={css`
                    body {
                        background: url(${watercolor});
                    }
                `}
            />
            <Grid container justify="center" alignItems="center" style={{ height: '90vh' }}>
                <Grid item>
                    <Grid container spacing={2} justify="center" alignItems="center">
                        <Grid item xs={12}>
                            <Typography variant="h2" component="h1" align="center" color="primary">
                                MEW {new Date().getFullYear()}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button component={Link} variant="contained" color="primary" to="/app">
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
