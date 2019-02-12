import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { UserReducer, IUserState } from './UserReducer';

export interface RootState {
  user: IUserState;
}

export const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    UserReducer,
  });
