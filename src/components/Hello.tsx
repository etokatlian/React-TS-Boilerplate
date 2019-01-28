import * as React from "react";

export interface HelloProps {}

export interface HelloState {}

//'HelloProps' describes the shape of props.
//'HelloState' describes the shape of props.
export class Hello extends React.Component<HelloProps, HelloState> {
  render(): Array<JSX.Element> {
    return [
      <h1>React/TS/Webpack Boilerplate</h1>,
      <h3>
        We have successfully setup our React, Webpack, and Typescript project!
      </h3>
    ];
  }
}
