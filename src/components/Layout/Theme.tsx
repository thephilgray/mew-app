import React from 'react'
// import { css } from '@emotion/core'
import { ThemeProvider } from '@emotion/react'
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6772e5',
        },
    },
})

const EmotionTheme: React.FC = ({ children = [] }) => {
    return (
        <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </MuiThemeProvider>
    )
}
export default EmotionTheme
