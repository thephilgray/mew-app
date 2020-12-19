import React, { useState } from 'react'
import { navigate, RouteComponentProps } from '@reach/router'
import { Link } from 'gatsby'
import Error from './Error'
import { Auth } from 'aws-amplify'
import { Input, Button } from '@material-ui/core'

const initialState = {
    username: ``,
    password: ``,
    email: '',
    authCode: '',
    stage: 0,
    error: '',
}

const Signup: React.FC<RouteComponentProps> = (): JSX.Element => {
    const [state, setState] = useState(initialState)
    const handleUpdate = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setState((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
    }
    const signUp: React.FormEventHandler = async (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        const { username, password, email } = state
        try {
            await Auth.signUp({ username, password, attributes: { email } })
            setState((prevState) => ({ ...prevState, stage: 1 }))
        } catch (err) {
            setState((prevState) => ({ ...prevState, error: err }))
        }
    }
    const confirmSignUp: React.FormEventHandler = async (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        const { username, authCode } = state
        try {
            await Auth.confirmSignUp(username, authCode)
            alert('Successfully signed up!')
            navigate('/app/login')
        } catch (err) {
            setState((prevState) => ({ ...prevState, error: err }))
        }
    }
    return (
        <div>
            <h1>Sign Up</h1>
            {state.stage === 0 && (
                <form onSubmit={signUp}>
                    {state.error && <Error errorMessage={state.error} />}
                    <Input onChange={handleUpdate} placeholder="Username" name="username" value={state.username} />
                    <Input
                        onChange={handleUpdate}
                        placeholder="Password"
                        name="password"
                        value={state.password}
                        type="password"
                    />
                    <Input onChange={handleUpdate} placeholder="Email" name="email" value={state.email} />
                    <Button variant="contained" color="primary" type="submit">
                        Sign Up
                    </Button>
                </form>
            )}
            {state.stage === 1 && (
                <form onSubmit={confirmSignUp}>
                    {state.error && <Error errorMessage={state.error} />}
                    <Input
                        onChange={handleUpdate}
                        placeholder="Authorization Code"
                        name="authCode"
                        value={state.authCode}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        <span>Confirm Sign Up</span>
                    </Button>
                </form>
            )}
            <Link to="/app/login">Sign In</Link>
        </div>
    )
}

export default Signup
