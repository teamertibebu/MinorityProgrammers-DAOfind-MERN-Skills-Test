import React from 'react';
import { Grid } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

const DaoListItem = ({ dao }) => {
  ///For Development Only:////////////////
  const date = new Date(dao.date_founded)
    .toString()
    .slice(4, 15)
    .replace('01 ', '');
  ////////////////////////////////////////
  const history = useHistory();

  const handleDaoClick = (id, e) => {
    console.log(id);
    history.push(`/dao/${id}`);
  };

  return (
    <Grid
      item
      container
      xs={12}
      direction="row"
      alignItems="center"
      style={{
        backgroundColor: 'white',
        border: '1px solid black',
        padding: '20px',
        margin: '7px',
      }}
      onClick={handleDaoClick.bind(this, dao._id)}
    >
      <Grid item xs={2}>
        <img src={dao.logo_link} style={{ width: '20%' }} alt="dao logo" />
      </Grid>
      <Grid item xs={2}>
        <p>{dao.full_name}</p>
      </Grid>
      <Grid item xs={2}>
        <p>{dao.category}</p>
      </Grid>
      <Grid item xs={2}>
        <p>{dao.aum}</p>
      </Grid>
      <Grid item xs={2}>
        <p>{date}</p>
      </Grid>
    </Grid>
  );
};

export default DaoListItem;
