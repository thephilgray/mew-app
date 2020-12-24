import React from 'react'
import MultimediaPostForm from '../Form/MultimediaPostForm'

const NewAssignment: React.FC = () => {
    return (
        <div>
            <h1>New Assignment</h1>
            <MultimediaPostForm dateInputs headerImage editor />
        </div>
    )
}

export default NewAssignment
