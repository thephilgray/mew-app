import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Router } from '@reach/router'

import Assignment from '../components/Assignments/Assignment'
import Workshop from '../components/Workshops/Workshop'
import NewWorkshop from '../components/Workshops/NewWorkshop'
import Details from '../components/Profile/Details'
import Home from '../components/Home'
import Layout from '../components/Layout/Layout'
import Login from '../components/Auth/Login'
import NewAssignment from '../components/Assignments/NewAssignment'
import NewSubmission from '../components/Submissions/NewSubmission'
import PrivateRoute from '../components/Auth/PrivateRoute'
import SignUp from '../components/Auth/Signup'
import Submissions from '../components/Submissions/Submissions'
import Submission from '../components/Submissions/Submission'

const App: React.FC = (): JSX.Element => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Layout>
            <Router>
                <PrivateRoute path="/app/home" component={Home} />
                <PrivateRoute path="/app/profile" component={Details} />
                <PrivateRoute path="/app/:workshopId" component={Workshop} />
                <PrivateRoute path="/app/workshops/new" component={NewWorkshop} />
                <PrivateRoute path="/app/:workshopId/assignments/new" component={NewAssignment} />
                <PrivateRoute path="/app/:workshopId/assignments/:assignmentId" component={Assignment} />
                <PrivateRoute path="/app/:workshopId/assignments/:assignmentId/submissions" component={Submissions} />
                <PrivateRoute
                    path="/app/:workshopId/assignments/:assignmentId/submissions/new"
                    component={NewSubmission}
                />
                <PrivateRoute
                    path="/app/:workshopId/assignments/:assignmentId/submissions/:submissionId"
                    component={Submission}
                />
                <Login path="/app/login" />
                <SignUp path="/app/signup" />
            </Router>
        </Layout>
    </MuiPickersUtilsProvider>
)

export default App
