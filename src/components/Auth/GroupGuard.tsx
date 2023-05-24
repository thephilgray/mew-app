import React, { ReactElement } from 'react'
import { useIsAdmin, useUserInAtLeastOneOfTheseGroups, useViewAdmin } from '../../auth/hooks'
import { Group } from '../../constants'
import If from '../If'

interface GroupGuardProps {
    groups?: Group[]
    fallbackContent?: ReactElement | null
}

function GroupGuard(props: React.PropsWithChildren<GroupGuardProps>): ReactElement | null {
    const { groups = [], fallbackContent = null } = props
    const isAdmin = useIsAdmin()
    let condition = useUserInAtLeastOneOfTheseGroups(groups)
    // override for admins to easily switch between admin/member view even if not a member
    if (groups.includes(Group.admin) && isAdmin) {
        const [viewAdmin] = useViewAdmin()
        condition = Boolean(viewAdmin)

        if (groups.includes(Group.member)) {
            condition = true
        }
    }

    return <If condition={condition} fallbackContent={fallbackContent} {...props} />
}

export default GroupGuard
