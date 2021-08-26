import React from 'react';
import DaoList from '../DaoList/DaoList';
import LeftSidebar from '../LeftSidebar/LeftSidebar';
import { Grid } from '@material-ui/core';

const Body = () => {
  return (
    <Grid
      item
      container
      direction="row"
      style={{
        backgroundColor: 'orange',
      }}
    >
      <LeftSidebar />
      <DaoList />
    </Grid>
  );
};

export default Body;