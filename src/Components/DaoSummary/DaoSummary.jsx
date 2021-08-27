import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const DaoSummary = ({ dao }) => {
  return (
    <>
      <Grid item xs={2}>
        <img src={dao.logo_link} style={{ width: '20%' }} alt="dao logo" />
      </Grid>
      <Grid item xs={2}>
        <Typography>{dao.full_name}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{dao.category}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{dao.aum}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{dao.date_founded}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography>{dao.blockchain}</Typography>
      </Grid>
    </>
  );
};

export default DaoSummary;
