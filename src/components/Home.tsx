import { Container, Typography } from '@mui/material'
import * as React from 'react'
import { Group } from '../constants'
import Assignments from './Assignments/Assignments'
import GroupGuard from './Auth/GroupGuard'

const Home: React.FC = () => {
    const notInGroupContent = <p>You do not have access to this content.</p>
    return (
        <GroupGuard groups={[Group.admin, Group.member]} fallbackContent={notInGroupContent}>
            <Container>
                <Typography variant="h5" component="h2">
                    Assignments
                </Typography>
                <Assignments />
            </Container>
        </GroupGuard>
    )
}

export default Home
