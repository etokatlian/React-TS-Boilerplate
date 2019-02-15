import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import RandomPage from './RandomPage';
import * as RandomActions from './randomPageActions';
import { IStoreState } from '../../types/index';

// Props passed from mapStateToProps
export interface IPropsFromState {
  enthusiasmLevel: number;
  name: string;
}

// Props passed from mapDispatchToProps
export interface IPropsFromDispatch {
  onDecrement: typeof RandomActions.decrementEnthusiasm;
  onIncrement: typeof RandomActions.incrementEnthusiasm;
}

// Props specific to the component
export interface IComponentProps {
  children: (props: ContainerProps) => React.ReactNode;
}

export type ContainerProps = IPropsFromState & IPropsFromDispatch;

export const mapStateToProps = ({
  enthusiasmLevel,
  languageName,
}: IStoreState): IPropsFromState => {
  return {
    enthusiasmLevel,
    name: languageName,
  };
};

export const mapDispatchToProps = (
  dispatch: Dispatch<RandomActions.EnthusiasmAction>
): IPropsFromDispatch => {
  return {
    onDecrement: () => dispatch(RandomActions.decrementEnthusiasm()),
    onIncrement: () => dispatch(RandomActions.incrementEnthusiasm()),
  };
};

export default connect<IPropsFromState, IPropsFromDispatch, {}>(
  mapStateToProps,
  mapDispatchToProps
)(RandomPage);
