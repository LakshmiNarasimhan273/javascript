import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { baseUrl } from '../api';

function Register() {
  const[form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.post(`${baseUrl}/register`, form);
      navigate("/");
    }catch(err){
      console.error(err);      
    }
  }

  return (
    <div className='p-6 max-w-sm mx-auto'>
      <h2 className='text-xl font-bold mb-4'>Register page</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input name='username' onChange={handleChange} type="text" className='border p-1 w-full rounded-md' />
        <input name='email' onChange={handleChange} type="email" className='border p-1 w-full rounded-md' />
        <input name='password' onChange={handleChange} type="password" className='border p-1 w-full rounded-md' />
        <select name="role" onChange={handleChange} className='border p-1 w-full rounded-md'>
          <option value="">Select your role</option>
          <option value="seller">Seller</option>
          <option value="buyer">Buyer</option>
        </select>
        <button type='submit' className='w-full bg-blue-500 p-1 rounded-md cursor-pointer text-white font-semibold'>Register</button>
      </form>
      <p className='mt-4 font-semibold text-sm'>Already have an account <Link to="/" className='text-blue-500 font-bold'>Login</Link></p>
    </div>
  )
}

export default Register