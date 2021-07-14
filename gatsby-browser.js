import Auth from '@aws-amplify/auth'
import { setUser } from './src/auth/utils'
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const onRouteUpdate = () => {
    Auth.currentAuthenticatedUser()
        .then((user) => {
            const userInfo = {
                ...user.attributes,
                groups: user.signInUserSession.accessToken.payload['cognito:groups'],
            }

            setUser(userInfo)
        })
        // eslint-disable-next-line no-unused-vars
        .catch(() => {
            // eslint-disable-next-line no-undef
            window.localStorage.setItem('gatsbyUser', null)
        })
}

export { wrapRootElement } from './src/apollo/wrap-root-element'
