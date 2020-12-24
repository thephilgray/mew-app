import * as React from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'

import { logout, isLoggedIn } from '../../utils/auth'
import { Auth } from 'aws-amplify'
import { Button } from '@material-ui/core'

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle = '' }) => (
    <div
        style={{
            background: 'rebeccapurple',
            marginBottom: '1.45rem',
        }}
    >
        <div
            style={{
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}
        >
            <h1 style={{ margin: 0 }}>
                <Link to="/" style={styles.headerTitle}>
                    {siteTitle}
                </Link>
            </h1>
            {isLoggedIn() && (
                <nav>
                    <ul>
                        <li>
                            <Button
                                onClick={() =>
                                    Auth.signOut()
                                        .then(() => logout(() => navigate('/app/login')))
                                        // tslint:disable-next-line: no-console
                                        .catch((err) => console.log('error:', err))
                                }
                                style={styles.link}
                            >
                                Sign Out
                            </Button>
                        </li>
                        <li>
                            <Link to="/app/profile" style={styles.link}>
                                View profile
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </div>
    </div>
)

const styles = {
    headerTitle: {
        color: 'white',
        textDecoration: 'none',
    },
    link: {
        cursor: 'pointer',
        color: 'white',
        textDecoration: 'underline',
    },
}

export default Header
