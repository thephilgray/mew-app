import React from 'react'
import { Breadcrumbs, Typography } from '@material-ui/core'
import { Link } from 'gatsby'

const AppBreadcrumbs: React.FC<{
    paths: Array<{
        path: string;
        name: string;
        getName?: (workshop: { name?: string }) => string;
        getPath?: (params: { assignmentId?: string, workshopId?: string }) => string;
    }>,
    workshopId?: string,
    assignmentId?: string,
    workshop?: { name: string, id: string }
    assignment?: { name: string, workshopId: string, id: string }
}> =
    ({ paths = [], workshopId, assignmentId, workshop = { name: '', id: '' }, assignment = { title: '', id: '' } }) => {
        return paths.length ? (
            <Breadcrumbs aria-label="breadcrumb">
                {paths.map(({ path = '', name = '', getPath, getName }, i) => {
                    if (i === paths.length - 1) {
                        return (
                            <Typography color="textPrimary" key={path}>
                                {getName && getName({ ...workshop, ...assignment }) ? getName({ ...workshop, ...assignment }) : name}
                            </Typography>
                        )
                    }
                    return (
                        <Link color="inherit" to={getPath ? getPath({ workshopId: workshopId || workshop?.id || assignment?.workshopId, assignmentId: assignmentId || assignment?.id }) : path} key={path}>
                            {getName && getName({ ...workshop, ...assignment }) ? getName({ ...workshop, ...assignment }) : name}
                        </Link>
                    )
                })}
            </Breadcrumbs>
        ) : null
    }

export default AppBreadcrumbs
