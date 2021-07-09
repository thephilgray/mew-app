import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { createMuiTheme, ThemeProvider as MuiThemeProvider, Theme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'

const theme: Theme = createMuiTheme({
    props: {
        MuiButtonBase: {
            // The default props to change
            disableRipple: true, // No more ripple, on the whole application 💣!
        },
    },
    palette: {
        primary: {
            main: '#63625E',
        },
        secondary: {
            main: '#E092A2',
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
