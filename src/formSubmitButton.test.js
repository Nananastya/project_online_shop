import React from "react";

import { useSelector} from 'react-redux';
import { render, fireEvent, screen } from "@testing-library/react";

test("test button", () => {
    const handleClick = jest.fn();
    
    const basket = [
        {name:"apple",
        price:100,
        url:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F39%2F2012%2F06%2F20222932%2Frome_3.jpg",
        articul:15339,
        color:"light-red",
        amount:1},
        {name:"pepper",
        price:150,
        url:"https://i5.walmartimages.com/asr/4afb6fc7-4b33-4dc9-b938-035666ab2fe6.dca886c2d62ffc4a948e28a2d0039ea2.jpeg",
        articul:17431,
        color:"yellow",
        amount:1}];
    const { container } = render(
        <button type="submit" disabled={setTimeout(() => {
            if (basket.length > 0){
                console.log("Form:\n", JSON.stringify(values, null, 2), "\nBasket:\n", JSON.stringify(basket, null, 2));
                dispatch({type: 'CLEAR_BASKET_IN_LOCAL_STORE'});
                resetForm();
            }
            setSubmitting(false);
        }, 400)}>Checkout</button>

    );
  
    const button = screen.getByText("Checkout");
    fireEvent.click(button);
    expect(container).toMatchSnapshot();
  });
