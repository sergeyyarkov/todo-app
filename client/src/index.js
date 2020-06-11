import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history'
import theme from './theme';
import * as serviceWorker from './serviceWorker';


const history = createBrowserHistory()

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
