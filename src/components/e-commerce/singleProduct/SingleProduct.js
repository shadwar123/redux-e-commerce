import React from 'react'
import "./SingleProduct.css";
import { CgDollar } from 'react-icons/cg';
import {GrAddCircle} from 'react-icons/gr';
import {GrSubtractCircle} from 'react-icons/gr';
import {useDispatch, useSelector} from 'react-redux';
import { addToCart, removeFromCart } from '../../../slices/cartSlice';
export default function SingleProduct({product}) {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);
  const curItem = cart.find(item => item.id === product.id);
  const curQuantity = curItem ? curItem.quantity : 0 ;


  return (
    <div className='SingleProduct'>
        <img src={product.image} alt={product.title} className="productImg" />
        <div className="productInfo">
            <h2 className="productTitle">{product.title}</h2>
            <p className="productPrice"> <CgDollar/> {product.price}</p>

            <div className="cartInfo">
              <button className='button' onClick={() => dispatch(removeFromCart(product.id))}> <GrSubtractCircle/> </button>
              <h2 className='curQuantity'> {curQuantity} </h2>
              <button className='button' onClick={() => dispatch(addToCart(product.id))}> <GrAddCircle/> </button>
            </div>
        </div>
    </div>
  )
}
