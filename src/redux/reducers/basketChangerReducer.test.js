import { ADD_TO_BASKET,
    DELETE_FROM_BASKET } from "../actions";
import { basketChangerReducer } from "./basketChangerReducer";
    
    const defaultState = {cart: []};
    
    describe('basketChangerReducer', () => {
      test('should return the initial state', () => {
        expect(basketChangerReducer(undefined, {})).toEqual(defaultState);
      });
    
      test('should handle ADD_TO_BASKET', () => {
        const payload = {articul: 1, name: 'Test Product', amount: 1};
        const initialState = {cart: [{articul: 2, name: 'Another Product', amount: 2}]};
        const expectedState = {cart: [...initialState.cart, {...payload, amount: 1}]};
        expect(basketChangerReducer(initialState, {type: ADD_TO_BASKET, payload})).toEqual(expectedState);
      });
    
      test('should handle DELETE_FROM_BASKET', () => {
        const payload = {articul: 1, name: 'Test Product', amount: 1};
        const initialState = {cart: [payload, {articul: 2, name: 'Another Product', amount: 2}]};
        const expectedState = {cart: [{articul: 2, name: 'Another Product', amount: 2}]};
        expect(basketChangerReducer(initialState, {type: DELETE_FROM_BASKET, payload})).toEqual(expectedState);
      });
    
      test('should handle CHANGE_AMOUNT_BASKET', () => {
        const payload = {product: {articul: 1, name: 'Test Product', amount: 1}, amount: 3};
        const initialState = {cart: [payload.product, {articul: 2, name: 'Another Product', amount: 2}]};
        const expectedState = {cart: [{articul: 1, name: 'Test Product', amount: 3}, {articul: 2, name: 'Another Product', amount: 2}]};
        expect(basketChangerReducer(initialState, {type: 'CHANGE_AMOUNT_BASKET', payload})).toEqual(expectedState);
      });
    
      test('should handle CLEAR_BASKET_IN_LOCAL_STORE', () => {
        const initialState = {cart: [{articul: 1, name: 'Test Product', amount: 1}, {articul: 2, name: 'Another Product', amount: 2}]};
        const expectedState = {cart: []};
        expect(basketChangerReducer(initialState, {type: 'CLEAR_BASKET_IN_LOCAL_STORE'})).toEqual(expectedState);
      });
    });
    