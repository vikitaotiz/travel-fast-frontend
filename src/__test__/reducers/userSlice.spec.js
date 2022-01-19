import {
  registerSuccess, loginSuccess,
} from '../../reducers/userSlice';
import store from '../../store';

describe('User Slice', () => {
  test('should set a registered user in the store', async () => {
    const user = {
      id: 1,
      name: 'ade',
      username: 'walesdam',
      email: 'team@ecomexperts.ca',
    };

    expect(store.getState().user.user).toEqual({});
    store.dispatch(registerSuccess(user));
    expect(store.getState().user.user).toEqual(user);
  });

  test('should set a registered user in the store', async () => {
    const user = {
      username: 'walesdam',
    };

    store.dispatch(loginSuccess(user));
    expect(store.getState().user.user).toEqual(user);
  });
});
