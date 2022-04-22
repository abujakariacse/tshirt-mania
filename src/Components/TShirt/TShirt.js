import React from 'react';
import './TShirt.css';

const TShirt = (props) => {
    const {index,picture,name,price,gender} = props.tShirt;
    return (
        <div className='product-container'>
            <img src={picture} alt="" />
            <h3>Product: {index}</h3>
            <h2>Name: {name}</h2>
            <h3>Gender: {gender}</h3>
            <h3>Price: ${price}</h3>
            <button>Add to Cart</button>
        </div>
    );
};

export default TShirt;