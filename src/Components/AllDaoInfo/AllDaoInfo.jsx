import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import './AllDaoInfo.css';
import StringifyNum from '../../StringifyNum';

const AllDaoInfo = ({ numOfDaos, totalAum }) => {
  const [aum, setAum] = useState('');
  useEffect(() => {
    setAum(StringifyNum(totalAum));
  }, [totalAum]);

  return (
    <Grid container item justifyContent="space-around">
      <Grid item xs={6}>
        <div className="info">
          <p>Number of DAOs {numOfDaos}</p>
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
