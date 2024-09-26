import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { items } from "./data";
import Product from "./Product";

function Productdetail({cart,setcart}) {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const [relatedProduct, setrelatedProduct] = useState([]);

  useEffect(() => {
    const filterproduct = items.filter((product) => product.id == id);
    //console.log(filterproduct)
    setproduct(filterproduct[0]);

    const relatedProduct = items.filter(
      (product) => product.categort === product.categort
    );
    //console.log(relatedProduct);
    setrelatedProduct(relatedProduct);
  }, [id, product.categort]);
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setcart([...cart, obj]);
    console.log("cart element=", cart);
    toast.success("Item Added on Cart", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container1 con">
        <div className="img">
          <img src={product.imgSrc} alt=""></img>
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button type="button" className="button3 btn btn-primary mx-7">
            {product.price} ₹
          </button>
          <button 
            onClick={() =>
              addToCart(
                product.id,
                product.price,
                product.title,
                product.description,
                product.imgSrc
              )
            }
            type="button"
            className="button btn btn-warning mx-3"
          >
            Add to Cart
          </button>
        </div>
        <div className="Merging">
          <Product cart={cart} setcart={setcart} items={relatedProduct} />
        </div>
      </div>
    </>
  );
}

export default Productdetail;
