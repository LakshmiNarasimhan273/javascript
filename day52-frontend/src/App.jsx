import React from 'react'
import {Routes, Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        } />
      </Routes>
    </div>
  )
}

export default App