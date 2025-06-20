import React, { useEffect, useState } from 'react'

function Products() {
    // useEffect -> React powerful hook
    // Component life-cycle methods ** Important for interview
    // Stage - 1 :- Mount - Initial rendering
    // Stage - 2 :- Update - Functional updation
    // Stage - 3 :- Unmount - After updation component unmount itself
    const[products, setProducts] = useState([]);

    // useEffect
    useEffect(() => { // Mounting
        fetch("https://fakestoreapi.com/products").then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error(err)    // Updating
        )
    }, [])  // Unmounting(empty dependencies)
    console.log(products.length);     
    console.log(products);   
  return (
    <div>
        <ul>
            {
                products.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Products