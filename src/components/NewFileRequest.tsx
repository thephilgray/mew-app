import React, { useState, useEffect } from 'react'
import { Typography, Grid, Button, Paper } from '@material-ui/core'
import { useForm } from 'react-hook-form'
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers'
import { add } from 'date-fns/esm'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'
import { Link } from 'gatsby'
import Error from './Error'

const CREATE_FILE_REQUEST = gql`
    mutation CreateFileRequest($expiration: AWSDateTime!) {
        createFileRequest(input: { expiration: $expiration }) {
            id
        }
    }
`

type Inputs = {
    expiration: Date
}

const NewFileRequestLink: React.FC = () => {
    const { register, handleSubmit, errors, setValue } = useForm<Inputs>()
    const [createFileRequest, { error, data }] = useMutation(CREATE_FILE_REQUEST)
    const [expiration, setExpiration] = useState<Date | null>(add(new Date(), { weeks: 1 }))

    useEffect(() => {
        setValue('expiration', expiration)
        register({ name: 'expiration' }, { required: true })
    }, [expiration])

    const onSubmit = (inputData: Inputs) => {
        return createFileRequest({
            variables: {
                expiration: inputData.expiration?.toISOString(),
            },
        })
    }

    return (
        <Paper style={{ padding: '1rem' }}>
            <Typography variant="h5" component="h5" gutterBottom>
                Create New File Request Link
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    {error && (
                        <Grid item xs={12}>
                            <Error errorMessage={error} />
                        </Grid>
                    )}
                    {data?.createFileRequest?.id && (
                        <Grid item xs={12}>
                            <Link to={`/app/uploads/${data.createFileRequest.id}`}>
                                {window
                                    ? `${window.location.protocol}//${window.location.host}/app/uploads/${data.createFileRequest.id}`
                                    : `/app/uploads/${data.createFileRequest.id}`}
                            </Link>
                        </Grid>
                    )}
                    <Grid item xs={6}>
                        <KeyboardDatePicker
                            fullWidth
                            autoOk
                            error={!!errors.expiration}
                            inputVariant="outlined"
                            variant="inline"
                            format="MM/dd/yyyy"
                            label="Expiration"
                            helperText={!!errors.expiration && <>Start date is required</>}
                            onChange={(date) => setExpiration(date)}
                            value={expiration}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <KeyboardTimePicker
                            id="due-time-picker"
                            fullWidth
                            label="Time"
                            value={expiration}
                            inputVariant="outlined"
                            autoOk
                            variant="inline"
                            onChange={setExpiration}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" style={{ float: 'right' }}>
                            Create
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )
}

export default NewFileRequestLink
