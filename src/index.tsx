import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { configureStore, runEpicMiddlewares } from './config/configureStore';
import theme from './assets/theme';
import BaseStyles from './assets/theme/base-styles';
import App from './containers/App.connect';
import epics from './epics';

const store = configureStore();

runEpicMiddlewares(epics);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <BaseStyles />
        <App />
      </>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app') as HTMLElement
);
