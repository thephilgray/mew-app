import { createMuiTheme } from '@material-ui/core/styles'
import { purple, green } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
})

export default theme
