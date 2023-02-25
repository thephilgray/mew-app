import React, { ReactElement } from 'react'

interface Props {
    condition: boolean
    fallbackContent?: ReactElement | null
}

const If = (props: React.PropsWithChildren<Props>): ReactElement | null => {
    if (props.condition) {
        return <>{props.children}</>
    }
    if (props.fallbackContent) {
        return props.fallbackContent
    }
    return null
}

export default If
