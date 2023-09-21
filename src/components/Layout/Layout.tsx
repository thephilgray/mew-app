import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import AppHeader from './AppHeader'
import { Box } from '@mui/material'
import { useUser } from '../../auth/hooks'
import SideNav, { DrawerHeader } from './SideNav'
import { LayoutProvider, useLayout } from './layout.context'
import If from '../If'
import './layout.css'
import { createBreakpoint } from 'react-use'

export const useBreakpoint = createBreakpoint({ L: 1200, S: 600, XS: 0 })

const InnerLayout = ({ children, siteTitle }) => {
    const user = useUser()
    const [drawerOpen] = useLayout()
    const breakpoint = useBreakpoint()
    const lg = breakpoint === "L"

    return <Box sx={{ display: { xs: 'block', lg: 'flex' }, flexWrap: { lg: 'wrap' } }}>
        <AppHeader siteTitle={siteTitle} />
        <If condition={!!user}>
            <SideNav />
        </If>
        <Box
            component="main"
            sx={{
                margin: { lg: '0 auto' },
                marginLeft: !!user ? { xs: drawerOpen ? '240px' : '57px', sm: drawerOpen ? '240px' : '65px' } : 0,
                width: { xs: drawerOpen ? '100%' : 'auto', lg: 'calc(100% - 240px)' },
                maxWidth: { lg: !!user ? 'none' : '960px' },
                py: { xs: 3, sm: 3 },
                px: { xs: 1, sm: 1 },
                padding: { lg: '1rem 1.0875rem 1.45rem' },
            }}
        >
            <If condition={!lg}>
                <DrawerHeader />
            </If>
            {children}
        </Box>
    </Box >
}

const Layout: React.FC = ({ children = [] }) => {
    return <StaticQuery
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
                <LayoutProvider>
                    <InnerLayout siteTitle={d.site.siteMetadata.title}>
                        {children}
                    </InnerLayout>
                </LayoutProvider>
            </>
        )}
    />
}

export default Layout
