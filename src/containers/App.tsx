import { DatePicker } from 'antd';
import React from 'react';
import styled from 'styled-components';

import 'antd/dist/antd.css';
import TFLogo from '../assets/images/tf-logo.svg';

export interface IAppProps {
  some?: any;
}

export interface IAppState {
  some?: any;
}

export const StyledApp = styled.div`
  width: 300px;
`;

export default class App extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <StyledApp className="app-wrapper">
        <img src={TFLogo} alt="" />
        <div>React/TS Boilerplate</div>
        <DatePicker />
      </StyledApp>
    );
  }
}
