import React from 'react'
import Submissions from '../Submissions/Submissions'

const Assignment: React.FC<{ workshopId: string; assignmentId: string }> = ({
    workshopId = '',
    assignmentId = '',
}): JSX.Element => {
    return (
        <div>
            <h1>Assignment {assignmentId}</h1>
            <h2>Details</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, placeat ipsam perferendis voluptate eos
                voluptatem facere temporibus! Exercitationem, mollitia facilis. Harum labore fuga aliquam, dolorem iure
                neque numquam deleniti error!
            </p>
            <Submissions assignmentId={assignmentId} workshopId={workshopId} />
            {/* <h2>Comments</h2>
            <p>A feed of general comments about the assignment as well as comments about individual assignments</p> */}
        </div>
    )
}

export default Assignment
