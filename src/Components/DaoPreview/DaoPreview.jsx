import React, { useState } from 'react';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { useHistory } from 'react-router-dom';
import './DaoPreview.css';
import { Grid, Typography } from '@material-ui/core';

const DaoPreview = ({ dao: Dao }) => {
  const history = useHistory();
  const [dao, setDao] = useState(Dao);

  const handleDaoClick = (id, e) => {
    history.push(`/dao/${id}`);
  };

  return (
    <Grid container id="preview">
      <Grid item container>
        <Grid item container xs={6} id="description" className="item">
          <Typography>
            {dao.description || 'No Description Available'}
          </Typography>
        </Grid>
        <Grid container item xs={6} className="item" direction="row">
          <Grid item style={{ backgroundColor: 'red', height: '10%' }} xs={12}>
            <OpenInNewIcon
              onClick={handleDaoClick.bind(this, dao._id)}
              id="previewIcon"
            />
          </Grid>
          <Grid
            item
            container
            style={{ backgroundColor: 'purple', height: '90%' }}
            xs={12}
            direction="column"
          >
            <Grid item style={{ backgroundColor: 'silver' }}>
              <Typography>Total Value Locked (TVL)</Typography>
            </Grid>
            <Grid item style={{ backgroundColor: 'white' }}>
              <Typography>{dao.TVL}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        className="item"
        alignItems="center"
        style={{ backgroundColor: 'red' }}
      >
        <Grid item container id="footerTitles" justifyContent="space-evenly">
          <Typography>Symbol</Typography>
          <Typography>Name</Typography>
          <Typography>Blockchain</Typography>
          <Typography>Headquarters</Typography>
          <Typography>Date Founded</Typography>
        </Grid>
        <Grid item container id="footerDetails" justifyContent="space-evenly">
          <Typography>{dao.symbol || 'N/A'}</Typography>
          <Typography>{dao.full_name}</Typography>
          <Typography>{dao.blockchain || 'N/A'}</Typography>
          <Typography>{dao.headquarters || 'N/A'}</Typography>
          <Typography>{dao.found_date || 'N/A'}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DaoPreview;
