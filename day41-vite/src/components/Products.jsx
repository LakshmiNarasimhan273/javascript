import React, { useEffect, useState } from 'react';
import axios from "axios";

function Products() {
  const[products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then(res => setProducts(res.data))
    .catch(err => console.error(err)
    )
  }, []);
  return (
    <div>
        <h1>Products page</h1>

        {
          products.map(data => (
            <div key={data.id}>
                {/* <img src={} alt="" /> */}
                <h1>{data.title}</h1>
            </div>
          ))
        }
    </div>
  )
}

export default Products