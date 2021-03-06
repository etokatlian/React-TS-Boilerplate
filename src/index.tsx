import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import {
  configureStore,
  runEpicMiddlewares,
  history,
} from './config/configureStore';
import epics from './epics';
import App from './App';

import './styles/index.less';

const store = configureStore();

runEpicMiddlewares(epics);

const ConnectedApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById(
  'app'
) as HTMLElement);
