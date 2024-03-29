import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { Router } from '@reach/router'
import EditProfile from '../components/Profile/EditProfile'
import Layout from '../components/Layout/Layout'
import PrivateRoute from '../components/Auth/PrivateRoute'
import NewPublicAssignment from '../components/Assignments/NewPublicAssignment'
import EditPublicAssignment from '../components/Assignments/EditPublicAssignment'
import NewPublicSubmission from '../components/Submissions/NewPublicSubmission'
import NotFound from '../components/NotFound'
import Submissions from '../components/Submissions/Submissions'
import Playlist from '../components/Playlists/Playlist'
import Workshop from '../components/Workshops/Workshop'
import Members from '../components/Members/Members'
import { AuthProvider } from '../auth/auth.context'
import Workshops from '../components/Workshops/Workshops'
import EditWorkshop from '../components/Workshops/EditWorkshop'
import NewWorkshop from '../components/Workshops/NewWorkshop'
import { ROUTES, ROUTE_NAMES, MAPPED_ROUTE_CONFIGS } from '../constants'
import ViewProfile from '../components/Profile/ViewProfile';
import Stems from '../components/Stems/Stems';
import Playlists from '../components/Playlists/Playlists';
import Prompts from '../components/Prompts/Prompts';
import SiteSettings from '../components/SiteSettings/SiteSettings';
import { FeedbackSection } from '../components/Feedback';
import Theme from '../components/Layout/Theme';
import Assignments from '../components/Assignments/Assignments';
import hash from 'object-hash'
import { AudioPlayerProvider } from '../components/AudioPlayer/audio-player.context';
import EditPlaylist from '../components/Playlists/EditPlaylist';
import NewStems from '../components/Stems/NewStems';
import EditPublicSubmission from '../components/Submissions/EditPublicSubmission';
import GiveFeedbackStandalone from '../components/Submissions/GiveFeedbackStandalone';
import Map from '../components/Members/Map';
import MySubmissions from '../components/Submissions/MySubmissions';


const componentToRoutesMap = {
    [ROUTE_NAMES.HOME]: Workshops,
    [ROUTE_NAMES.PROFILE]: ViewProfile,
    [ROUTE_NAMES.VIEW_PROFILE]: ViewProfile,
    [ROUTE_NAMES.EDIT_PROFILE]: EditProfile,
    [ROUTE_NAMES.PROFILE_CONNECTED_APPS]: EditProfile,
    [ROUTE_NAMES.WORKSHOPS]: Workshops,
    [ROUTE_NAMES.WORKSHOP]: Workshop,
    [ROUTE_NAMES.NEW_WORKSHOP]: NewWorkshop,
    [ROUTE_NAMES.EDIT_WORKSHOP]: EditWorkshop,
    [ROUTE_NAMES.WORKSHOP_MEMBERS]: Members,
    [ROUTE_NAMES.WORKSHOP_MEMBERS_MAP]: Map,
    [ROUTE_NAMES.WORKSHOP_FEEDBACK]: FeedbackSection,
    [ROUTE_NAMES.WORKSHOP_STEMS]: Stems,
    [ROUTE_NAMES.ASSIGNMENTS]: Assignments,
    [ROUTE_NAMES.ASSIGNMENT]: Submissions,
    [ROUTE_NAMES.NEW_ASSIGNMENT]: NewPublicAssignment,
    [ROUTE_NAMES.EDIT_ASSIGNMENT]: EditPublicAssignment,
    [ROUTE_NAMES.ASSIGNMENT_GIVE_FEEDBACK]: GiveFeedbackStandalone,
    [ROUTE_NAMES.ASSIGNMENT_PLAYLIST]: Playlist,
    [ROUTE_NAMES.NEW_SUBMISSION]: NewPublicSubmission,
    [ROUTE_NAMES.EDIT_SUBMISSION]: EditPublicSubmission,
    [ROUTE_NAMES.NEW_SUBMISSION_EXTENSION]: NewPublicSubmission,
    [ROUTE_NAMES.MY_SUBMISSIONS]: MySubmissions,
    [ROUTE_NAMES.PLAYLISTS]: Playlists,
    [ROUTE_NAMES.PLAYLIST]: Playlist,
    [ROUTE_NAMES.NEW_PLAYLIST]: EditPlaylist,
    [ROUTE_NAMES.EDIT_PLAYLIST]: EditPlaylist,
    [ROUTE_NAMES.FEEDBACK]: FeedbackSection,
    [ROUTE_NAMES.STEMS]: Stems,
    [ROUTE_NAMES.NEW_STEM]: NewStems,
    [ROUTE_NAMES.PROMPTS]: Prompts,
    [ROUTE_NAMES.NEW_PROMPT]: Prompts,
    [ROUTE_NAMES.SITE_SETTINGS]: SiteSettings,
}


const App: React.FC = (): JSX.Element => (
    <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Theme>
                <AudioPlayerProvider>
                    <Layout>
                        <Router>
                            <NotFound default />
                            {MAPPED_ROUTE_CONFIGS.map(config => {
                                if (config.public) return; // just manually setup the public routes below
                                return <PrivateRoute key={hash(config)} {...config} component={componentToRoutesMap[config.routeName]} />

                            })}
                            <Playlist path={ROUTES.playlist.path} />
                            <Playlist path={ROUTES.assignmentPlaylist.path} />
                            <NewPublicSubmission path={ROUTES.newPublicSubmission.path} />
                            <NewPublicSubmission path={ROUTES.newPublicSubmissionExtension.path} />
                        </Router>
                    </Layout>
                </AudioPlayerProvider>
            </Theme>
        </LocalizationProvider>
    </AuthProvider>
)

export default App
