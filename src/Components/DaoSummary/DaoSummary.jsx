import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const DaoSummary = ({ dao }) => {
  ///For Development Only:////////////////
  const date = new Date(dao.date_founded)
    .toString()
    .slice(4, 15)
    .replace('01 ', '');
  ////////////////////////////////////////
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
        <Typography>{date}</Typography>
      </Grid>
    </>
  );
};

export default DaoSummary;
