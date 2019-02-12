import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';

import {
  configureStore,
  runEpicMiddlewares,
  history,
} from './config/configureStore';
import BaseStyles from './assets/theme/base-styles';
import theme from './assets/theme';
import Routes from './routes';
import epics from './epics';

// const store = configureStore();

// runEpicMiddlewares(epics);

class App extends Component {
  public render() {
    return (
      <div className="App">
        {/* <Provider store={store}> */}
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <>
              <BaseStyles />
              <Routes />
            </>
          </ConnectedRouter>
        </ThemeProvider>
        {/* </Provider> */}
      </div>
    );
  }
}

export default App;
