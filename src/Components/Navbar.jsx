import React, { useState } from 'react';
import { BsCartCheckFill } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { items } from './data';

function Navbar({setData,cart}) {
  const location = useLocation()
    const navigate=useNavigate();
    const [searchTerm, setsearchTerm] = useState("")

    const filterByCategory = (category)=>{
        const element = items.filter((product)=>product.categort === category)
        //console.log(element)
        setData(element)
    }
    const filterByPrice =(price)=>{
        const element = items.filter((product)=>product.price >=price)
        setData(element)
    }
    const handelSubmit =(e)=>{
        e.preventDefault();
        navigate(`/search/${searchTerm}`)
        setsearchTerm("")
    }

  return (
   <>
   <header>
    <div className="nav-bar">
    <Link to={'/'}div className="brand">E-cart</Link>

    <form 
    //onClick={handelSubmit}
    onSubmit={handelSubmit}
    className="search-bar">
        <input 
        value={searchTerm}
        onChange={(e)=>setsearchTerm(e.target.value)}
        type='text' 
        placeholder='Search Product'></input>
    </form>

    <Link to={'/card'}div className="cart">
    <button type="button" className="btn btn-primary position-relative">
    <BsCartCheckFill/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button></Link>
    </div>
    {
      location.pathname == '/' &&(
        <div className="nav-bar-wrapper">
        <div className="items1">Filter by{"->"}</div>
        <div 
        onClick={()=>setData(items)}
        className="items2">No Filter</div>

        <div 
        onClick={()=>filterByCategory('mobiles')}
        className="items3">Mobiles</div>
        <div 
        onClick={()=>filterByCategory('laptops')}
        className="items4">Laptops</div>

        <div 
        onClick={()=>filterByCategory('tablets')}
        className="items5">Tablets</div>
        <div
        onClick={()=>filterByPrice(29999)}
        className="items6">{">="}29999</div>
        <div
        onClick={()=>filterByPrice(49999)}
        className="items7">{">="}49999</div>
        <div
        onClick={()=>filterByPrice(69999)}
        className="items8">{">="}69999</div>
        <div
        onClick={()=>filterByPrice(89999)}
        className="items9">{">="}89999</div>
    </div>
      )
    }
   </header>
   </>
  )
}

export default Navbar