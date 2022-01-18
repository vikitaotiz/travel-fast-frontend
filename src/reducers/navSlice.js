/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    changeSideBarState: (state, { payload }) => {
      console.log(payload);
      state.status = payload.status;
    },
  },
});

export const { changeSideBarState } = navSlice.actions;

export const selectNav = (state) => state.nav.status;

export default navSlice.reducer;
