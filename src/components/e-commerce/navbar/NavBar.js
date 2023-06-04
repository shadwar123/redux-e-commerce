import React from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'
import './navbar.css'
import { useSelector } from 'react-redux'
function NavBar() {
  const cart = useSelector(state => state.cartReducer.cart);

  let count = 0;
  cart.forEach((item) => (count += item.quantity));
  return (
  <div className="navParent">
        <nav className='navBar'>
    <h2 className="banner">My E-commerce</h2>
    <div className="right-layout">
        <div className="cart-layout">
        <h3> {count} </h3>
        <BsFillCartPlusFill />
        
        </div>
    </div>
</nav>
  </div>


    
  )
}

export default NavBar