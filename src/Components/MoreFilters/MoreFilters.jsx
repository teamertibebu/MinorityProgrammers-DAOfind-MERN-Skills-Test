import React, { useState, useEffect } from 'react';
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Grid,
  Button,
  Typography,
} from '@material-ui/core';
import allFilters from './FilterInfo';
import axios from 'axios';

const MoreFilters = ({ setAllDaos, category, setCategory }) => {
  const [TVL, setTVL] = useState('');
  const [blockchain, setBlockchain] = useState('');
  const [date_founded, setDateFounded] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('/filter', {
        params: {
          date_founded: date_founded !== 'None' ? date_founded : '',
          blockchain: blockchain !== 'None' ? blockchain : '',
          category: category !== 'All' ? category : '',
          TVL: TVL !== 'None' ? TVL : '',
        },
      })
      .then(({ data }) => {
        setAllDaos(data);
      });
  }, [filter, TVL, blockchain, date_founded, category, setAllDaos]);

  const handleChange = (e) => {
    const newState = e.target.value;
    const stateName = e.target.name;
    setFilter(stateName);

    const stateUpdaters = {
      date_founded: setDateFounded,
      blockchain: setBlockchain,
      TVL: setTVL,
    };

    stateUpdaters[stateName](newState);
  };

  const handleReset = () => {
    setTVL('');
    setBlockchain('');
    setDateFounded('');
    setFilter('');
    setCategory('All');
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
            value={i === 0 ? date_founded : i === 1 ? blockchain : TVL}
            name={i === 0 ? 'date_founded' : i === 1 ? 'blockchain' : 'TVL'}
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
      <Button variant="contained" onClick={handleReset}>
        <Typography>Reset</Typography>
      </Button>
    </Grid>
  );
};

export default MoreFilters;
