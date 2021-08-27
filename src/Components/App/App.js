import React from 'react';
import { Switch } from 'react-router-dom';
import Header from '../Header/Header';
import { Grid } from '@material-ui/core';
import './App.css';
import Body from '../Body/Body';

function App() {
  return (
    // <Switch>
    <Grid container direction="column" className="App">
      <Header />
      <Body />
    </Grid>
    // </Switch>
  );
}

export default App;
