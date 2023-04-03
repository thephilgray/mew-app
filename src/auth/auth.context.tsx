import React from 'react'
import { CognitoUser } from '@aws-amplify/auth'

import { useAuth } from './hooks'
import { AnswerCustomChallengeInput, SignInInput } from './types'
import { Profile } from '../API'

interface AuthState {
    user: CognitoUser | null
    userProfile: Profile | null
    signIn(input: SignInInput): Promise<void>
    answerCustomChallenge(input: AnswerCustomChallengeInput): Promise<void>
    signOut(): Promise<void>
    deleteUser(): Promise<void>
}

export const AuthContext = React.createContext<AuthState>({
    user: null,
    userProfile: null,
    signIn: async (input) => { },
    answerCustomChallenge: async (input) => { },
    signOut: async () => { },
    deleteUser: async () => { },
})

interface AuthProps {
    children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProps) => {
    const auth = useAuth()

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}
