import React from 'react';
import { Input, Card } from 'antd';
import styled from 'styled-components';
import TFLogo from '../assets/images/tf-logo.svg';

export interface IAppProps {
  getGithubUser: (username: string) => void;
  user?: any;
  some?: any;
}

export interface IAppState {
  some?: any;
}

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledDiv = styled.div`
  font-size: 30px;
  margin-bottom: 30px;
  text-align: center;
`;

const Search = Input.Search;
const { Meta } = Card;

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
      <StyledApp className="app-wrapper">
        <img src={TFLogo} alt="" />
        <StyledDiv>React/TS Boilerplate</StyledDiv>
        <Search
          placeholder="input search text"
          onChange={e => this.getUser(e)}
          enterButton={true}
        />
        <div style={{ marginTop: '20px' }}>
          {user && (
            <Card
              hoverable={true}
              style={{ width: 240 }}
              cover={<img alt="" src={user.avatar_url} />}
            >
              <Meta title={user.login} description={user.url} />
            </Card>
          )}
        </div>
      </StyledApp>
    );
  }
}
