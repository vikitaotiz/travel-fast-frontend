import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import CarReducer from './reducers/carSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    cars: CarReducer,
  },
});
