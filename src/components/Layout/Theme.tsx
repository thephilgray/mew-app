import React from 'react'
import { createTheme, ThemeProvider, Theme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { CacheProvider } from "@emotion/react";
import { TssCacheProvider } from "tss-react";
import createCache from "@emotion/cache";
import '@fontsource/roboto-serif'

export const ColorModeContext = React.createContext({ togglePalette: () => { } })

const muiCache = createCache({
    "key": "mui",
    "prepend": true
});

const tssCache = createCache({
    "key": "tss"
});

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
                primary: '#241c15',
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
        drawerWidth: 240
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
        <CacheProvider value={muiCache}>
            <TssCacheProvider value={tssCache}>
                <ColorModeContext.Provider value={paletteControl}>
                    <ThemeProvider theme={getTheme(palette)}>
                        <CssBaseline />
                        {children}
                    </ThemeProvider>
                </ColorModeContext.Provider>
            </TssCacheProvider>
        </CacheProvider>
    )
}
export default EmotionTheme
