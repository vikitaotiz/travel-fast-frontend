import {
  getOneCar, getAllCars,
} from '../../reducers/carSlice';
import store from '../../store';

describe('Car Slice', () => {
  test('should set car in the store', async () => {
    const car = {
      name: 'ferrari',
      description: 'strong',
      price: 30000,
      image_url: 'imageurl',
      duration: 5,
      seats: 4,
    };

    expect(store.getState().cars.car).toEqual({});
    store.dispatch(getOneCar(car));
    expect(store.getState().cars.car).toEqual(car);
  });

  test('should set readings in the store', async () => {
    const cars = [{
      name: 'ferrari',
      description: 'strong',
      price: 30000,
      image_url: 'imageurl',
      duration: 5,
      seats: 4,
    }];

    store.dispatch(getAllCars(cars));
    expect(store.getState().cars.cars).toEqual(cars);
  });
});
