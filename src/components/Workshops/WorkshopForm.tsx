import React from 'react'
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@material-ui/core'
import { getProfile } from '../../graphql/queries'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import GroupGuard from '../Auth/GroupGuard'
import { Group } from '../../constants'
import { useUser } from '../../auth/hooks'

export default function WorkshopForm({ onSubmit, setFormState, formState }) {
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

    const apiKeys =
        (getProfileData &&
            getProfileData.getProfile &&
            getProfileData.getProfile.apiKeys &&
            getProfileData.getProfile.apiKeys.items) ||
        []

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
                        <TextField required name="name" label="Name" value={formState.name} onChange={onFieldChange} />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth required>
                            <InputLabel>Status</InputLabel>
                            <Select name="status" value={formState.status} onChange={onFieldChange}>
                                <MenuItem value="Active">Active</MenuItem>
                                <MenuItem value="Inactive">Inactive</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
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
                    <GroupGuard groups={[Group.admin]}>
                        <Grid item xs={12}>
                            <Typography variant="h6" component="h6">
                                Mailchimp Integration
                            </Typography>
                            <Typography>
                                With this enabled, the members in the Members section will be populated from the
                                Mailchimp list you specify. Only users in your list will appear.
                            </Typography>
                        </Grid>
                        {!!formState.enableMailchimpIntegration && (
                            <>
                                <Grid item xs={12}>
                                    <FormControl fullWidth required>
                                        <InputLabel>API Key</InputLabel>
                                        <Select name="apiKeyName" value={formState.apiKeyName} onChange={onFieldChange}>
                                            {apiKeys.length > 0 ? (
                                                apiKeys.map(({ keyName, id }) => (
                                                    <MenuItem key={id} value={keyName}>
                                                        {keyName.split('/').slice(-1)[0]}
                                                    </MenuItem>
                                                ))
                                            ) : (
                                                <MenuItem disabled value="">
                                                    <em>No API Keys Saved to Your Profile</em>
                                                </MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required={!!formState.enableMailchimpIntegration}
                                        name="listId"
                                        label="List ID"
                                        value={formState.listId}
                                        onChange={onFieldChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required={!!formState.enableMailchimpIntegration}
                                        name="serverPrefix"
                                        label="Server Prefix"
                                        value={formState.serverPrefix}
                                        onChange={onFieldChange}
                                    />
                                </Grid>
                            </>
                        )}
                        <Grid item xs={12}>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="enableMailchimpIntegration"
                                            checked={formState.enableMailchimpIntegration}
                                            onChange={onFieldChange}
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
