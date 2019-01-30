import React from 'react';
import styled from 'styled-components';

import TFLogo from '../assets/images/tf-logo.svg';

const AppWrapper: any = styled.div`
  display: flex;
  padding: 50px;
`;

export interface IAppProps {
  some?: any;
}

export interface IAppState {
  some?: any;
}

export default class App extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <AppWrapper>
        <img src={TFLogo} alt="" />
      </AppWrapper>
    );
  }
}
