import React, { useState } from 'react';
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Grid,
} from '@material-ui/core';
import allFilters from './FilterInfo';

const MoreFilters = () => {
  const [TVL, setTVL] = useState('');
  const [blockchain, setBlockchain] = useState('');
  const [yearFounded, setYearFounded] = useState('');

  const handleChange = (e) => {
    const newState = e.target.value;
    const stateName = e.target.name;

    const stateUpdaters = {
      yearFounded: setYearFounded,
      blockchain: setBlockchain,
      TVL: setTVL,
    };

    stateUpdaters[stateName](newState);
  };

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
      {allFilters.map((filter, i) => (
        <FormControl style={{ width: '30%' }} key={filter}>
          <InputLabel>
            {i === 0 ? 'Year Founded' : i === 1 ? 'Blockchain' : 'TVL'}
          </InputLabel>
          <Select
            value={i === 0 ? yearFounded : i === 1 ? blockchain : TVL}
            name={i === 0 ? 'yearFounded' : i === 1 ? 'blockchain' : 'TVL'}
            onChange={handleChange}
          >
            {filter.map((option) => (
              <MenuItem value={option} key={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}
    </Grid>
  );
};

export default MoreFilters;
