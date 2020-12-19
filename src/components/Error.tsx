// https://github.com/wesbos/dump
import * as React from 'react'

const Error: React.FC<{ [prop: string]: unknown }> = (props) => (
    <div>
        {Object.entries(props).map(([err, val]) => (
            <pre key={err}>
                <strong>{err}: </strong>
                {JSON.stringify(val, null, ' ')}
                <br />
                <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-attributes.html">
                    AWS Cognito User Pool documentation.
                </a>
            </pre>
        ))}
    </div>
)

export default Error
