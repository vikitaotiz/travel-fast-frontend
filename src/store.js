import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import SideBarReducer from './reducers/navSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    nav: SideBarReducer,
  },
});
