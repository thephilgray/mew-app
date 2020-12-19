import React from 'react'
import Submissions from './Submissions'

const Assignment: React.FC<{ assignmentId: string }> = ({ assignmentId = '' }): JSX.Element => {
    return (
        <div>
            <h1>Assignment {assignmentId}</h1>
            <h2>Details</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, placeat ipsam perferendis voluptate eos
                voluptatem facere temporibus! Exercitationem, mollitia facilis. Harum labore fuga aliquam, dolorem iure
                neque numquam deleniti error!
            </p>
            <Submissions assignmentId={assignmentId} />;
        </div>
    )
}

export default Assignment
