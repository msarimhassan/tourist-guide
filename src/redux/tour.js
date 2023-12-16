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

    removeTour: (state, action) => {
      state.tours = [];
    },
  },
});

export const { AddTour, removeTour } = tourSlice.actions;

export default tourSlice.reducer;
