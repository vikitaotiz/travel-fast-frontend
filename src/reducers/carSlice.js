/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
};

export const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    getAllCars: (state, { payload }) => {
      state.cars = payload;
    },
  },
});

export const { getAllCars } = carSlice.actions;

export const selectCars = (state) => state.cars.cars;

export default carSlice.reducer;
