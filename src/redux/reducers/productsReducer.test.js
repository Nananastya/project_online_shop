import { productsReducer } from './productsReducer';
import { GET_PRODUCTS_FROM_JSON } from '../actions';

describe('productsReducer', () => {
  const initialState = {
    products: [],
    isLoading: false,
  };

  test('should return the initial state', () => {
    expect(productsReducer(undefined, {})).toEqual(initialState);
  });

  test('should handle GET_PRODUCTS_FROM_JSON', () => {
    const products = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
    const action = {
      type: GET_PRODUCTS_FROM_JSON,
      payload: { products },
    };
    const expectedState = { products, isLoading: false };
    expect(productsReducer(initialState, action)).toEqual(expectedState);
  });

  test('should handle GET_PRODUCTS_FROM_JSON_REQUEST', () => {
    const action = { type: 'GET_PRODUCTS_FROM_JSON_REQUEST' };
    const expectedState = { products: [], isLoading: true };
    expect(productsReducer(initialState, action)).toEqual(expectedState);
  });
});
