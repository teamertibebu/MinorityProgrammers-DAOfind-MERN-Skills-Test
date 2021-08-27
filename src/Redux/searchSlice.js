import { createSlice } from '@reduxjs/toolkit';

export const updateSearch = createSlice({
  name: 'searchTerm',
  initialState: '',
  reducers: {
    searchTerm: (state, action) => action.payload,
  },
});

export const { searchTerm } = updateSearch.actions;

export default updateSearch.reducer;
