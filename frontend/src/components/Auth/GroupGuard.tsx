import React, { ReactElement } from 'react'
import { useUserInAtLeastOneOfTheseGroups } from '../../auth/hooks'
import { Group } from '../../constants'
import If from '../If'

interface GroupGuardProps {
    groups?: Group[]
    fallbackContent?: ReactElement | null
}

function GroupGuard(props: React.PropsWithChildren<GroupGuardProps>): ReactElement | null {
    const { groups = [], fallbackContent = null } = props
    const condition = useUserInAtLeastOneOfTheseGroups(groups)
    return <If condition={condition} fallbackContent={fallbackContent} {...props} />
}

export default GroupGuard
