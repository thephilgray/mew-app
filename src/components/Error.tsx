// https://github.com/wesbos/dump
import * as React from 'react'

const Error: React.FC<{ [prop: string]: unknown }> = (props) => (
    <div>
        {Object.entries(props).map(([err, val]) => (
            <pre key={err}>{JSON.stringify(val, null, ' ')}</pre>
        ))}
    </div>
)

export default Error
