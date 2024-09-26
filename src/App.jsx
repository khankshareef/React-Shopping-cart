import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Cart from './Components/Cart'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Productdetail from './Components/Productdetail'
import Search from './Components/Search'
import { items } from './Components/data'


function App() {
  const [data, setdata] = useState([...items])
  const [cart, setcart] = useState([])
  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setdata}/>
    <Routes>
      <Route path='/' element={<Product cart={cart} setcart={setcart} items={data}/>}/>
      <Route path='/product/:id' element={<Productdetail cart={cart} setcart={setcart}/>}/>
      <Route path='/search/:term' element={<Search cart={cart} setcart={setcart}/>}/>
      <Route path='/card' element={<Cart cart={cart} setcart={setcart}/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App