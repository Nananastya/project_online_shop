
import React, { useState, useEffect } from "react";
import { Link, Outlet } from 'react-router-dom';
import StarIcon from './StarIcon';
import CartIcon from './CartIcon';
import { useFunction } from '../hook/useFunction';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

export const ListContext = React.createContext("");

export default function Layout() {
    const {likedItems} = useFunction();
    const [list, setList] = useState(false);
    const basket = useSelector(state => state.basket.cart);

    return (
      <ListContext.Provider value = {{list, setList}}>
        <header>
          <Button variant="light">
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick = {() => {
              if(list){
                setList(false);
              }
              else{
                setList(true);
              }
            }}>
              <path d="M8 8H16M8 12H16M10 16H14M3.5 12C3.5 5.5 5.5 3.5 12 3.5C18.5 3.5 20.5 5.5 20.5 12C20.5 18.5 18.5 20.5 12 20.5C5.5 20.5 3.5 18.5 3.5 12Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
          <Link to="/">Home</Link>
          <div className='flex-center'>
            <Link to="/liked"><StarIcon fill="yellow"/></Link>
            <span>{likedItems.length}</span>
            <div>
                <Link to="/cart"><CartIcon /></Link>
                <span>{basket.length}</span>
            </div>
          </div>
        </header>
        <Outlet />
      </ListContext.Provider>  
    );
}