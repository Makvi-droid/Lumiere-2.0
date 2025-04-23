import React from "react"
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/LogIn'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px[7vw] lg:px-[9vw]">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Collection' element={<Collections/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Product/:productId' element={<Product/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
          <Route path='/Orders' element={<Orders/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
