const isBrowser = typeof window !== `undefined`

export type User = {
    email?: string
    email_verified?: boolean
    name?: string
    sub?: string
    groups?: [string?]
}

export const setUser = (user: User): void => {
    if (typeof window !== 'undefined') {
        window.localStorage.gatsbyUser = JSON.stringify(user)
    }
}

const getUser = (): User => {
    if (typeof window !== 'undefined' && window.localStorage.gatsbyUser) {
        const user = JSON.parse(window.localStorage.gatsbyUser)
        return user ? user : {}
    }
    return {}
}

export const isAdmin = (): boolean => {
    if (!isBrowser) return false
    const user = getUser()
    return !!user.groups?.includes('Admin')
}

export const isLoggedIn = (): boolean => {
    if (!isBrowser) return false
    const user = getUser()
    return !!user.sub
}

export const getCurrentUser = (): User => getUser()

export const logout = (callback: () => unknown): void => {
    if (!isBrowser) return
    setUser({})
    callback()
}
