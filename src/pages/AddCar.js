/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import FormContainer from './FormContainer';
import Form from '../components/Form';
import { loginSuccess } from '../reducers/userSlice';
import { addCar } from '../services/request';

const schema = yup.object().shape({
  name: yup.string().required('Car name is required'),
  image: yup.string().required('Car image is required'),
  description: yup.string().required('Car description is required'),
  seats: yup.number('Seats should be a number').integer().min(3, 'Minimum of 3 seats must be available').required('Number of seats is required'),
  price: yup.number('Price should be a number').integer().min(1, 'Minimum price is 1 naira').required('Price is required'),
  duration: yup.number('Duration should be a number').integer().min(1, 'Minimum minimum duration is an hour').required('Duration is required'),
});

const AddCar = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const handleOnsubmit = async (userObj) => {
    const {
      name, description, seats, price, duration, image,
    } = userObj;

    try {
      const res = await addCar({
        name, description, seats, price, duration, image,
      });
      dispatch(loginSuccess(res));
      toast.success('Car Added !!');
      history('/cars');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="max-width">
      <FormContainer title="New Car Form">
        <Form handleSubmit={handleSubmit(handleOnsubmit)}>
          <div className="form-group">
            <span>Car Name</span>
            <input {...register('name')} type="text" className="form-control" id="name" name="name" />
            <small className="text-danger">{errors?.name?.message}</small>
          </div>
          <div className="form-group">
            <span>Car Description</span>
            <input {...register('description')} type="text" className="form-control" id="description" name="description" />
            <small className="text-danger">{errors?.description?.message}</small>
          </div>
          <div className="form-group">
            <span>Car Image Url</span>
            <input {...register('image')} type="text" className="form-control" id="image" name="image" />
            <small className="text-danger">{errors?.image?.message}</small>
          </div>
          <div className="form-group">
            <span>Seats</span>
            <input {...register('seats')} type="number" className="form-control" id="seats" name="seats" />
            <small className="text-danger">{errors?.seats?.message}</small>
          </div>
          <div className="form-group">
            <span>Price</span>
            <input {...register('price')} type="number" className="form-control" id="price" name="price" />
            <small className="text-danger">{errors?.price?.message}</small>
          </div>
          <div className="form-group">
            <span>Duration</span>
            <input {...register('duration')} type="number" className="form-control" id="duration" name="duration" />
            <small className="text-danger">{errors?.duration?.message}</small>
          </div>
          <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default AddCar;
