import React from 'react';
import { Grid, Button } from '@material-ui/core';
import './Filters.css';

const Filters = () => {
  return (
    <Grid
      container
      item
      alignItems="center"
      justifyContent="space-between"
      style={{
        // backgroundColor: 'blue',
        padding: '10px',
      }}
    >
      <Button size="large" variant="outlined" className="button">
        Filter 1
      </Button>
      <Button size="large" variant="outlined" className="button">
        Filter 2
      </Button>
      <Button size="large" variant="outlined" className="button">
        Filter 3
      </Button>
      <Button size="large" variant="outlined" className="button">
        Filter 4
      </Button>
      <Button size="large" variant="outlined" className="button">
        Filter 5
      </Button>
    </Grid>
  );
};

export default Filters;
