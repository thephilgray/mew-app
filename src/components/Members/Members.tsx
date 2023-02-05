import React, { useEffect } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { Button, Chip, Grid, Typography } from '@material-ui/core'
import { DataGrid } from '@material-ui/data-grid'
import { isPast } from 'date-fns/esm'
import gql from 'graphql-tag'
import { groupBy, keyBy, uniq, unionBy } from 'lodash'
import { ROUTE_NAMES } from '../../pages/app'
import AppBreadcrumbs from '../AppBreadcrumbs'
import Error from '../Error'
import styled from '@emotion/styled'
import { Sync } from '@material-ui/icons'

const StyledChip = styled(Chip)`
    margin: 0.25rem;
`

// get workshop
// if workshop features mailchimp enabled
// sync mallchimp members 'SYNC' action to mewMemberService
// then refetch workshop

// import { getWorkshop } from '../../graphql/queries'
// TODO: add types
const GET_WORKSHOP = gql`
    query GetWorkshop($id: ID!) {
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
                    # _version
                    # _deleted
                    # _lastChangedAt
                }
                nextToken
                startedAt
            }
            submissions(limit: 1000) {
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
                    # _version
                    # _deleted
                    # _lastChangedAt
                }
                nextToken
                startedAt
            }
            status
            passes
            features {
                mailchimp {
                    enabled
                    apiKeyName
                    listId
                    serverPrefix
                }
            }
            createdAt
            updatedAt
            memberships(limit: 1000) {
                items {
                    id
                    email
                    status
                    profile {
                        name
                        email
                        sub
                    }
                    mailchimp {
                        fullName
                        emailAddress
                        status
                    }
                    submissions(limit: 1000) {
                        items {
                            id
                            fileRequestId
                            fileRequest {
                                required
                                expiration
                                id
                            }
                        }
                    }
                }
            }
            # _version
            # _deleted
            # _lastChangedAt
        }
    }
`

const updateMembershipService = /* GraphQL */ gql`
    mutation UpdateMembershipService($workshopId: ID!, $action: String) {
        updateMembershipService(workshopId: $workshopId, action: $action) {
            statusCode
            body
        }
    }
`

const Members: React.FC<{ workshopId: string }> = ({ workshopId = '' }) => {
    // query all submissions and mailchimp audience and join data by email address
    const { loading, error, data, refetch } = useQuery(GET_WORKSHOP, {
        variables: { id: workshopId },
    })

    const [requestUpdateMembershipService, updateMembershipServiceResponse] = useMutation(updateMembershipService)

    useEffect(() => {
        if (data?.getWorkshop?.features?.mailchimp?.enabled) {
            // and sync not called
            // call syncMembers
            console.log('syncMembers')
        }
    }, [data])

    useEffect(() => {
        if (
            updateMembershipServiceResponse &&
            updateMembershipServiceResponse.called &&
            updateMembershipServiceResponse.data &&
            updateMembershipServiceResponse.data.updateMembershipService &&
            updateMembershipServiceResponse.data.updateMembershipService.statusCode &&
            updateMembershipServiceResponse.data.updateMembershipService.statusCode === 200
        ) {
            refetch()
        }
    }, [updateMembershipServiceResponse])

    if (error) return <Error errorMessage={error} />
    if (loading) return <p>Loading users....</p>

    const onSyncWithMailchimp = async () => {
        await requestUpdateMembershipService({
            variables: {
                workshopId,
                action: 'SYNC_MEMBERS_WITH_MAILCHIMP',
            },
        })
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const mappedArray = data.getWorkshop.fileRequests.items.map(({ id, required, expiration }) => ({
        id,
        required,
        expired: Boolean(isPast(new Date(expiration as string))),
    }))
    const assignmentMap = keyBy(mappedArray, 'id')
    const submissionsGroupedByEmail = groupBy(data.getWorkshop.submissions.items, 'email')

    const totalAssignments = mappedArray.length
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const workshopRequiredAssignments = mappedArray.filter((item) => item && item.required).length
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const expiredAssignments = mappedArray.filter((item) => item && item.expired).length
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const activeAssignments = mappedArray.filter((item) => item && !item.expired).length
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const expiredAndDueAssignments = mappedArray.filter((item) => item && item.expired && item.required).length
    const workshopPasses = data.getWorkshop.passes

    const userRowsBySubmissions = Object.keys(submissionsGroupedByEmail).map((email) => {
        const required = uniq(
            submissionsGroupedByEmail[email].map(({ fileRequestId }) => assignmentMap[fileRequestId]),
            'fileRequestId',
        ).filter((item) => item && item.required).length

        const passes = workshopPasses - (expiredAndDueAssignments - required)

        return {
            id: email,
            email,
            submissions: submissionsGroupedByEmail[email].length,
            required,
            passes,
            status: 'not synced',
        }
    })

    const userRowsByMembership = data?.getWorkshop?.memberships?.items.map((member) => {
        const required = uniq(member.submissions.items, 'fileRequestId').filter((item) => item?.fileRequest?.required)
            .length

        const passes = workshopPasses - (expiredAndDueAssignments - required)

        return {
            id: member.id,
            email: member.email,
            status: member?.status,
            profileEnabled: !!member.profile,
            mailchimpSubscribed: !!(member.mailchimp && member.mailchimp.status === 'subscribed'),
            submissions: member.submissions.items.length,
            required,
            passes,
            loginEnabled: !!member?.profile?.sub,
        }
    })

    const userRows = data?.getWorkshop?.features?.mailchimp?.enabled
        ? unionBy(userRowsBySubmissions, userRowsByMembership, 'email')
        : userRowsBySubmissions

    const columns = [
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'submissions', headerName: 'Submitted', width: 150 },
        {
            field: 'required',
            headerName: 'Required',
            width: 150,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            renderCell: ({ value }) => (
                <span>
                    {value}/{expiredAndDueAssignments}
                </span>
            ),
        },
        {
            field: 'passes',
            headerName: 'Passes',
            width: 100,
        },
        ...(data?.getWorkshop?.features?.mailchimp?.enabled
            ? [
                  {
                      field: 'status',
                      headerName: 'Status',
                      width: 150,
                  },
                  {
                      field: 'profileEnabled',
                      headerName: 'Profile',
                  },
                  {
                      field: 'mailchimpSubscribed',
                      headerName: 'Mailchimp',
                  },
                  {
                      field: 'loginEnabled',
                      headerName: 'Login',
                  },
              ]
            : []),
    ]

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <AppBreadcrumbs
                    paths={[ROUTE_NAMES.home, ROUTE_NAMES.assignments, ROUTE_NAMES.members]}
                    workshopId={workshopId}
                />
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h5" component="h2">
                    Members
                </Typography>
            </Grid>
            {data?.getWorkshop?.features?.mailchimp?.enabled && (
                <Grid item xs={4}>
                    <Button onClick={onSyncWithMailchimp} style={{ float: 'right' }}>
                        Sync from Mailchimp <Sync />
                    </Button>
                </Grid>
            )}
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
