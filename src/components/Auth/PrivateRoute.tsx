import React from 'react'
import { Redirect, RouteComponentProps } from '@reach/router'
import { isLoggedIn } from '../../auth/utils'
import { useAuth } from '../../auth/auth.context'

interface PrivateRouteProps extends RouteComponentProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any
    roles?: string[]
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element | null => {
    // eslint-disable-next-line react/prop-types
    const { component: Component, roles, ...rest } = props
    const { currentUser } = useAuth()

    if (!isLoggedIn()) {
        if (typeof window !== 'undefined') {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            window.location = '/signin'
        }

        return null
    }

    if (roles && !roles.some((role) => currentUser?.groups?.includes(role))) {
        return <Redirect to="/app" />
    }

    return <Component {...rest} />
}

export default PrivateRoute
