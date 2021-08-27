import React from 'react';
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Grid,
} from '@material-ui/core';

const MoreFilters = () => {
  return (
    <Grid
      item
      container
      justifyContent="space-between"
      style={{
        padding: '5px',
        width: '100%',
        marginTop: '5px',
      }}
    >
      <FormControl style={{ width: '30%' }}>
        <InputLabel id="demo-simple-select-label">Date Founded</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ width: '30%' }}>
        <InputLabel id="demo-simple-select-label">Blockchain</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ width: '30%' }}>
        <InputLabel id="demo-simple-select-label">TVL</InputLabel>
        <Select labelId="demo-simple-select-label" id="demo-simple-select">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  );
};

export default MoreFilters;
