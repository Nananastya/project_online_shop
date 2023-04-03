import { ADD_TO_BASKET,
DELETE_FROM_BASKET } from "../actions";

const defaultState =  {cart: JSON.parse(localStorage.getItem('basket')) === null ? [] : JSON.parse(localStorage.getItem('basket'))};

export function basketChangerReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            let isInBasket = state.cart.some((el) => {
                return (el.articul === action.payload.articul);
            })
            if(!isInBasket){
                return {...state, cart: [...state.cart, {...action.payload, amount: 1}]};
            }
            else{
                return {...state, cart: state.cart.map((el) => {
                    if(el.articul !== action.payload.articul){
                        return el;
                    }
                    if(Number(el.amount) === 30){
                        return el;
                    }
                    return {...el, amount: Number(el.amount) + 1};
                })};
            }
        case DELETE_FROM_BASKET:
            return {...state, cart: state.cart.filter(product => product.articul !== action.payload.articul)};
        case 'CHANGE_AMOUNT_BASKET':
            return {
                ...state,
                cart: state.cart.map((product) => {
                    if (product.articul === action.payload.product.articul) {
                        return { ...product, amount: action.payload.amount };
                    }
                    return product;
                })
        };
        case 'CLEAR_BASKET_IN_LOCAL_STORE':
            localStorage.setItem('basket', '[]');
            return {
                ...state,
                cart: []
            }
        default:
            return state;
    }
}