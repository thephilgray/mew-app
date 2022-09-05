import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { createMuiTheme, ThemeProvider as MuiThemeProvider, Theme } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import '@fontsource/roboto-serif'
import { invert, saturate, tint } from 'polished'

export const ColorModeContext = React.createContext({ togglePalette: () => { } });

const getTheme = (palette = {}): Theme => createMuiTheme({
    props: {
        MuiButtonBase: {
            // The default props to change
            disableRipple: true, // No more ripple, on the whole application 💣!
        },
    },
    palette: {
        primary: {
            main: '#63625E'
        },
        secondary: {
            main: '#E092A2',
        },
        background: {
            default: '#fff'

        },
        text: {
            primary: '#000'
        },
        ...palette
    },
    typography: {
        fontFamily: [
            'Roboto Serif',
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
    const [palette, setPalette] = React.useState({});
    const paletteControl = React.useMemo(
        () => ({
            togglePalette: setPalette,
            palette
        }),
        [],
    );
    return (
        // @ts-ignore
        <ColorModeContext.Provider value={paletteControl}>

            <MuiThemeProvider theme={getTheme(palette)}>
                <ThemeProvider theme={getTheme(palette)}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </MuiThemeProvider>
        </ColorModeContext.Provider>
    )
}
export default EmotionTheme
