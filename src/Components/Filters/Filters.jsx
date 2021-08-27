import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import './Filters.css';
import MoreFilters from '../MoreFilters/MoreFilters';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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

  const handleFilter = (e, filter) => {
    setCategory(filter);
  };

  return (
    <Grid
      container
      item
      justifyContent="center"
      style={{
        padding: '10px',
      }}
    >
      <ToggleButtonGroup
        size="large"
        value={category}
        exclusive
        onChange={handleFilter}
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
