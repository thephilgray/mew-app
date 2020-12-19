import React, { useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { setUser, isLoggedIn } from '../utils/auth'
import Error from './Error'
import { Auth } from 'aws-amplify'
import { Button, Input } from '@material-ui/core'

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
            const userInfo = {
                ...user.attributes,
                username: user.username,
            }
            setUser(userInfo)
            navigate('/app/home')
        } catch (err) {
            setState((prevState) => ({ ...prevState, error: err }))
        }
    }

    if (isLoggedIn()) navigate('/app/profile')
    return (
        <div>
            <h1>Sign In</h1>
            {state.error && <Error errorMessage={state.error} />}
            <form onSubmit={login}>
                <Input onChange={handleUpdate} placeholder="Username" name="username" value={state.username} />
                <Input
                    onChange={handleUpdate}
                    placeholder="Password"
                    name="password"
                    value={state.password}
                    type="password"
                />
                <Button type="submit" variant="contained" color="primary">
                    <span>Sign In</span>
                </Button>
            </form>
            <Link to="/app/signup">Sign Up</Link>
            <br />
        </div>
    )
}

export default Login
