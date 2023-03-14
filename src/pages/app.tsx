import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
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
import { AuthProvider } from '../auth/auth.context'
import Workshops from '../components/Workshops/Workshops'
import EditWorkshop from '../components/Workshops/EditWorkshop'
import NewWorkshop from '../components/Workshops/NewWorkshop'
import { Group } from '../constants'

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
        groups: [Group.admin, Group.editor, Group.member],
    },
    assignments: {
        path: '/app/workshops/:workshopId',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}`,
        getName: ({ name = '' }): string => name,
        name: 'Assignments',
        groups: [Group.admin, Group.editor, Group.member],
    },
    playlist: {
        path: '/app/playlists/:assignmentId',
        getPath: ({ assignmentId = '' }): string => `/app/playlists/${assignmentId}`,
        name: 'Playlist',
    },
    newAssignment: {
        path: '/app/workshops/:workshopId/new-assignment',
        name: 'New Assignment',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/new-assignment`,
        groups: [Group.admin, Group.editor],
    },
    editAssignment: {
        path: '/app/assignments/:assignmentId/edit',
        name: 'Edit',
        groups: [Group.admin, Group.editor],
    },
    members: {
        path: '/app/workshops/:workshopId/members',
        name: 'Members',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/members`,
        groups: [Group.admin, Group.editor],
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
        getPath: ({ assignmentId = '', extensionCode = '' }): string =>
            `/app/submissions/${assignmentId}/${extensionCode}`,
        name: 'New Submission (Extension)',
    },
    editWorkshop: {
        path: '/app/workshops/:workshopId/settings',
        getPath: ({ workshopId = '' }): string => `/app/workshops/${workshopId}/settings`,
        name: 'Settings',
        groups: [Group.admin, Group.editor],
    },
    newWorkshop: {
        path: '/app/workshops/new',
        name: 'New Workshop',
        groups: [Group.admin],
    },
}
const App: React.FC = (): JSX.Element => (
    <AuthProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Layout>
                <Router>
                    <NotFound default />
                    <PrivateRoute path={ROUTE_NAMES.home.path} component={Workshops} />
                    <PrivateRoute
                        path={ROUTE_NAMES.newAssignment.path}
                        component={NewPublicAssignment}
                        groups={ROUTE_NAMES.newAssignment.groups}
                    />
                    <PrivateRoute
                        path={ROUTE_NAMES.editAssignment.path}
                        component={EditPublicAssignment}
                        groups={ROUTE_NAMES.editAssignment.groups}
                    />
                    <PrivateRoute
                        path={ROUTE_NAMES.assignment.path}
                        component={Submissions}
                        groups={ROUTE_NAMES.assignment.groups}
                    />
                    <PrivateRoute
                        path={ROUTE_NAMES.assignments.path}
                        component={Assignments}
                        groups={ROUTE_NAMES.assignments.groups}
                    />
                    <PrivateRoute path={ROUTE_NAMES.profile.path} component={Profile} />
                    <PrivateRoute
                        path={ROUTE_NAMES.members.path}
                        component={Members}
                        groups={ROUTE_NAMES.members.groups}
                    />
                    <PrivateRoute
                        path={ROUTE_NAMES.editWorkshop.path}
                        component={EditWorkshop}
                        groups={ROUTE_NAMES.editWorkshop.groups}
                    />
                    <PrivateRoute
                        path={ROUTE_NAMES.newWorkshop.path}
                        component={NewWorkshop}
                        groups={ROUTE_NAMES.newWorkshop.groups}
                    />
                    <Playlist path={ROUTE_NAMES.playlist.path} />
                    <NewPublicSubmission path={ROUTE_NAMES.newPublicSubmission.path} />
                    <NewPublicSubmission path={ROUTE_NAMES.newPublicSubmissionExtension.path} />
                </Router>
            </Layout>
        </LocalizationProvider>
    </AuthProvider>
)

export default App
