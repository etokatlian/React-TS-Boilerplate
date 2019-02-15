import { Epic, createEpicMiddleware } from 'redux-observable';
import { ActionType } from 'typesafe-actions';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import * as actions from '../actions';
import { createRootReducer, IRootState } from '../reducers';

export const history = createBrowserHistory();

type Action = ActionType<typeof actions>;

declare global {
  // tslint:disable-next-line
  interface Window {
    // tslint:disable-next-line
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const epicMiddleware = createEpicMiddleware<Action, Action, IRootState>();

export function configureStore(preloadedState?: any) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions,
        epicMiddleware
        // ... other middlewares ...
      )
    )
  );

  return store;
}

export const runEpicMiddlewares = (epics: Epic<Action, Action, IRootState>) => {
  return epicMiddleware.run(epics);
};
