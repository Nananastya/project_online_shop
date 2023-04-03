import { combineReducers } from 'redux'
import { basketChangerReducer } from './basketChangerReducer';
import { modalWindowShowReducer } from './modalWindowShowReducer';
import { likedItemsChangerReducer } from './likedItemsChangerReducer';
import { productsReducer } from './productsReducer';

export const rootReducer = combineReducers({
    basket: basketChangerReducer,
    show: modalWindowShowReducer,
    likedItems: likedItemsChangerReducer,
    products: productsReducer
})