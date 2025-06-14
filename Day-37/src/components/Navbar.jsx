import React, { useState } from 'react';
import {Menu, X} from "lucide-react";

function Navbar() {
    // const isOpen = false
    const[isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className='bg-white shadow-md fixed w-full top-0 z-50'>
        {/* Responsiveness */}
        {/* without brakpoints all the designs are applied for mobile design */}
        {/* with brakpoints design only applicable for the respective screens */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            {/* flex design properties */}
            <div className='flex justify-between items-center h-16'>
                <div className='text-xl font-semibold text-red-500'>ShopWave.</div>

                {/* Tablet, laptop, desktop design */}
                <div className='hidden md:flex space-x-6 '>
                    <a href="" className='hover:text-red-500'>Home</a>
                    <a href="" className='hover:text-red-500'>Products</a>
                    <a href="" className='hover:text-red-500'>Profile</a>
                </div>
                {/* responsive icons */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>{isOpen ? <X /> : <Menu />}</button>
                </div>
            </div>
        </div>

        {/* Mobile menu design */}
        {
            isOpen && (
                <div className='md:hidden bg-white px-4 pb-4 space-y-2 shadow'>
                    <a href="" className='block'>Home</a>
                    <a href="" className='block'>Products</a>
                    <a href="" className='block'>Profile</a>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar