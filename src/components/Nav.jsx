import React from 'react'
import logo from '../data/img/logo.png'
import {Link, NavLink} from 'react-router-dom'
import { useCart } from 'react-use-cart'

const Nav = () => {
     const {totalItems} = useCart();

     const activeStyle = {
      color: "orange",
    };
  
    let activeClassName = "underline";

  return (
     <>
        <div className='header'>
               <div className='logo'>
                    <Link to="/">
                          <img src={logo} alt="error" width="100%" height="60px"/>
                    </Link>
               </div>

               <div className='nav'>
                    <ul>
                     <NavLink end to="/" style={({isActive})=> isActive ? activeStyle : undefined}>Home</NavLink>
                     <NavLink to="/ourmenu" style={({isActive})=> isActive ? activeStyle : undefined}>Our Menu</NavLink>
                     <NavLink to="/resterauntadresses" style={({isActive})=> isActive ? activeStyle : undefined}>Resteraunt Adresses</NavLink>
                    </ul>
               </div>

               <div className='cart'>
                     <Link to="/cart"><i className="fa-solid fa-cart-shopping"></i><span>Cart({totalItems})</span></Link>
               </div>
        </div>
     </>
  )
}

export default Nav