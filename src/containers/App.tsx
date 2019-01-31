import React from 'react';
import styled from 'styled-components';
import { DatePicker, Slider } from 'antd';

import RandomPage from '../features/randompage/RandomPageContainer';
import TFLogo from '../assets/images/tf-logo.svg';

export interface IAppProps {
  some?: any;
}

export interface IAppState {
  some?: any;
}

export const StyledApp = styled.div`
  width: 500px;
  margin-left: 20px;
`;

export const StyledDiv = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
`;

const marks = {
  0: '12',
  24: '24',
  36: '36',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>72</strong>,
  },
};

export default class App extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <StyledApp className="app-wrapper">
        <img src={TFLogo} alt="" />
        <StyledDiv>React/TS Boilerplate</StyledDiv>
        <DatePicker />
        <Slider marks={marks} step={10} defaultValue={36} />
        <RandomPage name="test" />
      </StyledApp>
    );
  }
}
