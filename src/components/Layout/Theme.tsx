import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { createMuiTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

const theme = createMuiTheme({
    props: {
        MuiButtonBase: {
            // The default props to change
            disableRipple: true, // No more ripple, on the whole application 💣!
        },
    },
    palette: {
        primary: {
            main: '#6772e5',
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
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
