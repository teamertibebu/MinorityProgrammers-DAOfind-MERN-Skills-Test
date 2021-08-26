import React from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
  return (
    <TextField
      className="search"
      type="text"
      variant="outlined"
      label="Search"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
