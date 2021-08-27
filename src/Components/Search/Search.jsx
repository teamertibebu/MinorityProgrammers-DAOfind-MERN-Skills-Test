import React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { searchTerm } from '../../Redux/searchSlice';

const Search = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(searchTerm(e.target.value));
  };

  return (
    <TextField
      className="search"
      type="text"
      variant="outlined"
      label="Search"
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      onChange={handleChange}
    />
  );
};

export default Search;
