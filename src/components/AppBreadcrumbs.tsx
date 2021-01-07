import React from 'react'
import { Breadcrumbs, Typography } from '@material-ui/core'
import { Link } from 'gatsby'

const AppBreadcrumbs: React.FC<{ paths: Array<{ path: string; name: string }> }> = ({ paths = [] }) => {
    return paths.length ? (
        <Breadcrumbs aria-label="breadcrumb">
            {paths.map(({ path = '', name = '' }, i) => {
                if (i === paths.length - 1) {
                    return (
                        <Typography color="textPrimary" key={path}>
                            {name}
                        </Typography>
                    )
                }
                return (
                    <Link color="inherit" to={path} key={path}>
                        {name}
                    </Link>
                )
            })}
        </Breadcrumbs>
    ) : null
}

export default AppBreadcrumbs
