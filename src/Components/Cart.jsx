import React from 'react';
import { Link } from 'react-router-dom';

function Cart({cart,setcart}) {
  return (
    <>
    <div className="container2">
      {
      cart.length==0 ?(
        <>
        <div className='text-center'>
          <h1 className='empty'>Your Cart is Empty</h1>
          <Link to={"/"} className=' button7 btn btn-warning'>Continue Shopping....</Link>
        </div>
        </>
      ):
      cart.map((product)=>{
        return(
          <>
           <div className=" cardse card mb-3" style={{width:'750px',
           height:'270px',
           }}>
  <div className="about row g-0 ">
    <div className="col-md-4">
      <img src={product.imgSrc} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body text-center">
        <h5 className="card-title1">{product.title}</h5>
        <p className="card-text2">{product.description}</p>
        <button className="button3 btn btn-primary mx-7">
                        {product.price} ₹
                      </button>
                      <button
                        className="button4 btn btn-warning mx-3">
                        By Now</button>
      </div>
    </div>
  </div>
</div>
          </>
        );
      })}
    </div>
    {
      cart.length!=0 && (
        <div className='containersing text-center my-5' style={
          {display: 'flex',
            justifyContent:'center',
            alignItems:'center',
          }
        }>
          <button className='btn btn-warning mx-5' style={{margin:'200px'}}>Checkout</button>
          <button onClick={()=>setcart("")} className='btn btn-danger'>Clear</button>
        </div>
      )
    }
    </>
  )
}

export default Cart