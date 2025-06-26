import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from "./components/Products";
import Productdetails from "./components/Productdetails";

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Products />} />
          {/* params variable */}
          <Route path='/product-detail/:id' element={<Productdetails />} />
        </Routes>
    </div>
  )
}

export default App