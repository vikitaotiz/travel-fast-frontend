/* eslint-disable func-names */
/* eslint-disable react/jsx-props-no-spreading */
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

import FormContainer from './FormContainer';
import Form from '../components/Form';
import { addCar } from '../services/request';
import { clearHeaders } from '../services/common';
import Header from '../components/Header';

const schema = yup.object().shape({
  name: yup.string().required('Car name is required').min(3, 'Username must have at least 3 characters').max(50, 'Username must not exceed 50 characters'),

  description: yup.string().required('Car description is required').min(3, 'Car description must have at least 3 characters').max(50, 'Car description must not exceed 50 characters'),

  price: yup.number().min(1, 'Car price can not be les than one').required('Car price is required'),
  image: yup.string().required('Car image url is required'),
  duration: yup.number().min(1, 'Duration can not be les than one hour').required('Duration is required'),
  seats: yup.number().min(2, 'Car seats must be at least two').required('Car seats is required'),
});

const NewCar = () => {
  const history = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const handleFormSubmit = async (data) => {
    const submitBtn = document.querySelector('button[type="submit"]');
    submitBtn.ariaDisabled = true;
    submitBtn.disabled = true;

    try {
      await addCar(data);
      history('/cars');
      toast.success('Car added successfully');
    } catch (error) {
      submitBtn.ariaDisabled = false;
      submitBtn.disabled = false;
      clearHeaders();
      if (error.response.status === 422) {
        error.response.data.errors.full_messages.forEach((msg) => toast.error(msg));
      } else {
        toast.error('Server error. Please try again later');
      }
    }
  };

  return (
    <div className="max-width">
      <Header hide />
      <FormContainer title="Add Car">
        <Form handleSubmit={handleSubmit(handleFormSubmit)}>
          <div className="form-group">
            <span>Car Name</span>
            <input {...register('name')} type="text" className="form-control" id="name" name="name" />
            <small className="text-danger">{errors?.name?.message}</small>
          </div>
          <div className="form-group">
            <span>Description</span>
            <input {...register('description')} type="text" className="form-control" id="description" name="description" />
            <small className="text-danger">{errors?.description?.message}</small>
          </div>
          <div className="form-group">
            <span>Price</span>
            <input {...register('price')} type="number" className="form-control" id="price" name="price" />
            <small className="text-danger">{errors?.price?.message}</small>
          </div>
          <div className="form-group">
            <span>Image Url</span>
            <input {...register('image')} type="text" className="form-control" id="image" name="image" />
            <small className="text-danger">{errors?.image?.message}</small>
          </div>
          <div className="form-group">
            <span>Duration</span>
            <input {...register('duration')} type="number" className="form-control" id="duration" name="duration" />
            <small className="text-danger">{errors?.duration?.message}</small>
          </div>
          <div className="form-group">
            <span>Seats</span>
            <input {...register('seats')} type="number" className="form-control" id="seats" name="seats" />
            <small className="text-danger">{errors?.seats?.message}</small>
          </div>
          <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default NewCar;
