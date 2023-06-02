import React, { useState } from 'react'
import {
    Autocomplete,
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Switch,
    TextField,
    Typography,
} from '@mui/material'
import { getProfile, listProfiles } from '../../graphql/queries'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import GroupGuard from '../Auth/GroupGuard'
import { Group } from '../../constants'
import { useProfile, useUser } from '../../auth/hooks'
import ImagePicker, { uploadImage } from '../ImagePicker'
import { getCloudFrontURL } from '../../utils'
import { v4 as uuidv4 } from 'uuid';
import { DatePicker } from '@mui/x-date-pickers'
import { matchSorter } from 'match-sorter';
import If from '../If'
import ConnectMailchimpButton from '../ConnectMailchimpButton'


export default function WorkshopForm({ onSubmit, setFormState, formState }) {
    const profile = useProfile()
    const [image, setImage] = useState<string>('')
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

    const user = useUser()
    const {
        loading: getProfileLoading,
        error: getProfileError,
        data: getProfileData,
        refetch: getProfileRefetch,
    } = useQuery(gql(getProfile), {
        variables: { email: user.email },
    })

    const { loading: listProfilesLoading, error: listProfilesError, data: listProfilesData } = useQuery(gql(listProfiles), { variables: { limit: 1000 } })
    const ID = uuidv4()
    const filterOptions = (options, { inputValue }) => matchSorter(options, inputValue, { keys: ['displayName', 'name', 'email'] });

    return (
        <Grid item xs={8}>
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
                        />
                    </Grid>
                    <If condition={listProfilesData?.listProfiles}>
                        <Grid item xs={12}>
                            <Autocomplete
                                options={listProfilesData?.listProfiles?.items || []}
                                getOptionLabel={(option) => option.displayName || option.name || option.email.split('@')[0]}
                                value={listProfilesData?.listProfiles?.items?.find(option => option.email === formState?.email)}
                                onChange={(event, newValue) => {
                                    if (newValue?.email) {
                                        updateForm({ email: newValue.email })
                                    }
                                }}
                                filterOptions={filterOptions}
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
                        <TextField name="artworkCredit" fullWidth label="Artwork Title/Credit" value={formState?.artworkCredit} onChange={onFieldChange} InputLabelProps={{ shrink: true }} />
                    </Grid>
                    <Grid item xs={12}>
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
                    <Grid item xs={3}>
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

                    <Grid item xs={4}>
                        <DatePicker
                            inputVariant="outlined"
                            variant="inline"
                            inputFormat="MM/dd/yyyy"
                            label="Start Date"
                            onChange={(date) => updateForm({ startDate: date })}
                            value={formState?.startDate}
                        />
                    </Grid>
                    <Grid item xs={4}>
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
                                    fallbackContent={<ConnectMailchimpButton mailchimpEnabled={false} />}>
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
