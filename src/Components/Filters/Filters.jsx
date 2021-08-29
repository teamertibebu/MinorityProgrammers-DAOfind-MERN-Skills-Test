import React, { useState, useEffect } from 'react';
import { Grid, Button, Typography } from '@material-ui/core';
import './Filters.css';
import MoreFilters from '../MoreFilters/MoreFilters';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import FilterListIcon from '@material-ui/icons/FilterList';

const filters = [
  'All',
  'Protocol',
  'Service',
  'Grant',
  'Media',
  'Social',
  'Investment',
  'Platform',
  'Collector',
];

const Filters = ({ setAllDaos, setTotalAum, setNumOfDaos }) => {
  const [category, setCategory] = useState('All');
  const [windowSize, setWindowSize] = useState();
  const [display, setDisplay] = useState('');

  const reportWindowSize = (e) => {
    setWindowSize(e.target.innerWidth);
    return e.target.innerWidth < 818 ? setDisplay('none') : setDisplay('');
  };

  useEffect(() => {
    window.addEventListener('resize', reportWindowSize);

    return () => {
      window.removeEventListener('resize', reportWindowSize);
    };
  });

  const handleFilter = (e, filter) => {
    setCategory(filter);
  };

  return (
    <Grid container item justifyContent="center" id="filterContainer">
      <ToggleButtonGroup
        size={windowSize <= 1089 ? 'small' : 'large'}
        value={category}
        exclusive
        style={{ display }}
        onChange={handleFilter}
        id="filterBar"
      >
        {filters.map((filter) => {
          return (
            <ToggleButton value={filter} key={filter}>
              {filter}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
      <MoreFilters
        category={category}
        setAllDaos={setAllDaos}
        setCategory={setCategory}
        setNumOfDaos={setNumOfDaos}
        setTotalAum={setTotalAum}
      />
    </Grid>
  );
};

export default Filters;
