import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px", backgroundColor: "lightblue"}}>
        <h1>Myweb</h1>

        <ul style={{display: "flex", gap: "10px", listStyleType: "none"}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar