import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div className='flex flex-col justify-center items-center h-[500px]'>
      <h1 className='text-3xl font-bold mb-4'>Welcome back</h1>
      <button onClick={handleLogout} className='bg-red-400 px-4 py-2 rounded-md cursor-pointer text-white font-semibold'>Logout</button>
    </div>
  )
}

export default Dashboard