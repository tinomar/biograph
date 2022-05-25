import { createTheme } from '@mui/material/styles';
import { green, orange } from "@mui/material/colors";

const theme = createTheme({
    typography: {
        h1: {
            /* this will change the font size for h1, we can also do 
               it for others, */
            fontSize: "3rem",
        },
    },
    palette: {
        /* this is used to turn the background dark, but we have 
            to use Paper for this inOrder to use it. */
        primary: {
            // main: colorName[hue],
            // we have to import the color first to use it
            main: green[600],
        },
        secondary: {
            main: orange[400],
        },
    },
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: orange[200],
                      },
                }
            }
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: orange[200]
                }
            }
        },
    }

});

export default theme;