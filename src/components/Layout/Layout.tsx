import * as React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import AppHeader from './AppHeader'
import AdminViewToggle from '../AdminViewToggle'
import { Box, Grid } from '@mui/material'
import { useUser } from '../../auth/hooks'
import SideNav, { DrawerHeader } from './SideNav'
import { LayoutProvider, useLayout } from './layout.context'
import If from '../If'
import './layout.css'
import { createBreakpoint } from 'react-use'

export const useBreakpoint = createBreakpoint({ L: 1200, S: 600, XS: 0 })

const SmallScreenLayout = ({ siteTitle, children }) => {

    const user = useUser()
    const [drawerOpen] = useLayout()
    return <Box style={{ display: drawerOpen ? 'block' : 'flex' }}>
        <AppHeader siteTitle={siteTitle} />
        <If condition={!!user}>
            <SideNav />
        </If>
        <Box
            component="main"
            sx={{ flexGrow: 1, py: 3, px: 1 }}
        >
            <DrawerHeader />
            <AdminViewToggle />
            {children}
        </Box>
    </Box>

}


const Layout: React.FC = ({ children = [] }) => {
    const user = useUser()
    const breakpoint = useBreakpoint()
    const lg = breakpoint === "L"

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
                    <If condition={lg} fallbackContent={<SmallScreenLayout siteTitle={d.site.siteMetadata.title} children={children} />}>
                        <Grid container>
                            <AppHeader siteTitle={d.site.siteMetadata.title} />
                            <If condition={!!user}>
                                <SideNav />
                            </If>
                            <Grid
                                item
                                xs={12}
                                lg={!!user ? 10 : 8}
                                component="main"
                                sx={{
                                    margin: '0 auto',
                                    maxWidth: !!user ? 'none' : 960,
                                    padding: '1rem 1.0875rem 1.45rem'
                                }}
                            >
                                <AdminViewToggle />
                                {children}
                            </Grid>
                        </Grid>
                    </If>
                </LayoutProvider>
            </>
        )}
    />
}

export default Layout
