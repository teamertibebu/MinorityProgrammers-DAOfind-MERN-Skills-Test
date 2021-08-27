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

const MoreFilters = ({ allDaos, setAllDaos }) => {
  const [TVL, setTVL] = useState('');
  const [blockchain, setBlockchain] = useState('');
  const [date_founded, setDateFounded] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setAllDaos((daos) => {
      const valueOption = {
        blockchain,
        date_founded,
        TVL,
      };
      const value = valueOption[filter];
      return daos.filter((dao) => {
        return dao[filter] == value;
      });
    });
  }, [filter, TVL, blockchain, date_founded]);

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
    (async () => {
      const { data } = await axios.get('/daoList');
      setAllDaos(data);
    })();
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
