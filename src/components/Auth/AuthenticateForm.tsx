import React, { useState } from 'react'
import { Button, Grid, Input, Link, Typography } from '@mui/material'
import { RouteComponentProps } from '@reach/router'
import { useAnswerCustomChallenge, useAuthStage, useSignIn, useSignUp } from '../../auth/hooks'

const AuthenticateForm: React.FC<RouteComponentProps> = (): JSX.Element => {
    const signIn = useSignIn()
    const signup = useSignUp()
    const answerCustomChallenge = useAnswerCustomChallenge()
    const [authStage, setAuthStage] = useAuthStage()

    const [state, setState] = useState({
        username: ``,
        name: ``,
        error: null,
        stage: 1, // no longer using
        verifyCode: '',
    })

    const handleUpdate: React.ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.persist()
        setState((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
    }

    const loginHandler = async () => {
        const { username } = state
        try {
            // await signIn(username)
            await signIn({ email: username })
            setState((prevState) => ({ ...prevState, stage: 2, error: null }))
            setAuthStage(2)
        } catch (err) {
            setState((prevState) => ({ ...prevState, error: err }))
        }
    }

    const login: React.FormEventHandler = async (event: React.FormEvent<HTMLInputElement>): Promise<void> => {
        event.preventDefault()
        await loginHandler()
    }
    const verifySignin: React.FormEventHandler = async (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        const { verifyCode } = state
        try {
            await answerCustomChallenge({ answer: verifyCode })
        } catch (err) {
            console.log({ err })
            setState((prevState) => ({ ...prevState, error: err }))
        }
    }

    const signUp: React.FormEventHandler = async (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault()
        const { username, name } = state
        try {
            await signup({ email: username.toLowerCase(), name })
            await loginHandler()
        } catch (err) {
            setState((prevState) => ({ ...prevState, error: err }))
        }
    }

    const userNotFound = state.error?.code === 'UserNotFoundException'
    const userAlreadyExists = state.error?.code === 'UsernameExistsException'

    const signupLink = (
        <Link
            component="button"
            variant="body2"
            onClick={(e) => {
                e.preventDefault()
                setState((prevState) => ({ ...prevState, stage: 0, error: null }))
                setAuthStage(0)
            }}
            underline="hover">
            Sign up?
        </Link>
    )

    const signinLink = (
        <Link
            component="button"
            variant="body2"
            onClick={(e) => {
                e.preventDefault()
                setState((prevState) => ({ ...prevState, stage: 1, error: null }))
                setAuthStage(1)
            }}
            underline="hover">
            {authStage === 2 ? `Try again?` : `Sign in?`}
        </Link>
    )

    return (
        <Grid container spacing={0} direction="row" justifyContent="center">
            <Grid item xs={12} md={6}>
                <Grid container>
                    <Grid item xs={12}>
                        <h1>{authStage === 0 ? 'Sign Up' : 'Sign In'}</h1>
                    </Grid>
                    <Grid item xs={12}>
                        {authStage === 0 && userAlreadyExists && (
                            <Typography>User already exists. Try signing in.</Typography>
                        )}
                        {authStage === 1 && userNotFound && (
                            <Typography>User not found. Trying signing up.</Typography>
                        )}
                        {state.error && ![userAlreadyExists, userNotFound].some(Boolean) && (
                            <Typography>
                                Something went wrong. Error code: {state.error?.code}. {signinLink}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        {authStage < 2 && (
                            <form>
                                <Grid container direction="column" spacing={2}>
                                    {authStage === 0 && (
                                        <>
                                            <Grid item>
                                                <Typography>
                                                    If you are a current member, you should already be able to sign in
                                                    using your email address. Signing up is currently disabled.
                                                </Typography>
                                            </Grid>
                                            <Grid item>
                                                <Input
                                                    disabled
                                                    fullWidth
                                                    onChange={handleUpdate}
                                                    placeholder="Name"
                                                    name="name"
                                                    value={state.name}
                                                />
                                            </Grid>
                                        </>
                                    )}
                                    <Grid item>
                                        <Input
                                            disabled={authStage === 0}
                                            fullWidth
                                            onChange={handleUpdate}
                                            placeholder="Username"
                                            name="username"
                                            value={state.username}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            disabled={authStage === 0}
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            onClick={authStage === 0 ? signUp : login}
                                        >
                                            <span>{authStage === 0 ? 'Sign Up' : 'Sign In'}</span>
                                        </Button>
                                        <span style={{ marginLeft: '1em' }}>
                                            {authStage === 0 ? signinLink : signupLink}
                                        </span>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                        {authStage === 2 && (
                            <form onSubmit={verifySignin}>
                                <Grid container direction="column" spacing={2}>
                                    <Grid item>
                                        <Typography>Check your email for a secret login code.</Typography>
                                        <Input
                                            fullWidth
                                            onChange={handleUpdate}
                                            placeholder="Verification Code"
                                            name="verifyCode"
                                            value={state.verifyCode}
                                        />
                                    </Grid>
                                    <Grid item>
                                        <Button variant="contained" color="primary" type="submit">
                                            <span>Verify</span>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default AuthenticateForm
