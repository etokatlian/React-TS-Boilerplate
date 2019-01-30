import React from "react";

import TFLogo from "../assets/images/tf-logo.svg";

export interface AppProps {}

export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="app-wrapper">
        <h1>React/TS Boilerplate</h1>
        <img src={TFLogo} alt="" />
      </div>
    );
  }
}
