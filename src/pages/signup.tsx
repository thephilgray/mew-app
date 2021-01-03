import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'
import { RouteComponentProps } from '@reach/router'
import { Auth } from 'aws-amplify'
import { Input, Button } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { isLoggedIn } from '../utils/auth'
import Error from '../components/Error'
import Layout from '../components/Layout/Layout'

const initialState = {
    name: '',
    password: '',
    email: '',
    authCode: '',
    stage: 0,
    error: '',
}

const Signup: React.FC<RouteComponentProps> = (): JSX.Element => {
    const [state, setState] = useState(initialState)
    const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target
        setState((prevState) => ({ ...prevState, [name]: value }))
    }
    const signUp: React.FormEventHandler = async (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        const { password, email, name } = state
        try {
            await Auth.signUp({ username: email, password, attributes: { email, name } })
            setState((prevState) => ({ ...prevState, stage: 1 }))
        } catch (err) {
            setState((prevState) => ({ ...prevState, error: err }))
        }
    }
    const confirmSignUp: React.FormEventHandler = async (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        const { email, authCode } = state
        try {
            await Auth.confirmSignUp(email, authCode)
            alert('Successfully signed up!')
            navigate('/signin')
        } catch (err) {
            setState((prevState) => ({ ...prevState, error: err }))
        }
    }

    if (isLoggedIn()) navigate('/app/')
    return (
        <Layout>
            <Grid container spacing={0} direction="row">
                <Grid item xs={12} md={6}>
                    <Grid container>
                        <Grid item xs={12}>
                            <h1>Sign Up</h1>
                            {state.error && <Error errorMessage={state.error} />}
                        </Grid>
                        <Grid item xs={12}>
                            {state.stage === 0 && (
                                <form onSubmit={signUp}>
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item>
                                            <Input
                                                fullWidth
                                                onChange={handleUpdate}
                                                placeholder="Name"
                                                name="name"
                                                value={state.name}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Input
                                                fullWidth
                                                onChange={handleUpdate}
                                                placeholder="Email"
                                                name="email"
                                                value={state.email}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Input
                                                fullWidth
                                                onChange={handleUpdate}
                                                placeholder="Password"
                                                name="password"
                                                value={state.password}
                                                type="password"
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" color="primary" type="submit">
                                                Sign Up
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <Link to="/signin">Sign In</Link>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                            {state.stage === 1 && (
                                <form onSubmit={confirmSignUp}>
                                    <Grid container direction="column" spacing={2}>
                                        <Grid item>
                                            <Input
                                                fullWidth
                                                onChange={handleUpdate}
                                                placeholder="Authorization Code"
                                                name="authCode"
                                                value={state.authCode}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Button variant="contained" color="primary" type="submit">
                                                <span>Confirm Sign Up</span>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Signup
