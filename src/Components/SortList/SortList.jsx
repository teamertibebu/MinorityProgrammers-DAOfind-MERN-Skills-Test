import React from 'react';
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SortList = () => {
  return (
    <>
      <Grid item container direction="column">
        <Accordion
          style={{
            backgroundColor: 'white',
            border: '1px solid black',
            padding: '20px',
            margin: '7px',
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Grid item container justifyContent="space-between">
              <Typography>Name</Typography>
              <Typography>Category</Typography>
              <Typography>AUM</Typography>
              <Typography>Year Founded</Typography>
              <Typography>Blockchain</Typography>
            </Grid>
          </AccordionSummary>
        </Accordion>
      </Grid>
    </>
  );
};

export default SortList;
