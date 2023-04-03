import { likedItemsChangerReducer } from './likedItemsChangerReducer';
import { ADD_TO_LIKED, DELETE_FROM_LIKED } from '../actions';

describe('likedItemsChangerReducer', () => {
  test('should return the initial state', () => {
    const expectedState = [];
    const result = likedItemsChangerReducer(undefined, {});
    expect(result).toEqual(expectedState);
  });

  test('should handle ADD_TO_LIKED', () => {
    const product = { articul: '123', name: 'Product 1' };
    const action = { type: ADD_TO_LIKED, payload: product };
    const expectedState = [product];
    const result = likedItemsChangerReducer([], action);
    expect(result).toEqual(expectedState);
  });

  test('should handle DELETE_FROM_LIKED', () => {
    const products = [
      { articul: '123', name: 'Product 1' },
      { articul: '456', name: 'Product 2' }
    ];
    localStorage.setItem('likedItems', JSON.stringify(products));
    const action = { type: DELETE_FROM_LIKED, payload: { articul: '456' } };
    const expectedState = [{ articul: '123', name: 'Product 1' }];
    const result = likedItemsChangerReducer(products, action);
    expect(result).toEqual(expectedState);
  });
});
