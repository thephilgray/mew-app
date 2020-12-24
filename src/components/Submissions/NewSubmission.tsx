import React from 'react'
import MultimediaPostForm from '../Form/MultimediaPostForm'

const NewSubmission: React.FC = () => {
    return (
        <div>
            <h1>New Submission</h1>
            <MultimediaPostForm headerImage editor />
        </div>
    )
}

export default NewSubmission
