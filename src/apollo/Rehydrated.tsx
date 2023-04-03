import React, { useEffect, useState } from 'react'
import { useApolloClient } from '@apollo/react-hooks'

const Rehydrated: React.FC = ({ children = null }) => {
    const client = useApolloClient()
    const [rehydrated, setRehydrated] = useState(false)
    useEffect(() => {
        ;(async () => {
            await (client as any).hydrated()
            setRehydrated(true)
        })()
    }, [client])
    return (
        <div className={`awsappsync ${rehydrated ? 'awsappsync--rehydrated' : 'awsappsync--rehydrating'}`}>
            {rehydrated ? children : <span>Loading...</span>}
        </div>
    )
}

export default Rehydrated
