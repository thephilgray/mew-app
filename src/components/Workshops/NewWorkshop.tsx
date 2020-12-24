import React from 'react'
import MultimediaPostForm from '../Form/MultimediaPostForm'

const NewWorkshop: React.FC = () => {
    return (
        <div>
            <h1>New Workshop</h1>
            <MultimediaPostForm dateInputs headerImage editor />
        </div>
    )
}

export default NewWorkshop
