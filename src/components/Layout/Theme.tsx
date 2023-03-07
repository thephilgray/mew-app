import React from 'react'
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import '@fontsource/roboto-serif'

declare module '@mui/styles/defaultTheme' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}

export const ColorModeContext = React.createContext({ togglePalette: () => {} })

const getTheme = (palette = {}): Theme =>
    createTheme({
        components: {
            MuiButtonBase: {
                defaultProps: {
                    // The default props to change
                    disableRipple: true, // No more ripple, on the whole application 💣!
                },
            },
        },
        palette: {
            primary: {
                main: '#63625E',
            },
            secondary: {
                main: '#E092A2',
            },
            background: {
                default: '#fff',
            },
            text: {
                primary: '#000',
            },
            ...palette,
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
    const [palette, setPalette] = React.useState({})
    const paletteControl = React.useMemo(
        () => ({
            togglePalette: setPalette,
            palette,
        }),
        [],
    )
    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <ColorModeContext.Provider value={paletteControl}>
            <ThemeProvider theme={getTheme(palette)}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
export default EmotionTheme
