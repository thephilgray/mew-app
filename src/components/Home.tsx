import { Container, Typography } from '@material-ui/core'
import * as React from 'react'
import Assignments from './Assignments/Assignments'

const Home: React.FC = () => {
    return (
        <Container>
            <Typography variant="h5" component="h2">
                Assignments
            </Typography>
            <Assignments />
        </Container>
    )
}

export default Home
