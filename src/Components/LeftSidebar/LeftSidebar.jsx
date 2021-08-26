import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

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
      <Link to="/">Leaderboard</Link>
      <Link to="/learn">Learn</Link>
    </Grid>
  );
};

export default LeftSideBar;
