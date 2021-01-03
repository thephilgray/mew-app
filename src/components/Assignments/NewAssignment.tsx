import React from 'react'
import { Typography } from '@material-ui/core'
import MultimediaPostForm from '../Form/MultimediaPostForm'

const NewAssignment: React.FC = () => {
    return (
        <div>
            <Typography variant="h5" component="h2">
                New Assignment
            </Typography>
            <MultimediaPostForm dateInputs headerImage editor callback={() => ({})} />
        </div>
    )
}

export default NewAssignment
