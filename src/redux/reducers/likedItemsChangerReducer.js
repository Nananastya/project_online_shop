import { ADD_TO_LIKED, 
    DELETE_FROM_LIKED } from "../actions";

export function likedItemsChangerReducer(state = JSON.parse(localStorage.getItem('likedItems')) || [], action) {
    switch (action.type) {
        case ADD_TO_LIKED:
            return [...state, action.payload];
        case DELETE_FROM_LIKED:
            state = JSON.parse(localStorage.getItem('likedItems')).filter(product => product.articul !== action.payload.articul);
            return state;
        default:
            return state
    }
}