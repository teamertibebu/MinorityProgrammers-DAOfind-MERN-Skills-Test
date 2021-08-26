import React from 'react';
import {
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

const DaoListItem = ({ dao }) => {
  ///For Development Only:////////////////
  const date = new Date(dao.date_founded)
    .toString()
    .slice(4, 15)
    .replace('01 ', '');
  ////////////////////////////////////////
  const history = useHistory();

  const handleDaoClick = (id, e) => {
    history.push(`/dao/${id}`);
    console.log('click');
  };

  return (
    <Grid item container xs={12} direction="column">
      <Accordion
        style={{
          backgroundColor: 'white',
          border: '1px solid black',
          padding: '20px',
          margin: '7px',
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
        </AccordionSummary>
        <AccordionDetails>
          <div>{dao.full_name}</div>
          <OpenInNewIcon onClick={handleDaoClick.bind(this, dao._id)} />
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default DaoListItem;
