import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import {
  switchMap,
  filter,
  map,
  catchError,
  debounceTime,
} from 'rxjs/operators';
import { ActionType, isActionOf } from 'typesafe-actions';

import * as actions from '../actions';

type Action = ActionType<typeof actions>;

import { RootState } from '../reducers';

import { getUser } from '../services/Api';

const githubUserEpic: Epic<Action, Action, RootState> = (action$, store) => {
  return action$.pipe(
    debounceTime(500),
    filter(isActionOf(actions.githubGetUser)),
    filter(action => action.payload.username !== ''),
    switchMap(action =>
      from(getUser(action.payload.username)).pipe(
        map(actions.githubSetUser),
        catchError(error => of(actions.githubGetUserError(error)))
      )
    )
  );
};

export default [githubUserEpic];
