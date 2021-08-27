import React from 'react';
import Header from '../Header/Header';
import { Grid } from '@material-ui/core';
import './App.css';
import Body from '../Body/Body';

function App() {
  return (
    <Grid container direction="column" className="App">
      <Header />
      <Body />
    </Grid>
  );
}

export default App;
