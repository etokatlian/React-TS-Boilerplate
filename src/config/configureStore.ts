import { Epic, createEpicMiddleware } from 'redux-observable';
import { ActionType } from 'typesafe-actions';
import { createStore, applyMiddleware, compose } from 'redux';

import * as actions from '../actions';
import reducers, { RootState } from '../reducers';

type Action = ActionType<typeof actions>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>();

export function configureStore(initialState?: RootState) {
  // configure middlewares
  const middlewares = [epicMiddleware];
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  return createStore(reducers, initialState, enhancer);
}

export const runEpicMiddlewares = (epics: Epic<Action, Action, RootState>) => {
  return epicMiddleware.run(epics);
};
