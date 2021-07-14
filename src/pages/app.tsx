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
import Members from '../components/Members/Members'
import { getCurrentUser } from '../auth/utils'
import { AuthProvider } from '../auth/auth.context'

export const ROUTE_NAMES = {
    home: {
        path: '/app',
        name: 'Home',
    },
    assignment: {
        path: '/app/assignments/:assignmentId',
        getPath: ({ assignmentId = '' }): string => `/app/assignments/${assignmentId}`,
        name: 'Assignment',
        roles: ['Admin'],
    },
    playlist: {
        path: '/app/assignments/:assignmentId/playlist',
        getPath: ({ assignmentId = '' }): string => `/app/assignments/${assignmentId}/playlist`,
        name: 'Playlist',
        roles: ['Admin'],
    },
    newAssignment: {
        path: '/app/assignments/new',
        name: 'New Assignment',
        roles: ['Admin'],
    },
    editAssignment: {
        path: '/app/assignments/:assignmentId/edit',
        name: 'Edit',
        roles: ['Admin'],
    },
    members: {
        path: '/app/members',
        name: 'Members',
        roles: ['Admin'],
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
const user = getCurrentUser()
const App: React.FC = (): JSX.Element => (
    <AuthProvider user={user}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Layout>
                <Router>
                    <NotFound default />
                    <PrivateRoute path={ROUTE_NAMES.home.path} component={Assignments} />
                    <PrivateRoute
                        path={ROUTE_NAMES.newAssignment.path}
                        component={NewPublicAssignment}
                        roles={ROUTE_NAMES.newAssignment.roles}
                    />
                    <PrivateRoute
                        path={ROUTE_NAMES.editAssignment.path}
                        component={EditPublicAssignment}
                        roles={ROUTE_NAMES.editAssignment.roles}
                    />
                    <PrivateRoute
                        path={ROUTE_NAMES.assignment.path}
                        component={Submissions}
                        roles={ROUTE_NAMES.assignment.roles}
                    />
                    <PrivateRoute
                        path={ROUTE_NAMES.playlist.path}
                        component={Playlist}
                        roles={ROUTE_NAMES.playlist.roles}
                    />
                    <PrivateRoute path={ROUTE_NAMES.profile.path} component={Profile} />
                    <PrivateRoute
                        path={ROUTE_NAMES.members.path}
                        component={Members}
                        roles={ROUTE_NAMES.members.roles}
                    />
                    <NewPublicSubmission path={ROUTE_NAMES.newPublicSubmission.path} />
                </Router>
            </Layout>
        </MuiPickersUtilsProvider>
    </AuthProvider>
)

export default App
