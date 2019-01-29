import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  padding: 50px;
`;

const AppContent = styled.div`
  background-color: red;
`;

export interface AppProps {}

export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <AppWrapper>
        <AppContent>Something</AppContent>
      </AppWrapper>
    );
  }
}
