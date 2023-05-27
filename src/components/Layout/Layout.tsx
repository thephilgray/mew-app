import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Theme from './Theme'
import AppHeader from './AppHeader'
import AdminViewToggle from '../AdminViewToggle'

const Layout: React.FC = ({ children = [] }) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={(d) => (
            <>
                <Helmet
                    title={d.site.siteMetadata.title}
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                    <html lang="en" />
                </Helmet>
                <Theme>
                    <AppHeader siteTitle={d.site.siteMetadata.title} />
                    <div
                        style={{
                            margin: '0 auto',
                            maxWidth: 960,
                            padding: '1rem 1.0875rem 1.45rem',
                        }}
                    >
                        <AdminViewToggle />
                        {children}
                    </div>
                </Theme>
            </>
        )}
    />
)

export default Layout
