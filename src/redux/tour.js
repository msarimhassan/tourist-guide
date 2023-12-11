import { createSlice } from '@reduxjs/toolkit';

export const tourSlice = createSlice({
  name: 'tour',
  initialState: {
    tours: [],
  },
  reducers: {
    AddTour: (state, action) => {
      state.tours.push(action.payload);
    },
  },
});

export const { AddTour } = tourSlice.actions;

export default tourSlice.reducer;
