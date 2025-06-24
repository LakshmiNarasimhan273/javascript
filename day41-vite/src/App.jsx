import React from 'react'
import Home from './components/Home'
import Products from './components/Products'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Attribute-1 path it enables the URL endpoint */}
        {/* Attribute-2 Elements or Components that rendered in browser */}
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </div>
  )
}

export default App