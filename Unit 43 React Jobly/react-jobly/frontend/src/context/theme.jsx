import { createTheme } from "@mui/material";

// Use this website to help updating theme options 
// https://zenoo.github.io/mui-theme-creator/

const themeOptions = {
    palette: {
      mode: 'light',
      primary: {
        main: '#05119e',
      },
      secondary: {
        main: '#58a8a8',
      },
      info: {
        main: '#2487b1',
      },
      warning: {
        main: '#c37730',
      },
      error: {
        main: '#8c1e1e',
      },
      success: {
        main: '#286928',
      },
    },
    shape: {
      borderRadius: 12,
    },
    spacing: 4,
    overrides: {
      MuiAppBar: {
        colorInherit: {
          backgroundColor: '#689f38',
          color: '#fff',
        },
      },
    },
    typography: {
      h1: {
        fontFamily: 'Raleway',
      },
      h2: {
        fontFamily: 'Raleway',
      },
      h3: {
        fontFamily: 'Raleway',
      },
    },
  };

const theme = createTheme(themeOptions)
export default theme

