import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Router } from '@reach/router'

import Profile from '../components/Profile/Profile'
import Layout from '../components/Layout/Layout'
import PrivateRoute from '../components/Auth/PrivateRoute'
import NewFileRequestLink from '../components/NewFileRequest'
import Uploads from '../components/Submissions/Uploads'
import NotFound from '../components/NotFound'
import Submissions from '../components/Submissions/Submissions'
import Assignments from '../components/Assignments/Assignments'

const App: React.FC = (): JSX.Element => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Layout>
            <Router>
                <NotFound default />
                <PrivateRoute path="/app" component={Assignments} />
                <PrivateRoute path="/app/assignments/new" component={NewFileRequestLink} />
                <PrivateRoute path="/app/assignments/:assignmentId" component={Submissions} />
                <PrivateRoute path="/app/profile" component={Profile} />
                <Uploads path="/app/uploads/:assignmentId" />
            </Router>
        </Layout>
    </MuiPickersUtilsProvider>
)

export default App
