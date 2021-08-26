import React from 'react';
import { Grid } from '@material-ui/core';

const DaoListItem = ({ dao }) => {
  return (
    <Grid
      item
      container
      xs={12}
      direction="row"
      style={{
        backgroundColor: 'white',
        border: '1px solid black',
        padding: '20px',
        margin: '7px',
      }}
    >
      <Grid item xs={2}>
        <img src={dao.logo_link} style={{ width: '20%' }} alt="dao logo" />
      </Grid>
      <Grid item xs={2}>
        <p>Category: {dao.category}</p>
      </Grid>
      <Grid item xs={2}>
        <p>AUM: {dao.aum}</p>
      </Grid>
      <Grid item xs={2}>
        <p>Founded: {dao.date_founded}</p>
      </Grid>
    </Grid>
  );
};

export default DaoListItem;
