import {
  setHeaders, getHeaders, clearHeaders,
} from '../../services/common';
import { localStorageKey } from '../../services/constants';

describe('Should store request headers values', () => {
  const headers = { userId: 9};
  test('should save the  headers in localstorage', () => {
    setHeaders(headers);
    expect(localStorage.getItem(localStorageKey)).toBeTruthy();
    expect(localStorage.getItem(localStorageKey)).not.toBeFalsy();
  });

  test('should get the headers in localstorage', () => {
    const headers = { userId: 9};

    setHeaders(headers);
    const retrievedHeaders = getHeaders();
    expect(retrievedHeaders).toBeTruthy();
    expect(retrievedHeaders).not.toBeFalsy();
    expect(retrievedHeaders).not.toEqual({});
  });

  test('should clear the headers in localstorage', () => {
    const headers = {
      token: 'oioinoino', uid: 'effef', client: 'fewff', 'token-type': 'Bearer',
    };

    setHeaders(headers);
    clearHeaders();
    const retrievedHeaders = getHeaders();
    expect(retrievedHeaders).toBeFalsy();
    expect(retrievedHeaders).not.toEqual(headers);
  });
});
