import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './data';
import Product from './Product';

function Search({cart,setcart}) {
  //console.log(useParams())
  const {term}=useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filterData=()=>{
      const data =items.filter((product)=>product.title.toLowerCase().includes(term.
        toLowerCase()));
         //console.log(data);
    setFilterData(data)
    }

    filterData();
  }, [term])
  

  return (
    <Product cart={cart} setcart={setcart} items={filterData}/>
  )
}

export default Search