import { configureStore } from '@reduxjs/toolkit';
import dashboradReducer from './dashboradSlice'; // Default import

export const store = configureStore({
  reducer: {
    dashborad: dashboradReducer, // Use the imported reducer
  },
});
