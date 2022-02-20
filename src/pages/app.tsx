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
import Workshops from '../components/Workshops/Workshops'
import EditWorkshop from '../components/Workshops/EditWorkshop'
import NewWorkshop from '../components/Workshops/NewWorkshop'



export const ROUTE_NAMES = {
    home: {
        path: '/app/',
        name: 'Workshops',
    },
    assignment: {
        path: '/app/assignments/:assignmentId',
        getPath: ({ assignmentId = '' }): string => `/app/assignments/${assignmentId}`,
        getName: ({ title = '' }): string => title,
        name: 'Assignment',
        roles: ['Admin'],
    },
    assignments: {
        path: '/app/workshops/:workshopId',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}`,
        getName: ({ name = '' }): string => name,
        name: 'Assignments',
        roles: ['Admin'],
    },
    playlist: {
        path: '/app/assignments/:assignmentId/playlist',
        getPath: ({ assignmentId = '' }): string => `/app/assignments/${assignmentId}/playlist`,
        name: 'Playlist',
        roles: ['Admin'],
    },
    newAssignment: {
        path: '/app/workshops/:workshopId/new-assignment',
        name: 'New Assignment',
        roles: ['Admin'],
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/new-assignment`,
    },
    editAssignment: {
        path: '/app/assignments/:assignmentId/edit',
        name: 'Edit',
        roles: ['Admin'],
    },
    members: {
        path: '/app/workshops/:workshopId/members',
        name: 'Members',
        roles: ['Admin'],
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/members`,
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
    newPublicSubmissionExtension: {
        path: '/app/submissions/:assignmentId/:extensionCode',
        getPath: ({ assignmentId = '', extensionCode = '' }): string => `/app/submissions/${assignmentId}/${extensionCode}`,
        name: 'New Submission (Extension)',
    },
    editWorkshop: {
        path: '/app/workshops/:workshopId/settings',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/settings`,
        name: 'Settings',
        roles: ['Admin'],
    },
    newWorkshop: {
        path: '/app/workshops/new',
        name: 'New Workshop',
        roles: ['Admin'],
    }
}
const user = getCurrentUser()
const App: React.FC = (): JSX.Element => (
    <AuthProvider user={user}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Layout>
                <Router>
                    <NotFound default />
                    <PrivateRoute path={ROUTE_NAMES.home.path} component={Workshops} />
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
                        path={ROUTE_NAMES.assignments.path}
                        component={Assignments}
                        roles={ROUTE_NAMES.assignments.roles}
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
                    <PrivateRoute
                        path={ROUTE_NAMES.editWorkshop.path}
                        component={EditWorkshop}
                        roles={ROUTE_NAMES.editWorkshop.roles}
                    />
                    <PrivateRoute
                        path={ROUTE_NAMES.newWorkshop.path}
                        component={NewWorkshop}
                        roles={ROUTE_NAMES.newWorkshop.roles}
                    />
                    <NewPublicSubmission path={ROUTE_NAMES.newPublicSubmission.path} />
                    <NewPublicSubmission path={ROUTE_NAMES.newPublicSubmissionExtension.path} />
                </Router>
            </Layout>
        </MuiPickersUtilsProvider>
    </AuthProvider>
)

export default App
