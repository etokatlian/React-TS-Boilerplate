import RandomPage from './RandomPage';
import * as actions from './randomPageActions';
import { IStoreState } from '../../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export const mapStateToProps: (
  entusiasmLevel: number,
  languageName: string
) => IStoreState = ({ enthusiasmLevel, languageName }: IStoreState) => {
  return {
    enthusiasmLevel,
    name: languageName,
  };
};

export const mapDispatchToProps = (
  dispatch: Dispatch<actions.EnthusiasmAction>
) => {
  return {
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomPage);
