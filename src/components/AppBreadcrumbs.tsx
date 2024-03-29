import React from 'react'
import { Breadcrumbs, Typography, Link as MaterialLink } from '@mui/material'
import { Link } from 'gatsby'

// TODO: make location aware, get breadcrumb config from app routes; parse intelligently
// we may need to adjust routing to be more RESTful – resource/id/resource/id

const AppBreadcrumbs: React.FC<{
    paths: Array<{
        path: string
        name: string
        getName?: (workshop: { name?: string }) => string
        getPath?: (params: { assignmentId?: string; workshopId?: string }) => string
    }>
    workshopId?: string
    assignmentId?: string
    workshop?: { name: string; id: string }
    assignment?: { name: string; workshopId: string; id: string }
}> = ({
    paths = [],
    workshopId,
    assignmentId,
    workshop = { name: '', id: '' },
    assignment = { title: '', id: '' },
}) => {
        return paths.length ? (
            <Breadcrumbs aria-label="breadcrumb">
                {paths.map(({ path = '', name = '', getPath, getName }, i) => {
                    if (i === paths.length - 1) {
                        return (
                            <Typography color="textPrimary" key={path}>
                                {getName && getName({ ...workshop, ...assignment })
                                    ? getName({ ...workshop, ...assignment })
                                    : name}
                            </Typography>
                        )
                    }
                    return (
                        <Link
                            color="textSecondary"
                            to={
                                getPath
                                    ? getPath({
                                        workshopId: workshopId || workshop?.id || assignment?.workshopId,
                                        assignmentId: assignmentId || assignment?.id,
                                    })
                                    : path
                            }
                            key={path}
                        >
                            {getName && getName({ ...workshop, ...assignment })
                                ? getName({ ...workshop, ...assignment })
                                : name}
                        </Link>
                    )
                })}
            </Breadcrumbs>
        ) : null
    }

export default AppBreadcrumbs
