const isBrowser = typeof window !== `undefined`

export type User = {
    email?: string
    email_verified?: boolean
    phone_number_verified?: boolean
    sub?: string
    username?: string
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
    return !!user.username
}

export const getCurrentUser = (): User | false => isBrowser && getUser()

export const logout = (callback: () => unknown): void => {
    if (!isBrowser) return
    setUser({})
    callback()
}
