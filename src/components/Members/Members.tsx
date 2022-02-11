import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Chip, Grid, Typography } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import { isPast } from 'date-fns/esm'
import gql from 'graphql-tag'
import { groupBy, keyBy } from 'lodash'
import { ROUTE_NAMES } from '../../pages/app'
import AppBreadcrumbs from '../AppBreadcrumbs'
import Error from '../Error'
import styled from '@emotion/styled'

const StyledChip = styled(Chip)`
margin: .25rem;
`

// import { getWorkshop } from '../../graphql/queries'
// getWorkshop is hard-coded here to add the submissions(limit: 2000); can also be achieved with .replace
// TODO: add types
const GET_WORKSHOP = gql`query GetWorkshop($id: ID!) {
    getWorkshop(id: $id) {
        id
        name
      fileRequests {
        items {
                id
                expiration
                title
                details
                required
                workshopId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            nextToken
            startedAt
        }
      submissions(limit: 2000) {
        items {
                id
                fileRequestId
                artist
                name
                email
                fileId
                fileExtension
                rating
                comments
                workshopId
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            nextToken
            startedAt
        }
        status
        passes
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
    }
}`


const Members: React.FC<{ workshopId: string }> = ({ workshopId = '' }) => {
    // query all submissions and mailchimp audience and join data by email address
    const { loading, error, data } = useQuery(GET_WORKSHOP, {
        variables: { id: workshopId },
    })

    if (error) return <Error errorMessage={error} />
    if (loading) return <p>Loading users....</p>

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mappedArray = data.getWorkshop.fileRequests.items.map(({ id, required, expiration }) => ({ id, required, expired: Boolean(isPast(new Date(expiration as string))) }));
    const assignmentMap = keyBy(mappedArray, 'id');
    const submissionsGroupedByEmail = groupBy(data.getWorkshop.submissions.items, 'email');

    const totalAssignments = mappedArray.length;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const workshopRequiredAssignments = mappedArray.filter((item) => item && item.required).length;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const expiredAssignments = mappedArray.filter((item) => item && item.expired).length;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const activeAssignments = mappedArray.filter((item) => item && !item.expired).length;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const expiredAndDueAssignments = mappedArray.filter((item) => item && item.expired && item.required).length;
    const workshopPasses = data.getWorkshop.passes || 3;


    const userRows = Object.keys(submissionsGroupedByEmail)
        .map(email => ({
            id: email,
            email,
            submissions: submissionsGroupedByEmail[email].length,
            required: submissionsGroupedByEmail[email]
                .map(({ fileRequestId }) => assignmentMap[fileRequestId])
                .filter((item) => item && item.required).length
        }))


    const columns = [
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'submissions', headerName: 'Total Submitted', width: 200 },
        {
            field: 'required', headerName: 'Required', width: 150,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            renderCell: ({ value }) => <span>{value}/{workshopRequiredAssignments}</span>,
        },
        {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            field: 'passes', headerName: 'Passes Remaining', width: 200,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            valueGetter: (user) => workshopRequiredAssignments > user.required ? workshopPasses - (workshopRequiredAssignments - user.required) : workshopPasses
        },
    ]


    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <AppBreadcrumbs paths={[ROUTE_NAMES.home, ROUTE_NAMES.assignments, ROUTE_NAMES.members]} workshopId={workshopId} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                    Members
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <StyledChip label={`All Assignments: ${totalAssignments}`} />
                <StyledChip label={`Required: ${workshopRequiredAssignments}`} />
                <StyledChip label={`Active: ${activeAssignments}`} />
                <StyledChip label={`All Past Due: ${expiredAssignments}`} />
                <StyledChip label={`Required Past Due: ${expiredAndDueAssignments}`} />
            </Grid>
            <Grid item xs={12}>
                <DataGrid
                    // checkboxSelection
                    rows={userRows}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    columns={columns}
                    disableSelectionOnClick={true}
                    autoHeight
                    autoPageSize
                />
            </Grid>
        </Grid>
    )
}

export default Members
