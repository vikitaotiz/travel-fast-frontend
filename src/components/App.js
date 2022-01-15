import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Booking from '../pages/Booking';
import Cars from '../pages/Cars';
import Car from '../pages/Car';
import Reservations from '../pages/Reservations';

const App = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route exact path="/cars" element={<Cars />} />
    <Route exact path="/cars/:carId" element={<Car />} />
    <Route exact path="/cars/:cardId/booking" element={<Booking />} />
    <Route path="reservations" element={<Reservations />} />
  </Routes>
);

export default App;
