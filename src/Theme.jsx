import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    // DEFAULT FONT
    fontFamily: '"Exo 2", sans-serif',

    // HEADINGS
    h1: {
      fontFamily: '"Exo 2", sans-serif',
      fontWeight: 700,
    },

    h2: {
      fontFamily: '"Exo 2", sans-serif',
      fontWeight: 700,
    },

    h3: {
      fontFamily: '"Exo 2", sans-serif',
      fontWeight: 600,
    },

    h4: {
      fontFamily: '"Exo 2", sans-serif',
      fontWeight: 600,
    },

    h5: {
      fontFamily: '"Exo 2", sans-serif',
      fontWeight: 500,
    },

    h6: {
      fontFamily: '"Exo 2", sans-serif',
      fontWeight: 500,
    },
  },

  components: {
    // BUTTONS
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Space Grotesk", sans-serif',
          textTransform: "none",
        },
      },
    },

    // INPUTS
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: '"Space Grotesk", sans-serif',
        },
      },
    },

    // TEXTFIELDS
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: '"Space Grotesk", sans-serif',
        },
      },
    },

    // CHIPS
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Space Grotesk", sans-serif',
        },
      },
    },

    // CARDS
    MuiCard: {
      styleOverrides: {
        root: {
          fontFamily: '"Space Grotesk", sans-serif',
        },
      },
    },
  },
});

export default theme;