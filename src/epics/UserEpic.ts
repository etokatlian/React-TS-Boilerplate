import { Epic } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap, filter, map, catchError } from 'rxjs/operators';
import { ActionType, isActionOf } from 'typesafe-actions';

import * as actions from '../actions';

type Action = ActionType<typeof actions>;

import { RootState } from '../reducers';

import { getUser } from '../services/Api';

const githubUserEpic: Epic<Action, Action, RootState> = (action$, store) => {
  return action$.pipe(
    filter(isActionOf(actions.githubGetUser)),
    switchMap(action =>
      from(getUser(action.payload.username)).pipe(map(actions.githubSetUser))
    )
  );
};

export default [githubUserEpic];
