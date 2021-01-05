import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Router } from '@reach/router'

import Assignment from '../components/Assignments/Assignment'
import Profile from '../components/Profile/Profile'
import Layout from '../components/Layout/Layout'
import NewAssignment from '../components/Assignments/NewAssignment'
import NewSubmission from '../components/Submissions/NewSubmission'
import PrivateRoute from '../components/Auth/PrivateRoute'
import Submissions from '../components/Submissions/Submissions'
import Submission from '../components/Submissions/Submission'
import NewFileRequestLink from '../components/NewFileRequest'
import Uploads from '../components/Submissions/Uploads'
import NotFound from '../components/NotFound'

const App: React.FC = (): JSX.Element => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Layout>
            <Router>
                <NotFound default />
                <PrivateRoute path="/app" component={NewFileRequestLink} />
                <PrivateRoute path="/app/profile" component={Profile} />
                <PrivateRoute path="/app/assignments/new" component={NewAssignment} />
                <PrivateRoute path="/app/assignments/:assignmentId" component={Assignment} />
                <PrivateRoute path="/app/assignments/:assignmentId/submissions" component={Submissions} />
                <PrivateRoute path="/app/assignments/:assignmentId/submissions/new" component={NewSubmission} />
                <PrivateRoute path="/app/assignments/:assignmentId/submissions/:submissionId" component={Submission} />
                <Uploads path="/app/uploads/:fileRequestId" />
            </Router>
        </Layout>
    </MuiPickersUtilsProvider>
)

export default App
