import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import { ROUTE_NAMES } from '../../pages/app'
import AppBreadcrumbs from '../AppBreadcrumbs'

const Profile = (): JSX.Element => {
    // query all submissions and mailchimp audience and join data by email address
    const rows = [
        {
            id: 123,
            name: 'Test',
            email: 'test@test.com',
            login: false,
            mailchimp: true,
            submissions: 12,
            // https://github.com/mui-org/material-ui-x/issues/417
            aliases: ['Fake Name', 'Real$Name', 'Another name'],
        },
    ]

    const columns = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'aliases', headerName: 'Aliases', width: 150 },
        { field: 'submissions', headerName: 'Submissions', width: 150 },
        { field: 'mailchimp', headerName: 'Mailchimp', width: 150 },
        { field: 'login', headerName: 'Login', width: 150 },
    ]
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <AppBreadcrumbs paths={[ROUTE_NAMES.home, ROUTE_NAMES.members]} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    Members
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <DataGrid
                    checkboxSelection
                    rows={rows}
                    columns={columns}
                    disableSelectionOnClick={true}
                    // onRowClick={(params: RowParams) =>
                    //     navigate(ROUTE_NAMES.assignment.getPath({ assignmentId: String(params.row.id) }))
                    // }
                    // sortModel={sortModel}
                    autoHeight
                    autoPageSize
                />
            </Grid>
        </Grid>
    )
}

export default Profile
