import * as React from 'react';

export interface IHelloProps {
  some?: any;
}

export interface IHelloState {
  some?: any;
}

export class Hello extends React.Component<IHelloProps, IHelloState> {
  public render() {
    return <h1>React/TS Boilerplate</h1>;
  }
}
