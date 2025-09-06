import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import {baseUrl} from "../api";

function Login() {
  const[form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  }

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        const response = await axios.post(`${baseUrl}/login`, form);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
    }catch(err){
      console.error(err);      
    }
  }

  return (
    <div className='p-6 max-w-sm mx-auto'>
      <h2 className='text-xl font-bold mb-4 text-center'>Login page</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input name='email' onChange={handleChange} className='border p-1 w-full rounded-md' type="email" />
        <input name='password' onChange={handleChange} className='border p-1 w-full rounded-md' type="password" />

        <button type='submit' className='bg-blue-500 text-white font-semibold w-full p-1 rounded-md cursor-pointer'>Login</button>
      </form>
      <p className='mt-4 font-semibold text-sm'>Don't have an account ? <Link className='text-blue-500 font-bold' to="/register">Register</Link></p>
    </div>
  )
}

export default Login