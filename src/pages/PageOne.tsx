import React from 'react';
import SwitchButton from '../shared/Switch';

export interface IAppProps {
  getGithubUser: (username: string) => void;
  user?: any;
  some?: any;
}

export interface IAppState {
  some?: any;
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);
  }

  public getUser = (e: React.FormEvent<HTMLInputElement>) => {
    e.persist();
    this.props.getGithubUser(e.currentTarget.value);
  };

  public render() {
    const { user } = this.props;

    return (
      <div>
        <h1>Hello</h1>
        <SwitchButton />
      </div>
    );
  }
}
