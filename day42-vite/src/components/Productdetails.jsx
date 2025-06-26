import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Productdetails() {
  const {id} = useParams();
  const[product, setProduct] = useState(null);

  useEffect(() => { //mount
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => setProduct(res.data))  // update
    .catch(err => console.error(err)
    )
  }, [id]) //unmount

  if(!product) return <p>Loading...</p>
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "500px", gap: "20px"}}>
      <div>
      <img src={product.image} width={180} height={180} alt="" />
      </div>

      <div>
        <h1>{product.title}</h1>
        <h3>${product.price}</h3> 
        <h4>{product.rating.rate}-reviews</h4>
        <p>{product.description}</p>
        <button>Buy now</button>
      </div>
    </div>
  )
}

export default Productdetails