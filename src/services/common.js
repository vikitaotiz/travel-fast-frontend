import { localStorageKey } from './constants';

export const getHeaders = () => (
  localStorage.getItem(localStorageKey) ? JSON.parse(localStorage.getItem(localStorageKey)) : null
);

export const setHeaders = (id) => {
  const body = { userId: id };
  localStorage.setItem(localStorageKey, JSON.stringify(body));
};

export const clearHeaders = () => localStorage.removeItem(localStorageKey);
