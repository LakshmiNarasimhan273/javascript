import React from 'react'
import "./Home.css"

// Main function is responsible for holding our
// html and javascript
function Home() { 
  // Above return statement
  // javascript logics
  const name = "Lakshmi Narasimhan";
  return (
    // Below return statement
    // only accepted html part
    <div>
        <h1>Hi, {name}</h1>
    </div>
  )
}

export default Home