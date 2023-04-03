import React, { useState, useEffect } from 'react'
import {
    Grid,
    Button,
    Paper,
    IconButton,
    CircularProgress,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TableBody,
    TableRow,
    TableHead,
    TableCell,
    TableContainer,
    Table,
    Snackbar,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'gatsby'
import { API } from 'aws-amplify'
import Error from '../Error'
import { Delete, FileCopy, Save } from '@mui/icons-material'
import { useCopyToClipboard, usePrevious } from 'react-use'
import { ROUTE_NAMES } from '../../pages/app'
import {
    createExtension as createExtensionMutation,
    deleteExtension as deleteExtensionMutation,
} from '../../graphql/mutations'
import { extensionsByFileRequestId as extensionsByFileRequestIdQuery } from '../../graphql/queries'
import { format } from 'date-fns'
import { uniqueNamesGenerator, Config, adjectives, colors, animals } from 'unique-names-generator'

const customConfig: Config = {
    dictionaries: [adjectives, colors, animals],
    separator: '-',
    length: 3,
}

const ExtensionsDialog: React.FC<{ assignmentId: string; open: boolean; onCloseDialog: React.FC }> = ({
    assignmentId = '',
    open = false,
    onCloseDialog,
}) => {
    const { data: { extensionsByFileRequestId } = {}, loading, error, refetch } = useQuery(
        gql(extensionsByFileRequestIdQuery),
        {
            variables: { assignmentId },
        },
    )
    const [showCopySuccessAlert, setShowCopySuccessAlert] = useState<boolean>(false)
    const [copyToClipboardState, copyToClipboard] = useCopyToClipboard()
    const [extensions, setExtensions] = React.useState([])
    const previousOpenState = usePrevious(open)

    const setNewExtension = () => ({
        id: uniqueNamesGenerator(customConfig),
        expiration: new Date(),
    })

    const [currentExtension, setCurrentExtension] = React.useState(setNewExtension())

    useEffect(() => {
        if (open && !previousOpenState) {
            refetch()
        }
    }, [open])

    useEffect(() => {
        if (extensionsByFileRequestId) {
            setExtensions(extensionsByFileRequestId?.items)
        }
    }, [extensionsByFileRequestId])

    useEffect(() => {
        if (copyToClipboardState.value) {
            setShowCopySuccessAlert(true)
        }
    }, [copyToClipboardState])

    const onSaveNewExtension = async () => {
        try {
            const newExtension = await API.graphql({
                query: createExtensionMutation,
                variables: {
                    input: {
                        assignmentId,
                        ...currentExtension,
                        expiration: currentExtension?.expiration?.toISOString(),
                    },
                },
            })
            // @ts-ignore
            setExtensions((prev) => [...prev, newExtension?.data?.createExtension])
            setCurrentExtension(setNewExtension())
        } catch (error) {
            console.log(error)
        }
    }

    // @ts-ignore
    const onDeleteExtension = async (extensionId) => {
        try {
            const [extensionToDelete] = extensions.filter((ex) => ex.id === extensionId)
            await API.graphql({
                query: deleteExtensionMutation,
                variables: {
                    input: {
                        id: extensionId,
                    },
                },
            })

            // @ts-ignore
            setExtensions((prev) => prev.filter((x) => x.id !== extensionId))
        } catch (error) {
            console.log(error)
        }
    }

    if (error) return <Error errorMessage={error} />
    if (loading) return <CircularProgress />

    return <>
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={showCopySuccessAlert}
            color="success"
            autoHideDuration={3000}
            message="Link to extension copied to clipboard."
            onClose={() => setShowCopySuccessAlert(false)}
        />

        <Dialog
            open={open}
            onClose={onCloseDialog}
            aria-labelledby="extensions-modal"
            aria-describedby="extensions-modal"
            maxWidth="md"
        >
            <DialogTitle>Extensions</DialogTitle>

            <DialogContent>
                <DialogContentText>Secret links that give people a little more time to submit.</DialogContentText>
                <Grid container>
                    {extensions.length > 0 && (
                        <Grid xs={12}>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Link</TableCell>
                                            <TableCell align="center">Code</TableCell>
                                            <TableCell align="center">Expiration</TableCell>
                                            <TableCell align="center">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {extensions.map((row) => (
                                            <TableRow key={row.id}>
                                                <TableCell>
                                                    <Link
                                                        to={ROUTE_NAMES.newPublicSubmissionExtension.getPath({
                                                            assignmentId,
                                                            extensionCode: row.id,
                                                        })}
                                                        style={{ fontSize: '.75em' }}
                                                    >
                                                        {window.origin}
                                                        {ROUTE_NAMES.newPublicSubmissionExtension.getPath({
                                                            assignmentId,
                                                            extensionCode: row.id,
                                                        })}
                                                    </Link>
                                                </TableCell>
                                                <TableCell align="center">{row.id}</TableCell>
                                                <TableCell align="center">
                                                    {format(new Date(row.expiration), 'MM/dd/yyyy H:mm')}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <IconButton
                                                        color="secondary"
                                                        aria-label="Close"
                                                        component="span"
                                                        onClick={() =>
                                                            copyToClipboard(
                                                                `${window.origin
                                                                }${ROUTE_NAMES.newPublicSubmissionExtension.getPath(
                                                                    {
                                                                        assignmentId,
                                                                        // @ts-ignore
                                                                        extensionCode: row.id,
                                                                    },
                                                                )}`,
                                                            )
                                                        }
                                                        size="large">
                                                        <FileCopy />
                                                    </IconButton>
                                                    <IconButton
                                                        style={{ float: 'right' }}
                                                        color="secondary"
                                                        aria-label="Delete extension"
                                                        // @ts-ignore
                                                        onClick={() => onDeleteExtension(row.id)}
                                                        size="large">
                                                        <Delete />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    )}
                    <Grid item xs={12} style={{ marginTop: '1rem' }}>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item xs={5}>
                                <DatePicker
                                    fullWidth
                                    autoOk
                                    // error={!!errors.expiration}
                                    inputVariant="outlined"
                                    variant="inline"
                                    inputFormat="MM/dd/yyyy"
                                    label="Expiration"
                                    // helperText={!!errors.expiration && <>Start date is required</>}
                                    // @ts-ignore
                                    onChange={(date) =>
                                        setCurrentExtension((prev) => ({ ...prev, expiration: date }))
                                    }
                                    value={currentExtension.expiration}
                                />
                            </Grid>
                            <Grid xs={5} item>
                                <TimePicker
                                    id="due-time-picker"
                                    fullWidth
                                    label="Time"
                                    value={currentExtension.expiration}
                                    inputVariant="outlined"
                                    autoOk
                                    variant="inline"
                                    // @ts-ignore
                                    onChange={(date) =>
                                        setCurrentExtension((prev) => ({ ...prev, expiration: date }))
                                    }
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <Button
                                    fullWidth
                                    color="primary"
                                    variant="contained"
                                    aria-label="Create extension"
                                    onClick={onSaveNewExtension}
                                    startIcon={<Save />}
                                >
                                    Add
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    </>;
}

export default ExtensionsDialog
