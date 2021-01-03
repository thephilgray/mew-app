import React from 'react'
import { Typography } from '@material-ui/core'
import MultimediaPostForm from '../Form/MultimediaPostForm'

const NewSubmission: React.FC = () => {
    return (
        <div>
            <Typography variant="h5" component="h2">
                New Submission
            </Typography>
            <MultimediaPostForm headerImage editor callback={() => Promise.resolve()} />
        </div>
    )
}

export default NewSubmission
