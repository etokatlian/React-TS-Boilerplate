import { ActionType } from 'typesafe-actions';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

import { RootState } from '../reducers';

import App from '../features/PageOne';

type Action = ActionType<typeof actions>;

interface OwnProps {}

const mapStateToProps = (state: RootState) => ({
  user: state.user,
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
