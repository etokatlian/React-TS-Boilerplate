import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';

import BaseStyles from './assets/theme/base-styles';
import theme from './assets/theme';
import Routes from './routes';

class App extends Component {
  public render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <>
            <BaseStyles />
            <Routes />
          </>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
