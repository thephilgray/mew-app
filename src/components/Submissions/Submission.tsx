import React from 'react'
import { Typography, Paper } from '@material-ui/core'

const Submission = (): JSX.Element => {
    return (
        <Paper style={{ padding: '1rem' }}>
            <header>
                <Typography variant="h5" component="h2">
                    Submission Title
                </Typography>
                <Typography variant="body1">Byline</Typography>
            </header>
            <section>
                <Typography variant="h6" component="h3">
                    Details
                </Typography>

                <Typography variant="body1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cupiditate qui nostrum consectetur
                    asperiores aut officia voluptas? Fuga nihil, assumenda quaerat officiis eligendi consequatur quia
                    soluta mollitia facilis at quibusdam.
                </Typography>
                <Typography variant="h6" component="h3">
                    Uploads
                </Typography>
            </section>
            <footer>
                <Typography variant="h6" component="h3">
                    Comments
                </Typography>
            </footer>
        </Paper>
    )
}

export default Submission
