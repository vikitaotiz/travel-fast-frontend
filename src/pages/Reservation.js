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
      <h3 className="text-center my-4">Reservations </h3>
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
            start_date, end_date, car_id, city_id,
          }) => (
            <tr key={car_id}>
              <td>{city_id}</td>
              <td>{car_id}</td>
              <td>{new Date(start_date).toString()}</td>
              <td>{new Date(end_date).toString()}</td>
            </tr>
          ))}

          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Reservations;
