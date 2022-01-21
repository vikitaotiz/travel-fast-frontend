/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import FormContainer from './FormContainer';
import Form from '../components/Form';
import { reserveCar, fetchCars } from '../services/request';
import { getHeaders } from '../services/common';

const schema = yup.object().shape({
  car: yup.string().required('Car is required'),
  city: yup.string().required('City is required'),
  startDate: yup.date().required('Pick up date is required'),
  endDate: yup.date().required('Due date is required'),
});

const ReserveForm = () => {
  const history = useNavigate();
  const [cars, setCars] = useState([]);
  const {
    register, handleSubmit, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  useEffect(() => {
    const getAllCars = async () => {
      const res = await fetchCars();
      setCars(res);
    };

    getAllCars();
  }, []);

  const handleOnsubmit = async (reservation) => {
    const { userId } = getHeaders();
    const {
      car, city, startDate, endDate,
    } = reservation;
    const submitBtn = document.querySelector('button[type="submit"]');
    const currentDate = new Date();
    const reserveDate = new Date(startDate);
    const dueDate = new Date(endDate);
    if (reserveDate < currentDate || reserveDate > dueDate) {
      submitBtn.ariaDisabled = false;
      submitBtn.disabled = false;
      return toast.error('Invalid pick up date');
    }
    if (dueDate < currentDate || ((dueDate - reserveDate) / 60000) < 15) {
      submitBtn.ariaDisabled = false;
      submitBtn.disabled = false;
      return toast.error('Invalid due date. Due date must be at least 15 minutes away from pick up date');
    }

    submitBtn.ariaDisabled = true;
    submitBtn.disabled = true;
    try {
      const res = await reserveCar({
        car_id: car, city, start_date: startDate, end_date: endDate, user_id: userId,
      });
      if (res?.id) {
        toast.success('Car Reserved');
        return history('/reservations');
      }
      return null;
    } catch (error) {
      submitBtn.ariaDisabled = false;
      submitBtn.disabled = false;
      return toast.error(error.response.data.message);
    }
  };
  return (
    <div className="max-width">
      <FormContainer title="Reserve Car">
        <Form handleSubmit={handleSubmit(handleOnsubmit)}>
          <div className="form-group">
            <span>Car</span>
            <select {...register('car')} defaultValue={null} id="car" name="car" className="form-select" aria-label="Select car">
              <option className="car-li" value={null}>Choose car</option>
              {cars?.map(({ name, id }) => (
                <option key={id} className="car-li" value={id}>{name}</option>
              ))}
            </select>
            <small className="text-danger">{errors?.car?.message}</small>
          </div>
          <div className="form-group">
            <span>City</span>
            <input {...register('city')} type="text" className="form-control" id="city" name="city" />
            <small className="text-danger">{errors?.city?.message}</small>
          </div>
          <div className="form-group">
            <span>Pick up date</span>
            <input {...register('startDate')} type="datetime-local" className="form-control" id="startDate" name="startDate" />
            <small className="text-danger">{errors?.startDate?.message}</small>
          </div>
          <div className="form-group">
            <span>Due Return Date</span>
            <input {...register('endDate')} type="datetime-local" className="form-control" id="endDate" name="endDate" />
            <small className="text-danger">{errors?.endDate?.message}</small>
          </div>
          <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default ReserveForm;
