/* eslint-disable react/display-name */
import * as React from 'react'
import { Link } from 'gatsby'
import { Button, ButtonGroup } from '@material-ui/core'

import Assignments from '../Assignments/Assignments'
import { workshops } from '../../data'

const Workshop: React.FC<{ workshopId: string }> = ({ workshopId = '' }): JSX.Element => {
    const workshop = workshops.find((w) => w.id === workshopId)
    return workshop ? (
        <div>
            <h1>{workshop.title}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, labore, sunt animi aut aliquam fuga
                suscipit, ut quo doloribus dolorem itaque atque! Rerum doloremque illo unde reprehenderit! Error, amet
                omnis.
            </p>
            <div style={{ textAlign: 'right' }}>
                <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Link to={`/app/${workshopId}/assignments/new`}>
                        <Button>New Assignment</Button>
                    </Link>
                </ButtonGroup>
            </div>
            <div style={{ height: 375, width: '100%' }}>
                <Assignments workshopId={workshopId} />
            </div>
            {/* <h2>Feed</h2>
            <p>A feed of comments and activity from all assignments and submissions in the group</p> */}
        </div>
    ) : (
        <p>Workshop not found</p>
    )
}

export default Workshop
