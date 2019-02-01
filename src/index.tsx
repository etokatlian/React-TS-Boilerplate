import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ThemeProvider } from 'styled-components';

import theme from './assets/theme';
import { enthusiasm } from './reducers/randompage';

// create a store state interface to pass into createStore at some point
// import { IStoreState } from './types/index';

import App from './containers/App';

const store: () => void = createStore(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
  },
  composeWithDevTools()
);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app') as HTMLElement
);
