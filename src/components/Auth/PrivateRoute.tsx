import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Group } from '../../constants'
import AuthenticateForm from './AuthenticateForm'
import { navigate } from 'gatsby'
import { useUser, useUserInAtLeastOneOfTheseGroups } from '../../auth/hooks'

interface PrivateRouteProps extends RouteComponentProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any
    groups?: Group[]
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element | null => {
    // eslint-disable-next-line react/prop-types
    const { component: Component, groups, ...rest } = props

    const user = useUser()

    if (!user) {
        return <AuthenticateForm />
    }

    if (groups && !useUserInAtLeastOneOfTheseGroups(groups)) {
        navigate('/app/')
        return null
    }

    return <Component {...rest} />
}

export default PrivateRoute
