// https://github.com/wesbos/dump
import * as React from 'react'

const Error: React.FC<{ [prop: string]: unknown }> = (props) => {
    if (props.errorMessage && typeof props.errorMessage === 'string') {
        return <p style={{ color: 'red' }}>{props.errorMessage}</p>
    } else {
        return (
            <div>
                {Object.entries(props).map(([err, val]) => (
                    <pre key={err}>{JSON.stringify(val, null, ' ')}</pre>
                ))}
            </div>
        )
    }
}

export default Error
