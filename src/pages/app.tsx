import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Router } from '@reach/router'

import Profile from '../components/Profile/Profile'
import Layout from '../components/Layout/Layout'
import PrivateRoute from '../components/Auth/PrivateRoute'
import NewPublicAssignment from '../components/Assignments/NewPublicAssignment'
import EditPublicAssignment from '../components/Assignments/EditPublicAssignment'
import NewPublicSubmission from '../components/Submissions/NewPublicSubmission'
import NotFound from '../components/NotFound'
import Submissions from '../components/Submissions/Submissions'
import Playlist from '../components/Submissions/Playlist'
import Assignments from '../components/Assignments/Assignments'

export const ROUTE_NAMES = {
    home: {
        path: '/app',
        name: 'Home',
    },
    assignment: {
        path: '/app/assignments/:assignmentId',
        getPath: ({ assignmentId = '' }): string => `/app/assignments/${assignmentId}`,
        name: 'Assignment',
    },
    playlist: {
        path: '/app/assignments/:assignmentId/playlist',
        getPath: ({ assignmentId = '' }): string => `/app/assignments/${assignmentId}/playlist`,
        name: 'Playlist',
    },
    newAssignment: {
        path: '/app/assignments/new',
        name: 'New Assignment',
    },
    editAssignment: {
        path: '/app/assignments/:assignmentId/edit',
        name: 'Edit',
    },
    profile: {
        path: '/app/profile',
        name: 'Profile',
    },
    newPublicSubmission: {
        path: '/app/submissions/:assignmentId',
        getPath: ({ assignmentId = '' }): string => `/app/submissions/${assignmentId}`,
        name: 'New Submission',
    },
}

const App: React.FC = (): JSX.Element => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Layout>
            <Router>
                <NotFound default />
                <PrivateRoute path={ROUTE_NAMES.home.path} component={Assignments} />
                <PrivateRoute path={ROUTE_NAMES.newAssignment.path} component={NewPublicAssignment} />
                <PrivateRoute path={ROUTE_NAMES.editAssignment.path} component={EditPublicAssignment} />
                <PrivateRoute path={ROUTE_NAMES.assignment.path} component={Submissions} />
                <PrivateRoute path={ROUTE_NAMES.playlist.path} component={Playlist} />
                <PrivateRoute path={ROUTE_NAMES.profile.path} component={Profile} />
                <NewPublicSubmission path={ROUTE_NAMES.newPublicSubmission.path} />
            </Router>
        </Layout>
    </MuiPickersUtilsProvider>
)

export default App
