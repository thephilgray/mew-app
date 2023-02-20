import React, { ReactElement } from 'react'
import { useAsyncFn } from 'react-use'
import { useUserHasMembership } from '../../auth/hooks'
import If from '../If'

interface MembershipGuardProps {
    workshopId: string
    fallbackContent?: ReactElement | null
}

function MembershipGuard(props: React.PropsWithChildren<MembershipGuardProps>): ReactElement | null {
    const { workshopId = '', fallbackContent = null } = props
    const [condition] = useAsyncFn(async () => {
        return useUserHasMembership(workshopId)
    }, [workshopId])
    if (condition.loading) return null
    return condition.value ? (
        <If condition={condition.value} fallbackContent={fallbackContent} {...props} />
    ) : (
        fallbackContent
    )
}

export default MembershipGuard
