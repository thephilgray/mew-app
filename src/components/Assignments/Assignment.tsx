import React from 'react'
import gql from 'graphql-tag'
import Submissions from '../Submissions/Submissions'
import { useQuery } from '@apollo/react-hooks'
import Error from '../Error'
import { Typography } from '@material-ui/core'

const QUERY_ASSIGNMENT = gql`
    query MyQuery($id: ID!) {
        getAssignment(id: $id) {
            id
            title
            details
            startDate
            endDate
            required
        }
    }
`

const Assignment: React.FC<{ assignmentId: string }> = ({ assignmentId = '' }): JSX.Element => {
    const { loading, error, data } = useQuery(QUERY_ASSIGNMENT, { variables: { id: assignmentId } })

    if (error) {
        return <Error errorMessage={error} />
    }
    if (loading) {
        return <p>Loading....</p>
    }
    console.log({ loading, error, data })
    return (
        <div>
            <Typography variant="h5" component="h2">
                {data.getAssignment.title}
            </Typography>
            <Typography variant="h6" component="h3">
                Details
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: data.getAssignment.details }} />
            <Submissions assignmentId={assignmentId} />
            {/* <h2>Comments</h2>
            <p>A feed of general comments about the assignment as well as comments about individual assignments</p> */}
        </div>
    )
}

export default Assignment
