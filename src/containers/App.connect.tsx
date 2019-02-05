import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

import { RootState } from '../reducers';

type Action = ActionType<typeof actions>;

import App from './App';

interface OwnProps {}

const mapStateToProps = (state: RootState) => ({
  user: state.user.user,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>, props: OwnProps) =>
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
