/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { toast } from 'react-toastify';
import { getHeaders, setHeaders, clearHeaders } from './common';

const baseApi = 'https://travel-fast-bk.herokuapp.com/api/v1';

export const instance = axios.create({
  baseURL: baseApi,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const header = getHeaders();
    if (header) {
      const {
        authorization,
      } = header;
      config.headers.authorization = authorization ? `Bearer ${authorization}` : '';
    }
    return config;
  },
  (error) => Promise.reject(error),
);

const loginHandleError = (error) => {
  if (error?.response?.status === 401 || error?.response?.status === 422) {
    error.response?.data?.errors?.forEach((msg) => toast.error(msg));
  } else {
    toast.error('Server error. Please try again later');
  }
};

export const postRequest = async (url, body) => {
  const { data, headers } = await instance.post(url, body);
  return { data, headers };
};

export const signup = async (formData) => {
  const res = await postRequest('/signup', formData);
  setHeaders(res.data.data.id);
  return res.data.data;
};

export const signIn = async (formData) => {
  const res = await postRequest('/signin', formData);
  setHeaders(res.data.data.id);
  return res.data.data;
};

export const logOut = () => {
  try {
    clearHeaders();
    toast.success('You have successfully logged out');
  } catch (error) {
    error.status = 500;
    loginHandleError(['An error ocurred']);
  }
};

export const fetchCars = async () => {
  try {
    const res = await instance.get('/cars');
    return res.data.data;
  } catch (error) {
    return loginHandleError(error);
  }
};

export const fetchCar = async (id) => {
  try {
    const res = await instance.get(`/cars/${id}`);
    return res.data.data;
  } catch (error) {
    return loginHandleError(error);
  }
};

export const addCar = async (formData) => {
  try {
    const res = await postRequest('/cars', formData);
    return res.data.data;
  } catch (error) {
    return loginHandleError(error);
  }
};
