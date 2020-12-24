import React from 'react'
import { workshops } from '../../data'
import { Link } from 'gatsby'
import { compareDesc } from 'date-fns'

const Workshops = (): JSX.Element => {
    return (
        <div>
            {workshops
                .sort((a, b) => compareDesc(a.dateEnrolled, b.dateEnrolled))
                .map(({ id: workshopId, title }) => (
                    <div key={workshopId}>
                        <h3>{title}</h3>
                        <Link to={`/app/${workshopId}`}>Assignments</Link>
                    </div>
                ))}
        </div>
    )
}

export default Workshops
