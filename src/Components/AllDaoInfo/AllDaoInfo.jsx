import React from 'react';
import { Grid } from '@material-ui/core';
import './AllDaoInfo.css';

const AllDaoInfo = ({ numOfDaos, totalAum }) => {
  return (
    <Grid container item justifyContent="space-around">
      <Grid item xs={6}>
        <div className="info">
          <p>Number of DAOs {numOfDaos}</p>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="info">
          <p>Total AUM (USD) {totalAum}</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default AllDaoInfo;
