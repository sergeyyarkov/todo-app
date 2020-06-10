import { createMuiTheme } from '@material-ui/core/styles';
import { pink, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0d47a1'
    },
    secondary: pink,
    error: red
  },
  typography: {
    h1: {
      fontSize: 24,
    },
    h2: {
      fontSize: 30
    },
  },
});

export default theme