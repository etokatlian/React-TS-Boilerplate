import React from "react";
import styled from "styled-components";

import TFLogo from "../assets/images/tf-logo.svg";

const AppWrapper = styled.div`
  display: flex;
  padding: 50px;
`;

export interface AppProps {}

export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <AppWrapper>
        <img src={TFLogo} alt="" />
      </AppWrapper>
    );
  }
}
