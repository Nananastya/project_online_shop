import React, { useState, useEffect, useContext } from 'react';
import { Button } from 'react-bootstrap';
import CardInfo from '../components/CardInfo';
import ModalWindow from '../components/ModalWindow';
import { useFunction } from '../hook/useFunction';
import { useSelector, useDispatch } from 'react-redux';
import { MODAL_WINDOW_SHOW_TRUE, 
    MODAL_WINDOW_SHOW_FALSE } from "../redux/actions";
import { Formik, useFormikContext} from 'formik';
import * as Yup from 'yup';
import { MessageForm } from '../Form';
import { ListContext } from '../components/Layout';



export default function CartPage() {
    const {list} = useContext(ListContext);
    const activeClass = list ? 'cards-list' : 'cards';
    const {deleteFromBasketUser} = useFunction();
    const {changeAmount} = useFunction();
    const [lastChosenProduct, setLastChosenProduct] = useState({});
    const show = useSelector(state => state.show);
    const basket = useSelector(state => state.basket.cart);

    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(basket));
    }, [dispatch])
    
    return (
    <>
        <div className={activeClass}>
            <ModalWindow
                header={"Are you sure?"}
                text="Are you sure you want to delete this product from the cart?"
                lastChosenProduct={lastChosenProduct}
                closeButton={true}
                color="red"
                actions={
                    <>
                        <Button className='modal-button-left' onClick={ () => {
                            deleteFromBasketUser(lastChosenProduct);
                            dispatch({type: MODAL_WINDOW_SHOW_FALSE});
                        }}>Ok
                        </Button>
                        <Button className='modal-button-right' onClick={() => {dispatch({type: MODAL_WINDOW_SHOW_FALSE});}}>
                            No
                        </Button>
                    </>
                }
                handleShow={() => {dispatch({type: MODAL_WINDOW_SHOW_TRUE});}}
                handleClose={() => {dispatch({type: MODAL_WINDOW_SHOW_FALSE});}}
                show1={show}
            />
            {basket?.map((product) => (
                    <CardInfo 
                        class="card"
                        product={product}
                        button={
                            <>
                                <input type="number" id="quantity" name="quantity" min="1" max="30" defaultValue={product.amount}
                                onChange={(e) => {
                                    product.amount = e.currentTarget.value;
                                    changeAmount(product, e.currentTarget.value);
                                }}/>
                                <svg className="cross-svg"
                                onClick={()=>{
                                    dispatch({type: MODAL_WINDOW_SHOW_TRUE});
                                    setLastChosenProduct(product);
                                }}
                                width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8L8 16M8.00001 8L16 16" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </>
                        } 
                    />
            ))}
        </div>
        <div className='formik'>  
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    age: '',
                    address: '',
                    phone: '',
                }}
                validationSchema={
                    Yup.object().shape({
                        firstName: Yup.string()
                            .min(2, 'Too Short!')
                            .max(50, 'Too Long!')
                            .required('Required'),
                        lastName: Yup.string()
                            .min(2, 'Too Short!')
                            .max(50, 'Too Long!')
                            .required('Required'),
                        age: Yup.number()
                            .typeError('Not a number')
                            .integer('Only integer, please')
                            .min(7, 'Too Young!')
                            .max(130, 'Too Long!')
                            .required('Required'),
                        address: Yup.string()
                            .min(2, 'Too Short!')
                            .max(60, 'Too Long!')
                            .required('Required'),
                        phone: Yup.number()
                            .min(100000000, 'Phone number has more numbers')
                            .max(1000000000, 'Phone number has less numbers')
                            .required('Required'),
                    })
                }
                onSubmit={(values, {setSubmitting, resetForm} )  => {
                    setTimeout(() => {
                        if (basket.length > 0){
                            console.log("Form:\n", JSON.stringify(values, null, 2), "\nBasket:\n", JSON.stringify(basket, null, 2));
                            dispatch({type: 'CLEAR_BASKET_IN_LOCAL_STORE'});
                            resetForm();
                        }
                        setSubmitting(false);
                    }, 400)
                }}
                component = {MessageForm}  
            />
            </div>
        </>
    );
}