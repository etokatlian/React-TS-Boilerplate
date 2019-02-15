import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { UserReducer, IUserState } from './UserReducer';

export interface IUserReducer {
  user: {
    avatar_url: string;
    login: string;
    url: string;
  };
}
export interface IRootState {
  user: IUserState;
  UserReducer: IUserReducer;
}

export const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    UserReducer,
  });
