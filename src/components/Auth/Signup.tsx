import React, { useState } from 'react'
import { navigate, RouteComponentProps } from '@reach/router'
import { Link } from 'gatsby'
import Error from '../Error'
import { Auth } from 'aws-amplify'
import { Input, Button } from '@material-ui/core'

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
                    <Input onChange={handleUpdate} placeholder="Name" name="name" value={state.name} />
                    <Input onChange={handleUpdate} placeholder="Email" name="email" value={state.email} />
                    <Input
                        onChange={handleUpdate}
                        placeholder="Password"
                        name="password"
                        value={state.password}
                        type="password"
                    />
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
