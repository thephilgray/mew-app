import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Router } from '@reach/router'

import Assignment from '../components/Assignment'
import Assignments from '../components/Assignments'
import Details from '../components/Details'
import Home from '../components/Home'
import Layout from '../components/Layout'
import Login from '../components/Login'
import NewAssignment from '../components/NewAssignment'
import NewSubmission from '../components/NewSubmission'
import PrivateRoute from '../components/PrivateRoute'
import SignUp from '../components/Signup'
import Submissions from '../components/Submissions'

const App: React.FC = (): JSX.Element => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Layout>
            <Router>
                <PrivateRoute path="/app/home" component={Home} />
                <PrivateRoute path="/app/profile" component={Details} />
                <PrivateRoute path="/app/assignments" component={Assignments} />
                <PrivateRoute path="/app/assignments/new" component={NewAssignment} />
                <PrivateRoute path="/app/assignments/:assignmentId" component={Assignment} />
                <PrivateRoute path="/app/assignments/:assignmentId/submissions" component={Submissions} />
                <PrivateRoute path="/app/assignments/:assignmentId/submissions/new" component={NewSubmission} />
                <Login path="/app/login" />
                <SignUp path="/app/signup" />
            </Router>
        </Layout>
    </MuiPickersUtilsProvider>
)

export default App
