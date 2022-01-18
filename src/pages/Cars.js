// import { Navigate } from 'react-router';
// import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { FaBars } from 'react-icons/fa';
import Carousel from '../components/Carousel'
import { getAllCars, selectCars } from '../reducers/carSlice';
import { fetchCars } from '../services/request';

const Cars = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  console.log(cars);
  useEffect(() => {
    const fetchAllCars = async () => {
      const cars = await fetchCars();
      dispatch(getAllCars(cars))
    }
    fetchAllCars();
  }, [])

  return (
    <div className="page">
      <div className="headers">
        <h1 className="page-header">Trending Cars</h1>
        <p>One stop car purchase.</p>
      </div>
      <Carousel cars={cars} />
    </div>
  );
};

export default Cars;
