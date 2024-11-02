import React, { useState, useEffect } from 'react'
import {
    Autocomplete,
    Button,
    FormControlLabel,
    FormGroup,
    Grid,
    InputLabel,
    Switch,
    TextField,
    Typography,
} from '@mui/material'
import { listProfiles } from '../../graphql/d3/queries'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import GroupGuard from '../Auth/GroupGuard'
import { Group } from '../../constants'
import { useProfile } from '../../auth/hooks'
import ImagePicker from '../ImagePicker'
import { getCloudFrontURL, getDisplayName, searchMembersFilterOptions } from '../../utils'
import { DatePicker } from '@mui/x-date-pickers'
import If from '../If'
import ConnectMailchimpButton from '../ConnectMailchimpButton'

export default function WorkshopForm({ onSubmit, setFormState, formState, loading }) {
    const { profile, refetch: refetchProfile } = useProfile()
    const updateForm = (newValues) =>
        setFormState((prevState) => ({
            ...prevState,
            ...newValues,
        }))

    const onFieldChange = (e) => {
        return updateForm({
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value,
        })
    }

    const { loading: listProfilesLoading, error: listProfilesError, data: listProfilesData } = useQuery(gql(listProfiles), { variables: { limit: 1000 } })

    useEffect(() => {
        refetchProfile()
    }, [])

    return (
        <Grid item xs={12} md={8}>
            <form onSubmit={onSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography variant="h6" component="h6">
                            General
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="standard"
                            fullWidth
                            required
                            name="name"
                            label="Name"
                            value={formState.name}
                            onChange={onFieldChange}
                            inputProps={{ maxLength: 90 }}
                            helperText={`${90 - (formState?.name?.length || 0)} characters remaining`}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="standard"
                            multiline
                            rows={3}
                            fullWidth
                            name="description"
                            label="Description"
                            value={formState.description}
                            onChange={onFieldChange}
                            inputProps={{ maxLength: 500 }}
                            helperText={`${500 - (formState?.description?.length || 0)} characters remaining.`}
                        />
                    </Grid>
                    <If condition={listProfilesData?.listProfiles}>
                        <Grid item xs={12}>
                            <Autocomplete
                                options={listProfilesData?.listProfiles?.items || []}
                                getOptionLabel={getDisplayName}
                                value={listProfilesData?.listProfiles?.items.find(profile => profile?.email === formState?.email)}
                                onChange={(event, newValue) => {
                                    if (newValue?.email !== formState?.email) {
                                        updateForm({ email: newValue?.email })
                                    }
                                }}
                                // filterOptions={searchMembersFilterOptions}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Host"
                                        variant="standard"
                                    />
                                )}
                            />
                        </Grid>
                    </If>
                    <Grid item xs={12}>
                        <InputLabel>
                            Artwork
                        </InputLabel>
                        <ImagePicker imageURL={formState?.artwork && getCloudFrontURL(formState.artwork.path)} width={200} height={200} maxHeight={500} maxWidth={500} onChange={e => updateForm({ image: e.image })} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="artworkCredit"
                            fullWidth
                            label="Artwork Title/Credit"
                            value={formState?.artworkCredit}
                            onChange={onFieldChange}
                            InputLabelProps={{ shrink: true }}
                            inputProps={{ maxLength: 90 }}
                            helperText={`${90 - (formState?.artworkCredit?.length || 0)} characters remaining.`}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            variant="standard"
                            id="outlined-number"
                            label="Passes"
                            type="number"
                            name="passes"
                            value={formState.passes}
                            onChange={onFieldChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            variant="standard"
                            id="outlined-number"
                            label="Max Feedback"
                            type="number"
                            name="maxFeedback"
                            value={formState.maxFeedback}
                            onChange={onFieldChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <InputLabel>Status</InputLabel>
                        <FormControlLabel control={<Switch
                            checked={formState.status === 'Active'}
                            onChange={e => {
                                onFieldChange({
                                    target: {
                                        name: 'status',
                                        value: e.target.checked ? 'Active' : 'Inactive'

                                    }
                                })
                            }}
                        />}
                            label='Active' />
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <DatePicker
                            inputVariant="outlined"
                            variant="inline"
                            inputFormat="MM/dd/yyyy"
                            label="Start Date"
                            onChange={(date) => updateForm({ startDate: date })}
                            value={formState?.startDate}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <DatePicker
                            inputVariant="outlined"
                            variant="inline"
                            inputFormat="MM/dd/yyyy"
                            label="End Date"
                            onChange={(date) => updateForm({ endDate: date })}
                            value={formState?.endDate}
                        />
                    </Grid>

                    <GroupGuard groups={[Group.admin]}>
                        <Grid item xs={12}>
                            <Typography variant="h6" component="h6">
                                Mailchimp Integration
                            </Typography>
                            <Typography>
                                <If condition={!!profile?.features?.mailchimp?.enabled}
                                    fallbackContent={<ConnectMailchimpButton mailchimpEnabled={false} workshopId={formState.workshopId} connectLoading={loading} />}>
                                    With this enabled, the members in the Members section will be populated from the Mailchimp list you specify. Only users in your list will appear.
                                </If>
                            </Typography>
                        </Grid>
                        <If condition={!!formState.enableMailchimpIntegration}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="standard"
                                    required={!!formState.enableMailchimpIntegration}
                                    name="listId"
                                    label="List ID"
                                    value={formState.listId}
                                    onChange={onFieldChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="standard"
                                    name="sessionTag"
                                    label="Session Tag"
                                    value={formState.sessionTag}
                                    onChange={onFieldChange}
                                    helperText={"Used to filter list. Example: 2023 08 AUG"}
                                />
                            </Grid>
                        </If>
                        <Grid item xs={12}>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Switch
                                            name="enableMailchimpIntegration"
                                            checked={formState.enableMailchimpIntegration}
                                            onChange={onFieldChange}
                                            disabled={!profile?.features?.mailchimp?.enabled}
                                        />
                                    }
                                    label="Enable Mailchimp Integration"
                                />
                            </FormGroup>
                        </Grid>
                    </GroupGuard>

                    <Grid item xs={6}>
                        <Button variant="contained" color="primary" type="submit">
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}
