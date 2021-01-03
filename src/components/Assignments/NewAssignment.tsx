import React from 'react'
import { navigate } from 'gatsby'
import { Typography } from '@material-ui/core'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import MultimediaPostForm, { Inputs } from '../Form/MultimediaPostForm'
import { getCurrentUser } from '../../utils/auth'

const CREATE_ASSIGNMENT = gql`
    mutation MyMutation(
        $title: String!
        $startDate: AWSDateTime!
        $required: Boolean!
        $owner: ID!
        $endDate: AWSDateTime!
        $details: String
    ) {
        createAssignment(
            input: {
                owner: $owner
                title: $title
                startDate: $startDate
                required: $required
                endDate: $endDate
                details: $details
            }
        ) {
            id
        }
    }
`

const NewAssignment: React.FC = () => {
    const [createAssignment, { loading, error, data }] = useMutation(CREATE_ASSIGNMENT)
    console.log({ loading, error, data })
    const { sub = '' } = getCurrentUser()

    const callback = ({ startDate, endDate, title, description, required = true }: Inputs) => {
        console.log({ startDate, endDate, title, description, owner: sub })
        return createAssignment({
            variables: {
                owner: sub,
                startDate,
                endDate,
                title,
                details: description,
                required,
            },
        }).then(() => navigate('/app/'))
    }
    return (
        <div>
            <Typography variant="h5" component="h2">
                New Assignment
            </Typography>
            <MultimediaPostForm dateInputs headerImage editor callback={callback} />
        </div>
    )
}

export default NewAssignment
