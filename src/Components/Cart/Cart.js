import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div className='cart-container'>
            <h2>Added Products: {cart.length}</h2>
            {
                cart.map(product=><div className='cart-product-container'>
                   <div className='product'>
                    <img src={product.picture} alt="" />
                    <h4 className='product-name'>{product.name}</h4>
                   </div>
                   <div>
                       <button className='addtocart-btn' onClick={()=>{handleRemoveFromCart(product)}}>X</button>
                   </div>
                    </div>)
            }
        </div>
    );
};

export default Cart;