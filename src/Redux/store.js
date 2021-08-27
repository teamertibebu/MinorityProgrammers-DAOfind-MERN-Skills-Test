import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';

export default configureStore({
  reducer: {
    searchTerm: searchReducer,
  },
});
