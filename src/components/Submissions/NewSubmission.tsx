import React from 'react'
import MultimediaPostForm from '../Form/MultimediaPostForm'

const NewSubmission: React.FC = () => {
    return (
        <div>
            <h1>New Submission</h1>
            <MultimediaPostForm headerImage editor callback={() => ({})} />
        </div>
    )
}

export default NewSubmission
