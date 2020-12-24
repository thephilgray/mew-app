import React from 'react'
import { navigate } from '@reach/router'
import { isLoggedIn } from '../../utils/auth'
import { RouteComponentProps } from '@reach/router'

interface PrivateRouteProps extends RouteComponentProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
    // eslint-disable-next-line react/prop-types
    const { component: Component, ...rest } = props

    if (!isLoggedIn()) {
        navigate(`/app/login`)
    }
    return <Component {...rest} />
}

export default PrivateRoute
