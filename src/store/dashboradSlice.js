import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const dashboradSlice = createSlice({
  name: 'dashborad',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Default export for the reducer
export default dashboradSlice.reducer;

// Named export for actions
export const { setData } = dashboradSlice.actions;
