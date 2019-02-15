import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

import { IRootState } from '../reducers';

import App from '../pages/PageOne';

type Action = ActionType<typeof actions>;

const mapStateToProps = (state: IRootState) => {
  return {
    user: state.UserReducer.user,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: {}) =>
  bindActionCreators(
    {
      getGithubUser: (username: string) => actions.githubGetUser(username),
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
