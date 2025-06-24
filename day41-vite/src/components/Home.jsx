import React from 'react'
import {Link} from "react-router-dom";

function Home() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "300px"}}>
        <h1>My React application</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, distinctio. Asperiores laboriosam suscipit nihil excepturi culpa est. Quos deleniti eum tempora ipsum quasi sit autem optio commodi! Aperiam, enim numquam.</p>
        <Link to="/products">Explore products</Link>
        
    </div>
  )
}

export default Home