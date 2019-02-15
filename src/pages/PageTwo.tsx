import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SecondPage extends Component {
  public render() {
    return (
      <>
        <Link to="/">
          <h1>Second page</h1>
        </Link>
      </>
    );
  }
}

export default SecondPage;
