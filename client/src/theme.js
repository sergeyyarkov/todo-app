import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0d47a1'
    },
    secondary: red,
    error: red
  },
  typography: {
    h1: {
      fontSize: 24,
    },
    h2: {
      fontSize: 30
    },
    body1: {
      fontSize: 14
    }
  },
});

export default theme