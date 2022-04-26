import { faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = ({cart,handleRemoveFromCart}) => {
    let greeting;
    if(cart.length === 0){
        greeting = <h4>Please add atleast 1 product</h4>
    }
    else if(cart.length === 1){
        greeting = <h4>Please add some more</h4>
    }
    else{
        greeting = <h4>Thanks for choosing</h4>
    }
    return (
        <div className='cart-container'>
            <h2>Added Products: {cart.length}</h2>
            {cart.length === 0 && <p style={{fontWeight:"bold"}}>You didn't added any product</p>}
            {greeting}
            {cart.length !==4? <small>Keep Adding</small> : <small>Wow! Congrats</small>}
            
            
            {
                cart.map(product=><div className='cart-product-container'>
                   <div className='product'>
                    <img src={product.picture} alt="" />
                    <h4 className='product-name'>{product.name}</h4>
                   </div>
                   <div>
                       <button className='addtocart-btn' onClick={()=>{handleRemoveFromCart(product)}}><FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon></button>
                   </div>
                    </div>)
            }
            {cart.length < 4 || <button className='review-btn'>Review Order</button>}
        </div>

        
    );
};

export default Cart;