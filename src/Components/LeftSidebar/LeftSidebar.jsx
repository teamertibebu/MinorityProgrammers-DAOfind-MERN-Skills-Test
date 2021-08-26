import React from 'react';
import { Grid } from '@material-ui/core';

const LeftSideBar = () => {
  return (
    <Grid
      item
      xs={2}
      style={{
        // backgroundColor: 'purple',
        border: '1px solid lightgrey',
      }}
    >
      Left Side Bar
    </Grid>
  );
};

export default LeftSideBar;
