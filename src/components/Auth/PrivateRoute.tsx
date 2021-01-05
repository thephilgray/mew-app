import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { navigate } from 'gatsby'
import { isLoggedIn } from '../../utils/auth'

interface PrivateRouteProps extends RouteComponentProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element | null => {
    // eslint-disable-next-line react/prop-types
    const { component: Component, ...rest } = props

    if (!isLoggedIn()) {
        navigate(`/signin`)
        return null
    }
    return <Component {...rest} />
}

export default PrivateRoute
