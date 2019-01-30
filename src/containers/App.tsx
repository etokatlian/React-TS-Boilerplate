import React from 'react';

import TFLogo from '../assets/images/tf-logo.svg';

export interface IAppProps {
  some?: any;
}

export interface IAppState {
  some?: any;
}

export default class App extends React.Component<IAppProps, IAppState> {
  public render() {
    return (
      <div className="app-wrapper">
        <img src={TFLogo} alt="" />
        <h1>React/TS Boilerplate</h1>
      </div>
    );
  }
}
