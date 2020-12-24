import React from 'react'
import { workshops } from '../../data'
import { Link } from 'gatsby'
import { compareDesc } from 'date-fns'
import { Button, Card, CardContent, CardHeader, Grid } from '@material-ui/core'

const Workshops = (): JSX.Element => {
    return (
        <>
            <Grid container>
                <Grid item xs={12} style={{ textAlign: 'right' }}>
                    <Button color="primary" aria-label="outlined primary button group">
                        <Link to={`/app/workshops/new`}>New Workshop</Link>
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                {workshops
                    .sort((a, b) => compareDesc(a.dateEnrolled, b.dateEnrolled))
                    .map(({ id: workshopId, title }) => (
                        <Grid item xs={12} md={6} key={workshopId}>
                            <Link to={`/app/${workshopId}`}>
                                <Card>
                                    <CardHeader title={title} />
                                    <CardContent>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, a
                                            asperiores soluta consectetur suscipit voluptatum ut reiciendis, minima
                                            voluptatibus, minus reprehenderit quo necessitatibus at consequuntur
                                            tempore! Pariatur delectus nobis dolore.
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))}
            </Grid>
        </>
    )
}

export default Workshops
