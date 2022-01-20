/* eslint-disable camelcase */
import { useState, useEffect } from 'react';
import { getReservations } from '../services/request';
import { getHeaders } from '../services/common';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const { userId } = getHeaders();
  useEffect(() => {
    const fetchReservations = async () => {
      const res = await getReservations(userId);
      setReservations(res);
    };

    fetchReservations();
  }, []);

  return (
    <div className="">
      <h3 className="text-center my-4 fw-bolder page-header">Reservations </h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">City</th>
            <th scope="col">Car Name</th>
            <th scope="col">Pick Up Date</th>
            <th scope="col">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map(({
            start_date, end_date, car_id, car_name, city,
          }) => (
            <tr key={car_id}>
              <td>{city}</td>
              <td>{car_name}</td>
              <td>
                {new Date(start_date).toDateString()}
                {' '}
                {new Date(start_date).toLocaleTimeString()}
              </td>
              <td>
                {new Date(end_date).toDateString()}
                {' '}
                {new Date(end_date).toLocaleTimeString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reservations;
