import { localStorageKey } from './constants';

export const getHeaders = () => (
  localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)) : null
);

export const setHeaders = (token) => {
  const body = { authorization: token };
  localStorage.setItem(localStorageKey, JSON.stringify(body));
};

export const clearHeaders = () => localStorage.removeItem(localStorageKey);
