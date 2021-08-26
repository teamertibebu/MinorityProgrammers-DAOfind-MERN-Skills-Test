import React from 'react';
import DaoList from '../DaoList/DaoList';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import DaoPage from '../DaoPage/DaoPage';
import { Grid } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

const Body = () => {
  return (
    <Switch>
      <Grid
        item
        container
        direction="row"
        style={{
          // backgroundColor: 'orange',
          // height: '100vh',
          overflow: 'scrollable',
        }}
      >
        <LeftSidebar />
        <Route exact path="/">
          <DaoList />
        </Route>
        <Route exact path="/dao/:id">
          <DaoPage />
        </Route>
      </Grid>
    </Switch>
  );
};

export default Body;
