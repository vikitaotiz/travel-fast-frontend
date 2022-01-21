/* eslint-disable func-names */
/* eslint-disable react/jsx-props-no-spreading */
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

import FormContainer from './FormContainer';
import Form from '../components/Form';
import { registerSuccess } from '../reducers/userSlice';
import { signup } from '../services/request';
import { clearHeaders } from '../services/common';
import Header from '../components/Header';

const schema = yup.object().shape({
  username: yup.string().required('Username is required').min(3, 'Username must have at least 3 characters').max(50, 'Username must not exceed 50 characters'),

  name: yup.string().required('Name is required').min(3, 'Name must have at least 3 characters').max(50, 'Name must not exceed 50 characters'),

  email: yup.string().email().required('Email is required'),
});

const Register = () => {
  const dispatch = useDispatch();
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
      const res = await signup(data);
      dispatch(registerSuccess(res));
      history('/cars');
      toast.success('Account created successfully');
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
      <FormContainer title="Register">
        <Form handleSubmit={handleSubmit(handleFormSubmit)}>
          <div className="form-group">
            <span>Name</span>
            <input {...register('name')} type="text" className="form-control" id="name" name="name" />
            <small className="text-danger">{errors?.name?.message}</small>
          </div>
          <div className="form-group">
            <span>Username</span>
            <input {...register('username')} type="text" className="form-control" id="username" name="username" />
            <small className="text-danger">{errors?.username?.message}</small>
          </div>
          <div className="form-group">
            <span>Email</span>
            <input {...register('email')} type="email" className="form-control" id="email" name="email" />
            <small className="text-danger">{errors?.email?.message}</small>
          </div>
          <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default Register;
