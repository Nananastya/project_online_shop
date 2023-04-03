import { createContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ADD_TO_BASKET,
  DELETE_FROM_BASKET,
  ADD_TO_LIKED, 
  DELETE_FROM_LIKED} from "../redux/actions";

export const FunctionContext = createContext(null);

export const FunctionProvider = ({children}) => {
    const basket = useSelector(state => state.basket.cart);
    const likedItems = useSelector(state => state.likedItems);
    const dispatch = useDispatch();
  
    useEffect(() => {
      localStorage.setItem("likedItems", JSON.stringify(likedItems));
    }, [likedItems])
  
    useEffect(() => {
      localStorage.setItem("basket", JSON.stringify(basket));
    }, [basket])
    
    function basketUser(item){
      dispatch({type: ADD_TO_BASKET, payload: item});
      dispatch(saveNewAmountOfProducts());
    }

    const saveNewAmountOfProducts = () => {
      return (dispatch, getState) => {
          const newBasket = getState().basket;
          localStorage.setItem("basket", JSON.stringify(newBasket));
      };
    };

    function changeAmount(item, amount){
      dispatch({type: 'CHANGE_AMOUNT_BASKET', payload: {product: item, amount: amount}});
      dispatch(saveNewAmountOfProducts());
    }
  
    function deleteFromBasketUser(item){
      dispatch({type: DELETE_FROM_BASKET, payload: item});
      dispatch(saveNewAmountOfProducts());
    }
    function likedProduct(item){
      dispatch({type: ADD_TO_LIKED, payload: item});
    }
    function unlikedProduct(item){
      dispatch({type: DELETE_FROM_LIKED, payload: item});
    }

    const value = {basket, likedItems, basketUser, deleteFromBasketUser, likedProduct, unlikedProduct, changeAmount, saveNewAmountOfProducts}

    return (
      <FunctionContext.Provider value={value}>
        {children}
      </FunctionContext.Provider>
    )
}