import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#4AAEE4',
      contrastText: '#fff',
    },
    secondary: {
      main: '#D2C9B1',
    },

    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ['Hind', 'sans-serif'],
  },
});

export default theme;
