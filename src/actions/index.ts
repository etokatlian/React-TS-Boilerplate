import { createAction } from 'typesafe-actions';

import {
  GITHUB_USER_GET,
  GITHUB_USER_SET,
  GITHUB_USER_ERROR,
} from '../constants';

export const githubGetUser = createAction(
  GITHUB_USER_GET,
  resolve => (username: string) => resolve({ username })
);

export const githubSetUser = createAction(
  GITHUB_USER_SET,
  resolve => (user: Response) => resolve(user)
);

export const githubGetUserError = createAction(
  GITHUB_USER_ERROR,
  resolve => (error: Error) => resolve(error)
);
