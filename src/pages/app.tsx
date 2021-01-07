import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Router } from '@reach/router'

import Profile from '../components/Profile/Profile'
import Layout from '../components/Layout/Layout'
import PrivateRoute from '../components/Auth/PrivateRoute'
import NewPublicAssignment from '../components/Assignments/NewPublicAssignment'
import NewPublicSubmission from '../components/Submissions/NewPublicSubmission'
import NotFound from '../components/NotFound'
import Submissions from '../components/Submissions/Submissions'
import Assignments from '../components/Assignments/Assignments'

const App: React.FC = (): JSX.Element => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Layout>
            <Router>
                <NotFound default />
                <PrivateRoute path="/app" component={Assignments} />
                <PrivateRoute path="/app/assignments/new" component={NewPublicAssignment} />
                <PrivateRoute path="/app/assignments/:assignmentId" component={Submissions} />
                <PrivateRoute path="/app/profile" component={Profile} />
                <NewPublicSubmission path="/app/submissions/:assignmentId" />
            </Router>
        </Layout>
    </MuiPickersUtilsProvider>
)

export default App
