import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Group } from '../../constants'
import AuthenticateForm from './AuthenticateForm'
import { navigate } from 'gatsby'
import { useAuthLoading, useIsAdmin, useUser, useUserInAtLeastOneOfTheseGroups, useViewAdmin } from '../../auth/hooks'
import Loading from '../Loading'
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
    const isAdmin = useIsAdmin()
    const [viewAdmin] = useViewAdmin()
    const adminOnlyView = groups && groups.length === 1 && groups.includes(Group.admin)

    const [authStage, setAuthStage] = React.useState(1)

    if (authLoading && !user) {
        return <Loading />
    }

    if (!user) {
        return <AuthenticateForm />
    }

    if (userNotInOneOfTheseGroups) {
        navigate('/app/')
        return null
    }

    if (adminOnlyView && isAdmin && !viewAdmin) {
        return <p>Only admins can view this page. Non-admins are redirected.</p>
    }


    return <Component {...rest} />
}

export default PrivateRoute
