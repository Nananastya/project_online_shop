import { GET_PRODUCTS_FROM_JSON } from "../actions";
import { useDispatch } from "react-redux";

export function productsReducer(state = {products: [], isLoading: false}, action) {
    switch (action.type) {
        case GET_PRODUCTS_FROM_JSON:
            return {...state, products: action.payload.products, isLoading: false};
        case 'GET_PRODUCTS_FROM_JSON_REQUEST':
            return {...state, isLoading: true};
        default:
            return state
    }
}