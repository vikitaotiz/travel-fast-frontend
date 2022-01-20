/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cars: [],
  car: {},
};

export const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    getAllCars: (state, { payload }) => {
      state.cars = payload;
    },

    getOneCar: (state, { payload }) => {
      state.car = payload;
    },
  },
});

export const { getAllCars, getOneCar } = carSlice.actions;

export const selectCars = (state) => state.cars.cars;
export const selectCar = (state) => state.cars.car;

export default carSlice.reducer;
