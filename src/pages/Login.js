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
import { signIn } from '../services/request';
import Header from '../components/Header';

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const handleOnsubmit = async (userObj) => {
    const { username } = userObj;

    try {
      const res = await signIn({ username });
      dispatch(loginSuccess(res));
      toast.success('Welcome back');
      history('/cars');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="max-width">
      <Header hide />
      <FormContainer title="Login">
        <Form handleSubmit={handleSubmit(handleOnsubmit)}>
          <div className="form-group">
            <span>Username</span>
            <input {...register('username')} type="text" className="form-control" id="username" name="username" />
            <small className="text-danger">{errors?.username?.message}</small>
          </div>
          <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default Login;
