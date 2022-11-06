import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from 'react-use-cart'
import '../sass/style.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Menu from '../pages/Menu'
import Adresses from '../pages/Adresses'
import Cart from '../pages/Cart'

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
            <CartProvider>
                <Nav/>
                    <Routes>
                         <Route path='/' element={<Home/>}></Route>
                         <Route path='/ourmenu' element={<Menu/>}></Route>
                         <Route path='/resterauntadresses' element={<Adresses/>}></Route>
                         <Route path='/cart' element={<Cart/>}></Route>
                    </Routes>
                <Footer/>
            </CartProvider>
      </BrowserRouter>
    )
  }
}

export default AppRouter