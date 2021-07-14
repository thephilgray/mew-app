/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { User } from './utils'

const AuthContext = React.createContext({})

export const AuthProvider = ({ children, user }: { children: React.ReactNode; user: User }) => {
    const [currentUser, setCurrentUser] = React.useState(user)
    return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>
}

export const useAuth = () => React.useContext(AuthContext)

export const useHasRoles = (roles: [string?] = []): boolean => {
    const { currentUser } = useAuth()
    return roles.some((role) => currentUser?.groups?.includes(role))
}

export const RoleGuard = (props: { roles: [string?]; children: JSX.Element }) => {
    const { roles, children } = props
    const hasRole = useHasRoles(roles)
    return hasRole ? children : null
}
