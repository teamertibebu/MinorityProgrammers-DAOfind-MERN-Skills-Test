import React from 'react';
import {
  Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DaoPreview from '../DaoPreview/DaoPreview';
import DaoSummary from '../DaoSummary/DaoSummary';

const DaoListItem = ({ dao }) => {
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
          <DaoSummary dao={dao} />
        </AccordionSummary>
        <AccordionDetails>
          <DaoPreview dao={dao} />
        </AccordionDetails>
      </Accordion>
    </Grid>
  );
};

export default DaoListItem;
