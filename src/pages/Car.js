// import { Navigate } from 'react-router';
// import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
// import { FaBars } from 'react-icons/fa';
import { getOneCar, selectCar } from '../reducers/carSlice';
import { fetchCars } from '../services/request';

const Car = () => {
  const dispatch = useDispatch();
  const car = useSelector(selectCar);
  const params = useParams();
  useEffect(() => {
    const fetchACar = async () => {
      const cars = await fetchCars();
      const car = cars.find(({ id }) => id === parseInt(params.carId, 10));
      dispatch(getOneCar(car));
    };
    fetchACar();
  }, []);

  return (
    <div className="d-block d-md-flex w-100 px-3">
      <div className="car-main-image">
        <img src={car?.image} alt="Selected Car" />
      </div>
      <div className="car-info">
        <h3 className="text-end">{car?.name}</h3>
        <p className="text-end">{car?.description}</p>
        <ul className="list-group list-group-flush">
          <li className="d-flex justify-content-between list-group-item list-group-item-dark">
            <span>Price</span>
            {' '}
            <span>{car?.price}</span>
          </li>
          <li className="d-flex justify-content-between list-group-item">
            <span>Seats</span>
            {' '}
            <span>{car?.seats}</span>
          </li>
          <li className="d-flex justify-content-between list-group-item list-group-item-dark">
            <span>Duration</span>
            {' '}
            <span>{car?.duration}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Car;
