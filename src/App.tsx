import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';

import { history } from './config/configureStore';
import BaseStyles from './assets/theme/base-styles';
import theme from './assets/theme';
import Routes from './routes';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <>
              <BaseStyles />
              <Routes />
            </>
          </ConnectedRouter>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
