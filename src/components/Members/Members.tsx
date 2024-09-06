import React, { useEffect, useState } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { Alert, Autocomplete, Avatar, Button, Chip, CircularProgress, createFilterOptions, FormControl, FormControlLabel, FormHelperText, Grid, IconButton, Input, InputAdornment, InputBase, InputLabel, MenuItem, OutlinedInput, Select, Switch, TextField, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { isPast } from 'date-fns/esm'
import gql from 'graphql-tag'
import { countBy, entries, groupBy, head, keyBy, last, maxBy, uniqBy } from 'lodash'
import AppBreadcrumbs from '../AppBreadcrumbs'
import Error from '../Error'
import { Add, Delete, GroupAdd, Save, Sync } from '@mui/icons-material'
import { updateMembershipService } from '../../graphql/d3/mutations'
import { Group, ROUTES } from '../../constants';
import Loading from '../Loading';
import { DataGridWrapper } from '../DataGridWrapper';
import { Link } from 'gatsby';
import { getCloudFrontURL, getDisplayName } from '../../utils';
import ConfirmDeleteDialog from './ConfirmDeleteDialog';
import { lighten, styled } from '@mui/material/styles';
import If from '../If';
import { useUserInAtLeastOneOfTheseGroups } from '../../auth/hooks';
import { useForm } from 'react-hook-form';
import { createBreakoutGroup, deleteBreakoutGroup } from '../../graphql/d3/mutations';

const isExpired = (expiration: string | Date): boolean => Boolean(isPast(new Date(expiration as string)))

const StyledChip = styled(Chip)`
    margin: 0.25rem;
`

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    '& .member--out': {
        backgroundColor: lighten(theme.palette.error.light, 0.8),
        '&:hover': {
            backgroundColor: lighten(theme.palette.error.main, 0.8),

        }

    }
}))
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
                }
                nextToken
            }
            breakoutGroups {
                items {
                    id
                    name
                    description
                }
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
                    workshopId
                    createdAt
                    updatedAt
                }
                nextToken
            }
            status
            passes
            features {
                mailchimp {
                    enabled
                    apiKeyName
                    listId
                    serverPrefix
                    sessionTag
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
                        id
                        avatar
                    }
                    mailchimp {
                        fullName
                        emailAddress
                        status
                        tags {
                            id
                            name
                        }
                    }
                    breakoutGroup {
                        id
                        name
                    }
                    submissions(limit: 1000, filter: { workshopId: { eq: $id } }) {
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
        }
    }
`

type Inputs = {
    breakoutGroupName: string
}

interface BreakoutGroupOptionType {
    inputValue?: string;
    name: string;
    id: string;
}

const Members: React.FC<{ workshopId: string }> = ({ workshopId = '' }) => {
    const [dialogSettings, setDialogSettings] = useState(null)
    const [showDeleteForAll, setShowDeleteForAll] = useState(false)
    const [showDeleteLogin, setShowDeleteLogin] = useState(false)
    const [showAddBreakoutGroups, setShowBreakoutGroups] = useState(false);
    const isCognitoAdmin = useUserInAtLeastOneOfTheseGroups([Group.cognito_admin])
    const [addMembersToBreakGroupLoading, setAddMembersToBreakGroupLoading] = useState(false)

    const [rowSelectionModel, setRowSelectionModel] = useState<GridRowSelectionModel>([]);

    const filter = createFilterOptions<BreakoutGroupOptionType>();
    const [breakoutGroupValue, setBreakoutGroupValue] = React.useState<BreakoutGroupOptionType | null>(null);


    const [createBreakoutGroupMutation, { error: createBreakoutGroupError, data: createBreakoutGroupData }] = useMutation(gql(createBreakoutGroup));
    const [deleteBreakoutGroupMutation, { error: deleteBreakoutGroupError, data: deleteBreakoutGroupData }] = useMutation(gql(deleteBreakoutGroup));


    const {
        register,
        handleSubmit,
        setValue,
        watch,
        // formState: { errors },
    } = useForm<Inputs>();

    // query all submissions and mailchimp audience and join data by email address
    const { loading, error, data, refetch } = useQuery(GET_WORKSHOP, {
        variables: { id: workshopId },
    })


    const [requestUpdateMembershipService, updateMembershipServiceResponse] = useMutation(gql(updateMembershipService))

    // const [sortModel, setSortModel] = React.useState([
    //     {
    //         field: 'status',
    //         sort: 'asc',
    //     },
    // ])

    useEffect(() => {
        if (data?.getWorkshop?.features?.mailchimp?.enabled) {
            // and sync not called
            // call syncMembers
            // console.log('syncMembers')
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
    if (loading) return <Loading />

    const onSyncWithMailchimp = async () => {
        await requestUpdateMembershipService({
            variables: {
                workshopId,
                action: 'SYNC_MEMBERS_WITH_MAILCHIMP',
            },
        })
    }

    const onUpdateMembershipService = async ({ action, membershipPayload }) => {
        await requestUpdateMembershipService({
            variables: {
                workshopId,
                action,
                ...(membershipPayload && { payloads: [membershipPayload] }),
            },
        })
    }
    const getBreakoutRoomId = (breakoutGroupName: string) => workshopId.split('-')[0] + '-' + breakoutGroupName.toLowerCase()?.replace(/[^a-z0-9]/g, '-');
    const addBreakoutGroup = async (breakoutGroupName: string) => {
        if (!breakoutGroupName) return;
        // create breakout group
        await createBreakoutGroupMutation({
            variables: {
                input: {
                    name: breakoutGroupName,
                    workshopId,
                    id: getBreakoutRoomId(breakoutGroupName),
                },
            },
        })
    }

    const onDeleteBreakoutGroup = async (breakoutGroupId: string) => {
        await deleteBreakoutGroupMutation({
            variables: {
                input: {
                    id: breakoutGroupId,
                },
            },
        })
        if (breakoutGroupValue?.id === breakoutGroupId) {
            setBreakoutGroupValue(null)
        }
    }

    const handleAddMembersToBreakoutGroup = async (e) => {
        e.preventDefault()
        if (!breakoutGroupValue || !rowSelectionModel.length) return;
        setAddMembersToBreakGroupLoading(true)
        await onUpdateMembershipService({
            action: 'ADD_MEMBERS_TO_BREAKOUT_GROUP',
            membershipPayload: {
                breakoutGroupId: breakoutGroupValue.id,
                members: rowSelectionModel,
            },
        })
        setAddMembersToBreakGroupLoading(false)
        setBreakoutGroupValue(null)
    }


    const mappedArray = data.getWorkshop?.fileRequests?.items
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .map(({ id, required, expiration }) => ({
            id,
            required,
            expired: isExpired(expiration),
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
        const requiredItems = uniqBy(
            submissionsGroupedByEmail[email].map(({ fileRequestId }) => assignmentMap[fileRequestId]),
            'id',
        ).filter((item) => item && item.required && item.expired)

        // the most frequently occurring artist name
        const name = head(maxBy(entries(countBy(submissionsGroupedByEmail[email], 'artist')), last))
        const required = requiredItems.length
        const passesRemaining = workshopPasses - (expiredAndDueAssignments - required)
        const passes = passesRemaining > 0 ? passesRemaining : 0

        return {
            id: email,
            email,
            name,
            status: 'not synced',
            submissions: submissionsGroupedByEmail[email].length,
            required,
            passes,
            mailchimpSubscribed: false,
            profileEnabled: false,
            profile: null,
            loginEnabled: false,
            membership: false,
        }
    })

    const userRowsByMembership = data?.getWorkshop?.memberships?.items.map((member) => {
        const requiredItems = uniqBy(member.submissions.items, 'fileRequestId').filter(
            (item) =>
                item?.fileRequest?.required && item.fileRequest?.expiration && isExpired(item.fileRequest.expiration),
        )

        const required = requiredItems.length

        const passesRemaining = workshopPasses - (expiredAndDueAssignments - required)
        const passes = passesRemaining > 0 ? passesRemaining : 0

        return {
            id: member.id,
            email: member.email,
            name: member?.profile?.name || '',
            status: member?.status,
            breakoutGroup: member?.breakoutGroup?.name || '',
            submissions: member.submissions.items.length,
            required,
            passes,
            passesRemaining,
            mailchimpSubscribed: !!(
                member.mailchimp &&
                member.mailchimp.status === 'subscribed' &&
                !member.mailchimp.tags.some((t) => t.name === 'OUT')
            ),
            profile: member?.profile,
            profileEnabled: !!member.profile,
            loginEnabled: !!member?.profile?.sub,
            membership: !!(member?.status === 'ACTIVE'),
        }
    })

    // merge users
    // matched = []
    // unmatchedSubmissionMembers = userRowsBySubmissions
    // unmatchedMembershipMembers = userRowsByMembership

    // iterate through unmatchedSubmissionMembers
    // if theres a membership user with the same email
    // remove from unmatchedSubmissionMembers
    // remove from unmatchedMembershipMembers
    // add membership to matched

    const mergedUsersMap = userRowsBySubmissions.reduce(
        (acc, curr) => {
            // is curr in matched, do nothing
            const alreadyMatched = acc.matched.find((m) => m.email === curr.email)
            if (alreadyMatched) return acc
            // is curr in unmatchedMembershipMembers,
            const matchIndex = acc.unmatchedMembershipMembers.findIndex((m) => m.email === curr.email)
            if (matchIndex > -1) {
                // remove item from unmatchedMembershipMembers and put it in matched
                acc.matched.push(acc.unmatchedMembershipMembers[matchIndex])
                acc.unmatchedMembershipMembers = acc.unmatchedMembershipMembers.filter(m => m.email !== curr.email)
            } else {
                // else push to unmatchedSubmissionMembers
                acc.unmatchedSubmissionMembers.push(curr)
            }
            return acc
        },
        {
            matched: [],
            unmatchedSubmissionMembers: [],
            unmatchedMembershipMembers: userRowsByMembership
        },
    )

    const userRows = [
        ...mergedUsersMap.matched,
        ...mergedUsersMap.unmatchedSubmissionMembers,
        ...mergedUsersMap.unmatchedMembershipMembers,
    ]

    const columns: GridColDef[] = [
        {
            field: 'profileEnabled',
            headerName: 'Profile',
            renderCell: ({ row, value }) =>
                value ? <Link
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', textDecoration: 'none' }}
                    to={ROUTES.viewProfile.getPath({ profileId: row?.profile?.id })}>
                    <Avatar
                        alt={getDisplayName(row?.profile)}
                        src={getCloudFrontURL(row?.profile?.avatar)}
                        sx={{ mr: 1 }} />
                    {value || getDisplayName(row?.profile)}
                </Link> : 'No'
        },
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'name', headerName: 'Name', width: 200 },
        ...(!!data?.getWorkshop?.breakoutGroups?.items?.length ? [{ field: 'breakoutGroup', headerName: 'Breakout Group', width: 200 }] : []),
        { field: 'submissions', headerName: 'Submitted', width: 120 },
        {
            field: 'required',
            headerName: 'Deadlines Met',
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
        {
            field: 'status',
            headerName: 'Status',
            width: 150,
        },
        ...(data?.getWorkshop?.features?.mailchimp?.enabled ? [] : [{
            field: 'membership',
            headerName: 'Membership',
            renderCell: ({ row, value = '' }) => (
                <>
                    {value ? 'Yes' : 'No'}
                    <If condition={!value || row.passesRemaining < 0 || showDeleteForAll}>
                        <IconButton
                            onClick={() => value ? setDialogSettings({
                                user: row,
                                dialogType: 'MEMBERSHIP',
                                handleDelete: () => onUpdateMembershipService({
                                    action: value ? 'DISABLE_MEMBERSHIP' : 'ADD_MEMBERSHIP',
                                    membershipPayload: {
                                        emailAddress: row.email,
                                        ...(row.name && { fullName: row.name }),
                                    },
                                })
                            }) :
                                onUpdateMembershipService({
                                    action: value ? 'DISABLE_MEMBERSHIP' : 'ADD_MEMBERSHIP',
                                    membershipPayload: {
                                        emailAddress: row.email,
                                        ...(row.name && { fullName: row.name }),
                                    },
                                })
                            }
                            size="large">
                            {value ? <Delete /> : <Add />}
                        </IconButton>
                    </If>
                </>
            ),
            width: 150,
        }]),
        ...(data?.getWorkshop?.features?.mailchimp?.enabled
            ? [
                {
                    field: 'mailchimpSubscribed',
                    headerName: 'Membership',
                    renderCell: ({ row, value = '' }) => (
                        <>
                            {value ? 'Yes' : 'No'}
                            <If condition={!value || row.passesRemaining < 0 || showDeleteForAll}>
                                <IconButton
                                    onClick={() => value ? setDialogSettings({
                                        user: row,
                                        dialogType: 'MEMBERSHIP_MAILCHIMP',
                                        handleDelete: () => onUpdateMembershipService({
                                            action: 'DISABLE_MAILCHIMP_SUBSCRIPTION',
                                            membershipPayload: {
                                                emailAddress: row.email,
                                                ...(row.name && { fullName: row.name }),
                                            },
                                        })
                                    }) :
                                        onUpdateMembershipService({
                                            action: 'ADD_MAILCHIMP_SUBSCRIPTION',
                                            membershipPayload: {
                                                emailAddress: row.email,
                                                ...(row.name && { fullName: row.name }),
                                            },
                                        })
                                    }
                                    size="large">
                                    {value ? <Delete /> : <Add />}
                                </IconButton>
                            </If>
                        </>
                    ),
                },
            ]
            : []),
        {
            field: 'loginEnabled',
            headerName: 'Login',
            renderCell: ({ row, value = '' }) => (
                <>
                    {value ? 'Yes' : 'No'}
                    <If condition={!value || isCognitoAdmin && showDeleteLogin}>
                        <IconButton
                            onClick={() => value ? setDialogSettings({
                                user: row,
                                dialogType: 'LOGIN',
                                handleDelete: () => onUpdateMembershipService({
                                    action: 'DISABLE_LOGIN',
                                    membershipPayload: {
                                        emailAddress: row.email,
                                        ...(row.name && { fullName: row.name }),
                                    },
                                })
                            }) :
                                onUpdateMembershipService({
                                    action: 'ADD_LOGIN',
                                    membershipPayload: {
                                        emailAddress: row.email,
                                        ...(row.name && { fullName: row.name }),
                                    },
                                })
                            }
                            size="large">
                            {value ? <Delete /> : <Add />}
                        </IconButton>
                    </If>
                </>
            ),
        },

    ]

    return (
        <Grid container spacing={3}>
            <ConfirmDeleteDialog dialogSettings={dialogSettings} handleClose={() => setDialogSettings(null)} />
            <Grid item xs={12}>
                <AppBreadcrumbs
                    paths={[ROUTES.home, ROUTES.workshop, ROUTES.workshopMembers]}
                    workshopId={workshopId}
                    workshop={data?.getWorkshop}
                />
            </Grid>
            <Grid item xs={8}>
                <Typography variant="h5" component="h2">
                    Members
                </Typography>
            </Grid>
            {data?.getWorkshop?.features?.mailchimp?.enabled && (
                <Grid item xs={4}>
                    <Button onClick={onSyncWithMailchimp} endIcon={updateMembershipServiceResponse.loading || updateMembershipServiceResponse.called && loading ? <CircularProgress size="1rem" /> : <Sync />} style={{ float: 'right' }}>
                        Sync from Mailchimp
                    </Button>
                </Grid>
            )}
            <Grid item xs={12}>
                {<Alert severity='info'>Members who have missed too many deadlines are highlighted in red below. Click the trash icon in the <strong>Membership</strong> column to remove membership. You will be prompted with a confirm dialog first.
                    <If condition={isCognitoAdmin}>{' '}Removing Login is NOT recommended but here for debugging and abuse prevention purposes.</If>
                    <br />
                    <br />
                    <FormControlLabel control={<Switch checked={showDeleteForAll} onChange={e => setShowDeleteForAll(e.target.checked)} color="warning" />} label="Show remove membership controls for all members?" />
                    <If condition={isCognitoAdmin}>
                        <br />
                        <FormControlLabel control={<Switch checked={showDeleteLogin} onChange={e => setShowDeleteLogin(e.target.checked)} color="error" />} label="Show remove login controls?" />
                        <br />
                    </If>
                    <If condition={data?.getWorkshop?.features?.mailchimp?.enabled}>
                        <FormControlLabel control={<Switch checked={showAddBreakoutGroups} onChange={e => setShowBreakoutGroups(e.target.checked)} color="warning" />} label="Show breakout groups controls?" />
                    </If>
                </Alert>}
            </Grid>
            <If condition={showAddBreakoutGroups}>
                <Grid item xs={12}>
                    <Typography variant="h6" component="h3">
                        Breakout Groups Editor
                    </Typography>
                </Grid>
                <If condition={!!data?.getWorkshop?.breakoutGroups?.items}>
                    <Grid item xs={12}>
                        <p>Breakout Groups</p>
                        {/* map through all the breakout groups in the workshop and create a chip with a delete button for each */}
                        {data?.getWorkshop?.breakoutGroups?.items?.map((group) => (
                            <StyledChip
                                key={group.id}
                                label={group.name}
                                onDelete={() => onDeleteBreakoutGroup(group.id)}
                            />
                        ))}
                    </Grid>
                </If>
                <Grid item xs={12} lg={6}>
                    <p>Add {rowSelectionModel.length || 'selected'} user(s) below to {breakoutGroupValue?.name || 'selected'} breakout group.</p>
                    <FormControl
                        onSubmit={handleAddMembersToBreakoutGroup}
                        component="form"
                        sx={{ py: '.5rem' }}
                        fullWidth>
                        <Autocomplete
                            fullWidth
                            id="breakout-group-select"
                            value={breakoutGroupValue}
                            options={data?.getWorkshop?.breakoutGroups?.items}
                            onChange={async (event, newValue) => {
                                if (typeof newValue === 'string') {
                                    setBreakoutGroupValue({
                                        name: newValue,
                                        id: getBreakoutRoomId(newValue)
                                    });
                                } else if (newValue && newValue.inputValue) {
                                    // Create a new value from the user input
                                    try {
                                        await addBreakoutGroup(newValue.inputValue);
                                        setBreakoutGroupValue({
                                            name: newValue.inputValue,
                                            id: getBreakoutRoomId(newValue.inputValue)
                                        });
                                    } catch {
                                        setBreakoutGroupValue({
                                            name: 'Error creating new group',
                                            id: 'error'
                                        });
                                    }

                                } else {
                                    setBreakoutGroupValue(newValue);
                                }
                            }}
                            filterOptions={(options, params) => {
                                const filtered = filter(options, params);

                                const { inputValue } = params;
                                // Suggest the creation of a new value
                                const isExisting = options.some((option) => inputValue === option.name);
                                if (inputValue !== '' && !isExisting) {
                                    filtered.push({
                                        inputValue,
                                        name: `Add "${inputValue}"`,
                                        id: getBreakoutRoomId(inputValue)
                                    });
                                }

                                return filtered;
                            }}
                            selectOnFocus
                            clearOnBlur
                            handleHomeEndKeys
                            getOptionLabel={(option) => {
                                // Value selected with enter, right from the input
                                if (typeof option === 'string') {
                                    return option;
                                }
                                // Add "xxx" option created dynamically
                                if (option.inputValue) {
                                    return option.inputValue;
                                }
                                // Regular option
                                return option.name;
                            }}
                            renderOption={(props, option) => {
                                const { ...optionProps } = props;
                                return (
                                    <li key={option.id} {...optionProps}>
                                        {option.name}
                                    </li>
                                );
                            }}
                            freeSolo
                            renderInput={(params) => (
                                <TextField {...params} label="Breakout Group" />
                            )}

                        />
                        <Button
                            type="submit"
                            disabled={!breakoutGroupValue || !rowSelectionModel.length}
                            variant="contained"
                            startIcon={addMembersToBreakGroupLoading ? <Loading /> : <GroupAdd />}>
                            Add
                        </Button>
                    </FormControl>
                </Grid>
            </If>
            <If condition={!showAddBreakoutGroups}>
                <Grid item xs={12}>
                    <StyledChip label={`All Assignments: ${totalAssignments}`} />
                    <StyledChip label={`Required: ${workshopRequiredAssignments}`} />
                    <StyledChip label={`Active: ${activeAssignments}`} />
                    <StyledChip label={`All Past Due: ${expiredAssignments}`} />
                    <StyledChip label={`Required Past Due: ${expiredAndDueAssignments}`} />
                </Grid>
            </If>
            <Grid item xs={12}>
                <DataGridWrapper>
                    <StyledDataGrid
                        checkboxSelection={showAddBreakoutGroups}
                        onRowSelectionModelChange={(newRowSelectionModel) => {
                            setRowSelectionModel(newRowSelectionModel);
                        }}
                        rowSelectionModel={rowSelectionModel}
                        rows={userRows}
                        columns={columns}
                        disableRowSelectionOnClick={true}
                        getRowClassName={(params) => `member--${params.row.passesRemaining < 0 ? 'out' : 'active'}`}
                        initialState={{
                            sorting: {
                                sortModel: [{ field: 'required', sort: 'desc' }],
                            },
                        }}
                        autoHeight
                    />
                </DataGridWrapper>
            </Grid>
        </Grid>
    )
}

export default Members
