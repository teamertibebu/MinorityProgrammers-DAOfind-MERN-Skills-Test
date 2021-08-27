import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core';
import './Filters.css';
import FilterListIcon from '@material-ui/icons/FilterList';
import axios from 'axios';
import MoreFilters from '../MoreFilters/MoreFilters';

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
  'More',
];

const Filters = ({ setAllDaos }) => {
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const handleFilter = async (filter) => {
    if (filter === 'More') {
      setShowMoreFilters(!showMoreFilters);
      return;
    }

    const { data: filteredDaos } = await axios.get(`/filter/${filter}`);
    setAllDaos(filteredDaos);
  };

  return (
    <Grid
      container
      item
      justifyContent="space-between"
      style={{
        padding: '10px',
      }}
    >
      {filters.map((filter) => {
        return (
          <Grid item key={filter}>
            <Button
              size="large"
              variant="outlined"
              className="button"
              onClick={handleFilter.bind(this, filter)}
            >
              {filter !== 'More' ? filter : <FilterListIcon />}
            </Button>
          </Grid>
        );
      })}
      {showMoreFilters ? <MoreFilters /> : null}
    </Grid>
  );
};

export default Filters;
