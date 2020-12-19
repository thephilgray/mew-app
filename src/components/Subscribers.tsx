import React from 'react'
import { Link } from 'gatsby'
import { getCurrentUser } from '../utils/auth'
import { DataGrid } from '@material-ui/data-grid'

const List = (): JSX.Element => {
    const user = getCurrentUser()

    const columns = [
        { field: 'listName', headerName: 'List name', width: 150 },
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
        { id: 1, listName: 'Jon', subscribers: 35, updated: new Date() },
        { id: 2, listName: 'Cersei', subscribers: 42, updated: new Date() },
        { id: 3, listName: 'Jaime', subscribers: 45, updated: new Date() },
        { id: 4, listName: 'Arya', subscribers: 16, updated: new Date() },
        { id: 5, listName: 'Daenerys', subscribers: null, updated: new Date() },
        { id: 6, listName: null, subscribers: 150, updated: new Date() },
        { id: 7, listName: 'Ferrara', subscribers: 44, updated: new Date() },
        { id: 8, listName: 'Rossini', subscribers: 36, updated: new Date() },
        { id: 9, listName: 'Harvey', subscribers: 65, updated: new Date() },
    ]
    if (!user) return <></>
    return (
        <div>
            <h1>Subscription Lists</h1>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <Link to="/app/home">Home</Link>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
            </div>
        </div>
    )
}

export default List
