import { combineReducers } from 'redux';

import { UserReducer, IUserState } from './UserReducer';

export interface RootState {
  user: IUserState;
}

const reducers = combineReducers({
  user: UserReducer,
});

export default reducers;
