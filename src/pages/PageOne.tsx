import React from 'react';

import SwitchButton from '../shared/Switch';

export interface IAppProps {
  getGithubUser: (username: string) => void;
  user?: any;
  some?: any;
}

export interface IAppState {
  some?: any;
  mechanicalDefects: boolean;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      mechanicalDefects: false,
    };
  }

  public test = (e: any) => {
    this.setState({
      mechanicalDefects: !this.state.mechanicalDefects,
    });
  };

  public render() {
    return (
      <div>
        <SwitchButton
          bool={this.state.mechanicalDefects}
          leftLabel={true}
          onChange={(e: any) => this.test(e)}
        />
      </div>
    );
  }
}
