import * as React from 'react'
import Workshops from './Workshops/Workshops'

const Home: React.FC = () => (
    <div>
        <h1>Workshops</h1>
        <Workshops />
        {/* <h2>Assignments Due</h2>
        <p>A feed of upcoming deadlines</p>
        <h2>Feed</h2>
        <p>A feed of activity from all workshops the user is currently enrolled in</p> */}
    </div>
)

export default Home
