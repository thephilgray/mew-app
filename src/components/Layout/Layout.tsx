import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import Header from './header'

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
                <Header siteTitle={d.site.siteMetadata.title} />
                <ThemeProvider theme={theme}>
                    <div
                        style={{
                            margin: '0 auto',
                            maxWidth: 960,
                            padding: '0px 1.0875rem 1.45rem',
                            paddingTop: 0,
                        }}
                    >
                        {children}
                    </div>
                </ThemeProvider>
            </>
        )}
    />
)

export default Layout
