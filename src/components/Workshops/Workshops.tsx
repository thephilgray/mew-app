import React from 'react'
import { workshops } from '../../data'
import { Link } from 'gatsby'

const Workshops = (): JSX.Element => {
    return (
        <div>
            {workshops.map(({ id: workshopId, title }) => (
                <div key={workshopId}>
                    <h3>{title}</h3>
                    <Link to={`/app/${workshopId}`}>Assignments</Link>
                </div>
            ))}
        </div>
    )
}

export default Workshops
