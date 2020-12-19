import React from 'react'
import { Router } from '@reach/router'
import Layout from '../components/Layout'
import PrivateRoute from '../components/PrivateRoute'
import Details from '../components/Details'
import Home from '../components/Home'
import Login from '../components/Login'
import SignUp from '../components/Signup'
import Assignments from '../components/Assignments'
import Submissions from '../components/Submissions'
import NewSubmission from '../components/NewSubmission'
import NewAssignment from '../components/NewAssignment'
import Assignment from '../components/Assignment'

const App: React.FC = (): JSX.Element => (
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
)

export default App
