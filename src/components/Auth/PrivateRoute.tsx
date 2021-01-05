import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { isLoggedIn } from '../../utils/auth'

interface PrivateRouteProps extends RouteComponentProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element | null => {
    // eslint-disable-next-line react/prop-types
    const { component: Component, ...rest } = props

    if (!isLoggedIn()) {
        if (typeof window !== 'undefined') {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            window.location = '/signin'
        }

        return null
    }
    return <Component {...rest} />
}

export default PrivateRoute
