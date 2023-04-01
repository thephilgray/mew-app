import { RouteComponentProps } from '@reach/router'
import React from 'react'

const NotFound: React.FC<RouteComponentProps> = () => {
    return (
        <div>
            <h1>NOT FOUND</h1>
            <p>That page does not exist.</p>
        </div>
    )
}

export default NotFound
