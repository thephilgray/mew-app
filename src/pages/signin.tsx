import React, { useState } from 'react'
import { Button, Grid, Input } from '@material-ui/core'
import { Auth } from 'aws-amplify'
import { Link, navigate } from 'gatsby'
import { RouteComponentProps } from '@reach/router'
import { isLoggedIn, setUser } from '../utils/auth'
import Error from '../components/Error'
import Layout from '../components/Layout/Layout'

const Login: React.FC<RouteComponentProps> = (): JSX.Element => {
    const [state, setState] = useState({
        username: ``,
        password: ``,
        error: ``,
    })

    const handleUpdate: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.persist()
        setState((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
    }

    const login: React.FormEventHandler = async (event: React.FormEvent<HTMLInputElement>): Promise<void> => {
        event.preventDefault()
        const { username, password } = state
        try {
            await Auth.signIn(username, password)
            const user = await Auth.currentAuthenticatedUser()
            const userInfo = user.attributes
            setUser(userInfo)
            navigate('/app/')
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
                            <h1>Sign In</h1>
                            {state.error && <Error errorMessage={state.error} />}
                        </Grid>
                        <Grid item xs={12}>
                            <form onSubmit={login}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <Input
                                            fullWidth
                                            onChange={handleUpdate}
                                            placeholder="Username"
                                            name="username"
                                            value={state.username}
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
                                        <Button type="submit" variant="contained" color="primary">
                                            <span>Sign In</span>
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/signup">Signup</Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default Login
