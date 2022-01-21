import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Booking from '../pages/Booking';
import Cars from '../pages/Cars';
import Car from '../pages/Car';
import Reservations from '../pages/Reservation';
import ReserveCar from '../pages/Reserve';
import NewCar from '../pages/NewCar';
import ProtectedRoute from './ProtectedRoute';

const App = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route element={<ProtectedRoute />}>
      <Route exact path="/cars" element={<Cars />} />
      <Route exact path="/cars/:carId" element={<Car />} />
      <Route exact path="/cars/:cardId/booking" element={<Booking />} />
      <Route path="/reservations" element={<Reservations />} />
      <Route path="/reserve" element={<ReserveCar />} />
      <Route path="/new-car" element={<NewCar />} />
    </Route>
  </Routes>
);

export default App;
