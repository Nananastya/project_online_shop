import React, { useState } from 'react';
import PropTypes from "prop-types";
import { useFunction } from '../hook/useFunction';

export default function StarIcon(props) {
    const {unlikedProduct} = useFunction();
    const {likedProduct} = useFunction();
        return (
            <>
            <svg 
                onClick={(e) => {
                    if(props.fill){
                        return;
                    }
                    let lastLikedProduct = props.product;
                    if (e.currentTarget.children[1].style.fill === "yellow" || props.fillLiked === "yellow"){
                        unlikedProduct(lastLikedProduct);
                        e.currentTarget.children[1].style.fill = "none";
                        if(props.remove){e.currentTarget.parentElement.parentElement.parentElement.parentElement.remove()}
                        
                    }
                    else {
                        likedProduct(lastLikedProduct);
                        e.currentTarget.children[1].style.fill = "yellow";
                    }
                }}
                
                width="50px" height="50px" viewBox="0 0 24 24" id="star_outlined" data-name="star outlined" xmlns="http://www.w3.org/2000/svg">
                <rect id="Rectangle_4" data-name="Rectangle 4" width="24" height="24" fill="none"/>
                <path id="Star" d="M10,15,4.122,18.09l1.123-6.545L.489,6.91l6.572-.955L10,0l2.939,5.955,6.572.955-4.755,4.635,1.123,6.545Z" 
                transform="translate(2 3)" fill={props.fill || props.fillLiked || "none"} stroke="#000000" strokeWidth="2%"/>
            </svg>
            </>
        );
}

StarIcon.propTypes = {
    fill: PropTypes.string,
    fillLiked: PropTypes.string
}