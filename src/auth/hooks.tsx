import React from 'react'
import { Auth, API } from 'aws-amplify'
import { SignInInput, SignUpInput, AnswerCustomChallengeInput } from './types'
import { AuthContext } from './auth.context'
import { Group } from '../constants'
import { CognitoUser } from '@aws-amplify/auth'
import { Profile } from '../API'
import { getProfile } from '../graphql/queries'
import { usePrevious } from 'react-use'

export function useAuth() {
    const [user, setUser] = React.useState<CognitoUser | null>(null)
    const [cognitoUser, setCognitoUser] = React.useState<CognitoUser | null>(null)
    const [userProfile, setUserProfile] = React.useState<Profile | null>(null)
    const previousUser = usePrevious(user)

    React.useEffect(() => {
        let active = true

        const check = async () => {
            try {
                const user = await Auth.currentAuthenticatedUser()
                if (active) {
                    setUser(user)
                }
            } catch (error) {
                if (active) {
                    setUser(null)
                    setCognitoUser(null)
                    setUserProfile(null)
                }
            }
        }

        check()

        return () => {
            active = false
        }
    }, [setUser])

    React.useEffect(() => {
        if (!previousUser && user) {
            const fetchUserProfile = async () => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                const email = user?.username
                let profile
                if (email) {
                    try {
                        const getProfileResult = await API.graphql({ query: getProfile, variables: { email } })
                        profile = getProfileResult?.data?.getProfile || null
                        setUserProfile(profile)
                    } catch (error) {
                        // TODO
                        console.log(error)
                    }
                }
            }

            fetchUserProfile()
        }
    }, [previousUser, user])

    const signIn = React.useCallback(
        async ({ email }: SignInInput) => {
            setCognitoUser(await Auth.signIn(email))
        },
        [setCognitoUser],
    )

    const answerCustomChallenge = React.useCallback(
        async ({ answer }: AnswerCustomChallengeInput) => {
            await Auth.sendCustomChallengeAnswer(cognitoUser, answer)

            // It we get here, the answer was sent successfully,
            // but it might have been wrong (1st or 2nd time)
            // So we should test if the user is authenticated now
            try {
                // This will throw an error if the user is not yet authenticated:
                const user = await Auth.currentAuthenticatedUser()
                setUser(user)
            } catch (err) {
                console.log('Apparently the user did not enter the right code')
            }
        },
        [setUser, cognitoUser],
    )

    const signOut = React.useCallback(async () => {
        await Auth.signOut()
        setUser(null)
        setCognitoUser(null)
    }, [setUser, setCognitoUser])

    const deleteUser = React.useCallback(async () => {
        user?.deleteUser((error?: Error) => {
            if (error) throw error

            setUser(null)
            setCognitoUser(null)
        })
    }, [user, setUser, setCognitoUser])

    return { user, signIn, signOut, deleteUser, answerCustomChallenge, userProfile }
}

export function useUser() {
    const { user } = React.useContext(AuthContext)
    if (!user) return null

    // See https://github.com/aws-amplify/amplify-js/issues/4927
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return user.attributes
}

export function useProfile() {
    const { userProfile } = React.useContext(AuthContext)
    if (!userProfile) return null
    return userProfile
}

export function useSignIn() {
    return React.useContext(AuthContext).signIn
}

export function useAnswerCustomChallenge() {
    return React.useContext(AuthContext).answerCustomChallenge
}

export function useSignOut() {
    return React.useContext(AuthContext).signOut
}

function getRandomString(bytes: number) {
    const randomValues = new Uint8Array(bytes)
    window.crypto.getRandomValues(randomValues)
    return Array.from(randomValues).map(intToHex).join('')
}

function intToHex(nr: number) {
    return nr.toString(16).padStart(2, '0')
}

export function useSignUp() {
    return async function signUp({ name, email }: SignUpInput) {
        await Auth.signUp({
            username: email,
            password: getRandomString(30),
            attributes: {
                name,
            },
        })
    }
}

export function useDeleteUser() {
    return React.useContext(AuthContext).deleteUser
}

export function useUserInAtLeastOneOfTheseGroups(groups: Group[]): boolean {
    const { user: userFromContext } = React.useContext(AuthContext)
    const user = userFromContext?.attributes
    const userGroups = userFromContext?.signInUserSession?.accessToken?.payload['cognito:groups']
    return !!(
        user &&
        userGroups &&
        groups.some(
            (group) =>
                userGroups && userGroups.map((userGroup = '') => userGroup.toLowerCase()).includes(group.toLowerCase()),
        )
    )
}

export function useUserHasMembership(workshopId: string): boolean {
    const { userProfile } = React.useContext(AuthContext)
    return !!(
        userProfile &&
        userProfile.memberships &&
        userProfile.memberships.items &&
        userProfile.memberships.items.some((membership) => membership && membership.workshopId === workshopId)
    )
}
