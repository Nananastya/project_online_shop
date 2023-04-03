import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import StarIcon from "./StarIcon";

export default function CardInfo(props) {
    const [fillLiked, setFillLiked] = useState("none");
    useEffect(() => {
        props.likedItems?.forEach(el => {
            if(el.articul === props.product?.articul){
                setFillLiked("yellow");
            }
        })
    }, [])

    return (
        <>
            <div className={props.class} key={props.product.articul}>
                <img src={props.product.url} alt="food" />
                <div>
                    <div className="title">
                        <span>
                            <b>{props.product.name}</b>
                        </span>
                        <span className="price">{props.product.price}</span>
                    </div>
                    <div>
                        <p>
                            {props.button}
                            {props.likedProduct && <StarIcon
                                fillLiked={fillLiked || props.fillLiked}  
                                product={props.product}
                            />}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

CardInfo.propTypes = {
    product: PropTypes.object,
    class: PropTypes.string,
    button: PropTypes.element,
    likedProduct: PropTypes.func,
    unlikedProduct: PropTypes.func
}