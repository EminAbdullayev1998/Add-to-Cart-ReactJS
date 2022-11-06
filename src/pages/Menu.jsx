import React from 'react'
import Item from './Item'
import product from '../data/burgerData'

const Menu = () => {
  return (
    <>
      <div className='menu'>
            <div className='main-box'>
                 {product.map((fd,i)=>(
                      <Item key={i} ctitle={fd.title} cprice={fd.price} cimg={fd.img} allproduct={fd}/>
                 ))}
            </div>
      </div>
    </>
  )
}

export default Menu