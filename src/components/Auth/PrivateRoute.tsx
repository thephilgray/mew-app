import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Group } from '../../constants'
import AuthenticateForm from './AuthenticateForm'
import { navigate } from 'gatsby'
import { useAuthLoading, useUser, useUserInAtLeastOneOfTheseGroups } from '../../auth/hooks'
import { CircularProgress } from '@mui/material'

interface PrivateRouteProps extends RouteComponentProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: any
    groups?: Group[]
}

const PrivateRoute = (props: PrivateRouteProps): JSX.Element | null => {
    // eslint-disable-next-line react/prop-types
    const { component: Component, groups, ...rest } = props

    const user = useUser()
    const authLoading = useAuthLoading()
    const userNotInOneOfTheseGroups = groups && !useUserInAtLeastOneOfTheseGroups(groups);

    const [authStage, setAuthStage] = React.useState(1)

    if (authLoading && !user) {
        return <CircularProgress />
    }

    if (!user) {
        return <AuthenticateForm />
    }

    if (userNotInOneOfTheseGroups) {
        navigate('/app/')
        return null
    }

    return <Component {...rest} />
}

export default PrivateRoute
