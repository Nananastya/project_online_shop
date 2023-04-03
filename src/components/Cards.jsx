import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import ButtonModal from './ButtonModal';
import ModalWindow from './ModalWindow';
import CardInfo from "./CardInfo";
import { useFunction } from '../hook/useFunction';
import { useSelector, useDispatch } from 'react-redux';
import { MODAL_WINDOW_SHOW_TRUE, 
    MODAL_WINDOW_SHOW_FALSE,
    GET_PRODUCTS_FROM_JSON } from "../redux/actions";
import { ListContext } from "./Layout";


    const productsThunk = () => {
        return (dispatch, getState) => {
            dispatch({type: 'GET_PRODUCTS_FROM_JSON_REQUEST'});
            fetch('./products.json')
                .then(response => response.json())
                .then(data => {
                    dispatch({type: GET_PRODUCTS_FROM_JSON, payload: {products: data.products}});
                    
                })
                .catch(error => console.error(error)); 
        }
      }

export default function Cards() {
    const {list} = useContext(ListContext);
    const [lastChosenProduct, setLastChosenProduct] = useState({});
    const {basketUser} = useFunction();
    const {likedItems} = useFunction();
    const {unlikedProduct} = useFunction();
    const {likedProduct} = useFunction();
    const products = useSelector(state => state.products.products);
    const show = useSelector(state => state.show);
    const isLoading = useSelector(state => state.products.isLoading);
    const activeClass = list ? 'cards-list' : 'cards';
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsThunk());
    }, [dispatch])

    let firstModalButtons = 
        <>
            <Button className='modal-button-left' onClick={ () => {
                basketUser(lastChosenProduct);
                dispatch({type: MODAL_WINDOW_SHOW_FALSE});
            }}>
                Ok
            </Button>
            <Button className='modal-button-right' onClick={() => {dispatch({type: MODAL_WINDOW_SHOW_FALSE});}}>
                No
            </Button>
        </>


        const textFirstModal = "Are you sure you want to add this product to the cart?";
        const headerFirstModal = "Do you want to delete this file?";
        return (
            <div>
                <ModalWindow
                header={headerFirstModal}
                text={textFirstModal}
                closeButton={true}
                color="red"
                actions={firstModalButtons}
                handleShow={() => {dispatch({type: MODAL_WINDOW_SHOW_TRUE});}}
                handleClose={() => {dispatch({type: MODAL_WINDOW_SHOW_FALSE});}}
                show1={show}
                lastChosenProduct={lastChosenProduct}
                />
            
                <div className={activeClass}>
                    {isLoading && <h1>Loading...</h1>}
                    {products.map((product) => (
                            <CardInfo 
                            key={product.articul}
                            product={product}
                            likedItems={likedItems}
                            likedProduct={likedProduct}
                            unlikedProduct={unlikedProduct}
                            class="card"
                            button={
                                <ButtonModal
                                    backgroundColor={
                                        {
                                            backgroundColor: "red",
                                            border: 0,
                                        }
                                    }
                                    text={"Add to the cart"}
                                    onClick={()=>{
                                        dispatch({type: MODAL_WINDOW_SHOW_TRUE});
                                        setLastChosenProduct(product);
                                    }}
                                ></ButtonModal>
                            } 
                        />
                    ))}
                </div>
    </div>

    );
}

Cards.propTypes = {
    basket: PropTypes.func,
    likedItems: PropTypes.array,
    likedProduct: PropTypes.func,
    unlikedProduct: PropTypes.func
}