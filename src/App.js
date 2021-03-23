import React from 'react'
import { CssBaseline } from "@material-ui/core";

import MainMenu from './components/MainMenu'
import Greeting from './components/Greeting'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MainMenu />
      <Greeting />
    </React.Fragment>
  );
}

export default App;
