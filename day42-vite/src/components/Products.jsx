import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Products() {
  const[products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => { // mount
    axios.get("https://fakestoreapi.com/products")
    .then(res => setProducts(res.data))  // update
    .catch(err => console.error(err) 
    )
  }, []) // unmount
  return (
    <div>
      <h1>Products page</h1>

      {
        products.map(data => (
          <div key={data.id} style={{marginBottom: "15px", border: "1px solid #ccc", padding: "10px"}}>
            <img src={data.image} width={130} height={130} alt="" />
            <h4>{data.title}</h4>
            {/* Button holds 2 functionality so we need to import useNavigate hook from react-router-dom  */}
            {/* 1) Send the respective product id to URL */}
            {/* 2) Navigate to the Productdetails page */}
            <button onClick={() => navigate(`/product-detail/${data.id}`)}>View details</button>
          </div>
        ))
      }
    </div>
  )
}

export default Products