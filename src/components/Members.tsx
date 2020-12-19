import React from 'react'
import { Link } from 'gatsby'
import { DataGrid } from '@material-ui/data-grid'

const Members = (): JSX.Element => {
    const columns = [
        { field: 'name', headerName: 'Artist', width: 150 },
        {
            field: 'subscribers',
            headerName: 'Subscribers',
            type: 'number',
            width: 120,
        },
        {
            field: 'updated',
            headerName: 'Updated',
            type: 'date',
            width: 130,
        },
    ]

    const rows = [
        { id: 1, name: 'Jon', subscribers: 35, updated: new Date() },
        { id: 2, name: 'Cersei', subscribers: 42, updated: new Date() },
        { id: 3, name: 'Jaime', subscribers: 45, updated: new Date() },
        { id: 4, name: 'Arya', subscribers: 16, updated: new Date() },
        { id: 5, name: 'Arya', subscribers: 16, updated: new Date() },
    ]

    return (
        <div>
            <h1>Assignments</h1>
            <p>
                You are now logged in! <Link to="/app/profile">View profile</Link>
            </p>
            <p>
                Now go build something great and deploy it using the{' '}
                <a href="https://console.amplify.aws">AWS Amplify Console</a>
            </p>

            <div style={{ height: 375, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection={true} />
            </div>
        </div>
    )
}

export default Members
