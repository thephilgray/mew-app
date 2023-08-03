/* eslint-disable react/display-name */
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';
import {
    Badge,
    Box,
    Button,
    Checkbox,
    CircularProgress,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControlLabel,
    FormGroup,
    Grid,
    IconButton,
    Snackbar,
    Typography,
} from '@mui/material';
import {
    DataGrid,
    GridColDef,
    GridOverlay,
    GridRowSelectionModel,
} from '@mui/x-data-grid';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { format, isPast } from 'date-fns';
import { useCopyToClipboard, usePrevious } from 'react-use';
import {
    AssignmentTurnedIn,
    CloudDownload,
    FileCopy,
    Add,
    Assessment,
    Email,
    Edit,
    PlayArrowTwoTone,
    MoreTime,
    Pause,
} from '@mui/icons-material';
import { API, Storage, graphqlOperation } from 'aws-amplify';
import { uniqBy, pipe, map } from 'lodash/fp';

import AppBreadcrumbs from '../AppBreadcrumbs';
import Error from '../Error';
import Menu from '../Menu';
import { processDownload, runProcessAudioTask } from '../../graphql/mutations';
import { getFileRequest } from '../../graphql/queries';
import ExtensionsDialog from './ExtensionsDialog';
import { useUser, useViewAdmin } from '../../auth/hooks';
import GroupGuard from '../Auth/GroupGuard';
import { Group, ROUTES } from '../../constants';
import If from '../If';
import { FeedbackSection } from '../Feedback';
import { useBreakpoint } from '../Layout/Layout';
import { getCloudFrontURL } from '../../utils';
import Loading from '../Loading';
import SimplePlayer, { SimplePlayerButton } from '../AudioPlayer/SimplePlayer';
import { DataGridWrapper } from '../DataGridWrapper';

const getFileRequestWithNoLimit = getFileRequest.replace(
    'submissions {',
    'submissions(limit: 1000) {'
);

const Submissions: React.FC<{ assignmentId: string }> = ({
    assignmentId = '',
}) => {
    const [copyToClipboardState, copyToClipboard] = useCopyToClipboard();
    const [downloadLoading, setDownloadLoading] = useState<boolean>(false);
    const [selectedRows, setSelectedRows] = useState<GridRowSelectionModel>([]);
    const [snackbarToggles, setSnackbarToggles] = useState<{
        [key: string]: boolean;
    }>({});
    const [dialogToggles, setDialogToggles] = useState<{
        [key: string]: boolean;
    }>({});
    const [downloadLinkOptions, setDownloadLinkOptions] = useState<{
        [key: string]: boolean;
    }>({
        stripMetadataForSoundCloud: true,
    });
    const audioRef = useRef();
    const [audioSrc, setAudioSrc] = useState(null)
    const previousSrc = usePrevious(audioSrc)
    const [isPlaying, setIsPlaying] = useState(false)
    const user = useUser();
    const [viewAdmin] = useViewAdmin();
    const breakpoint = useBreakpoint()
    const sm = breakpoint === "S"
    const lg = breakpoint === "L"
    const xs = breakpoint === "XS"

    const dialogConstants = {
        CONFIRM_EMAIL_DOWNLOAD_LINK: 'confirm-email-download-link',
        EDIT_EXTENSIONS: 'edit-extensions',
    };

    const snackbarConstants = {
        COPY_SUCCESS: 'copy-success',
        TRACKS_SUCCESS: 'tracks-success',
        REPORT_SUCCESS: 'report-success',
        EMAIL_SUCCESS: 'email-success',
        EMAIL_FAILURE: 'email-failure',
    };

    const snackbarConfigs = [
        {
            message: 'Link to assignment copied to clipboard.',
            key: snackbarConstants.COPY_SUCCESS,
        },
        {
            message: 'Successfully downloaded selected tracks.',
            key: snackbarConstants.TRACKS_SUCCESS,
        },
        {
            message: 'Successfully downloaded report.',
            key: snackbarConstants.REPORT_SUCCESS,
        },
        {
            message:
                'Successfully requested download link (all tracks included) to your email. Please wait up to 30 minutes to receive email.',
            delay: 5000,
            key: snackbarConstants.EMAIL_SUCCESS,
        },
        {
            message:
                'Requesting a download link failed. Please wait and then try again or contact support.',
            delay: 5000,
            key: snackbarConstants.EMAIL_FAILURE,
        },
    ];

    const { loading, error, data, refetch } = useQuery(
        gql(getFileRequestWithNoLimit),
        {
            variables: { id: assignmentId },
        }
    );

    React.useEffect(() => {
        refetch();
    }, []);

    const rows = (data?.getFileRequest?.submissions?.items || []).filter(
        (item) => {
            if (viewAdmin) return item;
            if (item.email === user.email) return item;
        }
    );

    const isExpired = data?.getFileRequest?.expiration
        ? isPast(new Date(data.getFileRequest.expiration as string))
        : false;

    useEffect(() => {
        if (copyToClipboardState.value) {
            setSnackbarToggles({ [snackbarConstants.COPY_SUCCESS]: true });
        }
    }, [copyToClipboardState]);

    const downloadBlob = (blob: Blob, filename: string) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || 'download';
        const clickHandler = () => {
            setTimeout(() => {
                URL.revokeObjectURL(url);
                a.removeEventListener('click', clickHandler);
            }, 150);
        };
        a.addEventListener('click', clickHandler, false);
        a.click();
        return a;
    };

    const onDownloadSelected = async () => {
        setDownloadLoading(true);
        const uniqByFileId = uniqBy('fileId');
        const mapFields = map(
            ({ fileId = '', artist = '', name = '', fileExtension = '' }) => ({
                fileId,
                title: `${artist} - ${name}.${fileExtension}`,
            })
        );
        const rowData = rows.filter((row: { id: string }) =>
            selectedRows.includes(row.id)
        );
        const selectFileData = pipe(uniqByFileId, mapFields);
        const songData = selectFileData(rowData);

        try {
            await API.graphql({
                ...graphqlOperation(processDownload, {
                    assignmentId,
                    songData,
                }),
            });

            const submissionsZip = await Storage.get(
                `downloads/${assignmentId}.zip`,
                { download: true }
            );
            const filename = data?.getFileRequest?.title
                ? data.getFileRequest.title
                : assignmentId;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            downloadBlob(submissionsZip.Body, `${filename}.zip`);
        } catch (error) {
            console.error(error);
        }
        setDownloadLoading(false);
        setSnackbarToggles({ [snackbarConstants.TRACKS_SUCCESS]: true });
    };

    const downloadReport = () => {
        const filename = data?.getFileRequest?.title
            ? data.getFileRequest.title
            : assignmentId;
        const rows =
            data?.getFileRequest?.submissions?.items &&
            data.getFileRequest.submissions.items
                .map(
                    ({
                        artist,
                        email,
                        name,
                        createdAt,
                    }: {
                        artist: string;
                        email: string;
                        name: string;
                        createdAt: Date;
                    }) =>
                        [
                            artist,
                            email,
                            name,
                            format(new Date(createdAt), 'MM/dd/yyyy H:mm'),
                        ].map((str?: string) => (str === null ? '' : `\"${str}\"`))
                )
                .join('\r\n');

        const headings = ['Artist', 'Email', 'Song', 'Uploaded'].join() + '\r\n';

        const content = headings.concat(rows);

        const file = new File([content], `${filename}.csv`, {
            type: 'data:text/csv;charset=utf-8',
        });
        downloadBlob(file, `${filename}.csv`);
        setSnackbarToggles({ [snackbarConstants.REPORT_SUCCESS]: true });
    };

    const confirmEmailDownloadLink = () => {
        setDialogToggles({ [dialogConstants.CONFIRM_EMAIL_DOWNLOAD_LINK]: true });
    };

    const emailDownloadLink = async () => {
        try {
            const email = user?.email;
            await API.graphql({
                ...graphqlOperation(runProcessAudioTask, {
                    assignmentId,
                    email,
                    options: {
                        stripMetadataForSoundCloud:
                            downloadLinkOptions.stripMetadataForSoundCloud,
                    },
                }),
            });
            setSnackbarToggles({ [snackbarConstants.EMAIL_SUCCESS]: true });
        } catch (err) {
            console.error(err);
            setSnackbarToggles({ [snackbarConstants.EMAIL_FAILURE]: true });
        }
        setDialogToggles({});
    };

    const columns: GridColDef[] = [
        {
            field: 'artist',
            headerName: 'Artist Byline',
            width: 200,
        },
        {
            field: 'name',
            headerName: 'Song Title',
            width: 300,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 300,
        },
        {
            field: 'createdAt',
            headerName: 'Submitted',
            type: 'date',
            width: 160,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            valueFormatter: ({ value = '' }: ColDef) =>
                value && format(new Date(value), 'MM/dd/yyyy H:mm'),
        },
        {
            field: 'play',
            headerName: 'Listen',
            width: 160,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            renderCell: ({ row, value = '' }) => <SimplePlayerButton audioPath={`${row.fileRequestId}/${row.fileId}`} />
        },
    ];

    const sortModel = [
        {
            field: 'createdAt',
            sort: 'desc' as SortDirection,
        },
    ];

    if (error) return <Error errorMessage={error} />;
    if (loading) return <Loading />;
    if (!loading && !data?.getFileRequest?.submissions?.items)
        return <p>Assignment does not exist or has been deleted.</p>;

    const menuItems = [
        {
            icon: <Assessment />,
            text: 'Download Report',
            key: 'downloadReport',
            onClick: downloadReport,
        },
        {
            icon: <Email />,
            text: 'Email Download Link',
            key: 'emailDownloadLink',
            onClick: confirmEmailDownloadLink,
        },
        {
            icon: downloadLoading ? (
                <CircularProgress size={20} color="secondary" />
            ) : (
                <CloudDownload />
            ),
            text: downloadLoading ? 'Downloading...' : 'Download Selected',
            key: 'downloadSelected',
            onClick: onDownloadSelected,
        },
    ];

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <AppBreadcrumbs
                    paths={[
                        ROUTES.home,
                        ROUTES.workshop,
                        ROUTES.assignment,
                    ]}
                    workshop={data?.getFileRequest?.workshop}
                    workshopId={data?.getFileRequest?.workshopId}
                    assignment={data?.getFileRequest}
                />
            </Grid>
            <>
                <Dialog
                    maxWidth="xs"
                    open={!!dialogToggles[dialogConstants.CONFIRM_EMAIL_DOWNLOAD_LINK]}
                >
                    <DialogTitle>Email yourself a download link</DialogTitle>

                    <DialogContent dividers>
                        <Typography>
                            This will process and zip all tracks for this submission and send
                            you ({user?.email || ''}) a temporary download link.
                        </Typography>
                    </DialogContent>
                    <DialogContent dividers>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        disabled
                                        checked={downloadLinkOptions.stripMetadataForSoundCloud}
                                        defaultChecked
                                        onChange={(e) =>
                                            setDownloadLinkOptions((prevState) => ({
                                                ...prevState,
                                                stripMetadataForSoundCloud:
                                                    !downloadLinkOptions.stripMetadataForSoundCloud,
                                            }))
                                        }
                                    />
                                }
                                label="Strip artist and title metadata (currently required for SoundCloud uploads)"
                            />
                        </FormGroup>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={() => setDialogToggles({})}>
                            Cancel
                        </Button>
                        <Button onClick={emailDownloadLink}>Ok</Button>
                    </DialogActions>
                </Dialog>

                <ExtensionsDialog
                    assignmentId={assignmentId}
                    open={!!dialogToggles[dialogConstants.EDIT_EXTENSIONS]}
                    onCloseDialog={() => setDialogToggles({})}
                />
                {snackbarConfigs.map(({ message = '', key = '', delay = 0 }) => (
                    <Snackbar
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        key={key}
                        open={!!snackbarToggles[key]}
                        color="success"
                        autoHideDuration={3000 + delay}
                        message={message}
                        onClose={() => setSnackbarToggles({ [key]: false })}
                    />
                ))}

                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={6} md={8}>
                            <SimplePlayer />
                            <Typography variant="h6" component="h3">
                                <Link
                                    to={ROUTES.newPublicSubmission.getPath({ assignmentId })}
                                >
                                    <em>
                                        {data?.getFileRequest.title ? (
                                            data.getFileRequest.title
                                        ) : (
                                            <>
                                                {window.origin}
                                                {ROUTES.newPublicSubmission.getPath({
                                                    assignmentId,
                                                })}
                                            </>
                                        )}
                                    </em>
                                </Link>
                            </Typography>
                        </Grid>
                        <GroupGuard groups={[Group.admin]}>
                            <Grid
                                item
                                xs={6}
                                md={4}
                                sx={{
                                    textAlign: 'right',
                                    display: 'flex',
                                    justifyContent: 'end',
                                    flexWrap: 'wrap',
                                }}
                            >
                                <IconButton
                                    color="secondary"
                                    aria-label="Copy"
                                    component="span"
                                    onClick={() =>
                                        copyToClipboard(
                                            `${window.origin
                                            }${ROUTES.newPublicSubmission.getPath({
                                                assignmentId,
                                            })}`
                                        )
                                    }
                                    size="large"
                                >
                                    <FileCopy />
                                </IconButton>
                                <IconButton
                                    color="secondary"
                                    aria-label="Extensions"
                                    onClick={() =>
                                        setDialogToggles({
                                            [dialogConstants.EDIT_EXTENSIONS]: true,
                                        })
                                    }
                                    size="large"
                                >
                                    <MoreTime />
                                </IconButton>
                                <IconButton
                                    color="secondary"
                                    aria-label="Edit"
                                    component={Link}
                                    to="edit"
                                    size="large"
                                >
                                    <Edit />
                                </IconButton>
                            </Grid>
                        </GroupGuard>
                        {data?.getFileRequest?.details && (
                            <Grid item xs={12}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data?.getFileRequest.details,
                                    }}
                                    style={{ width: '100%', maxWidth: '50em' }}
                                />
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="h6" component="h3">
                        {viewAdmin ? 'Submissions' : 'My Submissions'}{' '}
                        <Badge badgeContent={rows.length || 0} color="secondary">
                            <AssignmentTurnedIn />
                        </Badge>
                    </Typography>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: 'right', p: 0, pl: 0, pb: 0 }}>
                    <If condition={!!viewAdmin || (isExpired && (data?.getFileRequest?.playlistStartDate ? isPast(data?.getFileRequest?.playlistStartDate) : true))}>
                        {!xs ? (
                            <Button
                                color="secondary"
                                aria-label="Playlist"
                                component={Link}
                                to={ROUTES.assignmentPlaylist.getPath({ assignmentId })}
                                size="medium"
                                startIcon={<PlayArrowTwoTone />}
                            >
                                Play
                            </Button>
                        ) : (
                            <IconButton
                                color="secondary"
                                aria-label="Playlist"
                                component={Link}
                                to={ROUTES.assignmentPlaylist.getPath({ assignmentId })}
                                size="medium"
                            >
                                <PlayArrowTwoTone />
                            </IconButton>
                        )}
                    </If>
                    <If condition={viewAdmin || !isExpired}>
                        {!xs ? (
                            <Button
                                color="secondary"
                                aria-label="New Submission"
                                component={Link}
                                to={ROUTES.newPublicSubmission.getPath({ assignmentId })}
                                size="medium"
                                startIcon={<Add />}
                            >
                                Submit
                            </Button>
                        ) : (
                            <IconButton
                                color="secondary"
                                aria-label="New Submission"
                                component={Link}
                                to={ROUTES.newPublicSubmission.getPath({ assignmentId })}
                                size="medium"
                            >
                                <Add />
                            </IconButton>
                        )}
                    </If>
                    <GroupGuard groups={[Group.admin]}>
                        {data.getFileRequest.submissions.items.length ? (
                            <Menu size="medium" items={menuItems} />
                        ) : null}
                    </GroupGuard>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    <DataGridWrapper>
                        <DataGrid
                            slots={{
                                noRowsOverlay: () => <GridOverlay>
                                    <If condition={viewAdmin || !isExpired}
                                        fallbackContent={<Typography>You didn't submit anything in time.</Typography>}>
                                        <Button
                                            color="success"
                                            variant='contained'
                                            aria-label="New Submission"
                                            component={Link}
                                            to={ROUTES.newPublicSubmission.getPath({ assignmentId })}
                                            size="medium"
                                            startIcon={<Add />}
                                        >
                                            Submit a track!!!
                                        </Button>
                                    </If>
                                </GridOverlay>
                            }}
                            autoHeight
                            checkboxSelection={!!viewAdmin}
                            rows={rows}
                            columns={columns}
                            sortModel={sortModel}
                            onRowSelectionModelChange={(selection: GridRowSelectionModel) => {
                                setSelectedRows(selection);
                            }}
                            initialState={{
                                sorting: {
                                    sortModel: [{ field: 'createdAt', sort: 'desc' }],
                                },
                            }}
                        />
                    </DataGridWrapper>
                </Grid>
                <Grid item xs={12}>
                    <FeedbackSection
                        assignmentId={assignmentId}
                        workshopId={data?.getFileRequest?.workshopId}
                        showAll={viewAdmin || isExpired}
                    />
                </Grid>
            </>
        </Grid>
    );
};

export default Submissions;
