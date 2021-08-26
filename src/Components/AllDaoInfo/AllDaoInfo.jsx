import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import './AllDaoInfo.css';

const AllDaoInfo = () => {
  const [numberOfDaos, setNumberOfDaos] = useState(111);
  const [aum, setAum] = useState('$7,747,7474');
  return (
    <Grid container item justifyContent="space-around">
      <Grid item xs={6}>
        <div className="info">
          <p>Number of DAOs {numberOfDaos}</p>
        </div>
      </Grid>
      <Grid item xs={6}>
        <div className="info">
          <p>Total AUM (USD) {aum}</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default AllDaoInfo;
