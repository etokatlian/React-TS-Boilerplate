import { ActionType, getType } from 'typesafe-actions';

import * as actions from '../actions';

type Action = ActionType<typeof actions>;

// User Model
class User {
  public login: string;
  public id?: number;
  public url?: string;
  constructor(args?: {}) {
    Object.assign(this, args);
  }
}

export interface IUserState {
  readonly user?: User;
}

const initialState = {
  user: {
    login: '',
  },
};

export const UserReducer = (
  state: IUserState = initialState,
  action: Action
): IUserState => {
  switch (action.type) {
    case getType(actions.githubSetUser):
      return Object.assign({}, state, { user: new User(action.payload) });

    case getType(actions.githubGetUserError):
      return state;

    default:
      return state;
  }
};
