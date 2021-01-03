const isBrowser = typeof window !== `undefined`

export type User = {
    email?: string
    email_verified?: boolean
    name?: string
    sub?: string
}

export const setUser = (user: User): void => {
    window.localStorage.gatsbyUser = JSON.stringify(user)
}

const getUser = (): User => {
    if (window.localStorage.gatsbyUser) {
        const user = JSON.parse(window.localStorage.gatsbyUser)
        return user ? user : {}
    }
    return {}
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
