import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  configureStore,
  runEpicMiddlewares,
  history,
} from './config/configureStore';
import epics from './epics';
import App from './App';

const store = configureStore();

runEpicMiddlewares(epics);

const ConnectedApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById(
  'app'
) as HTMLElement);
