import React from 'react'

function Hero() {
  return (
    <div className='bg-cover bg-center h-[400px] md:h-[600px] flex flex-col justify-center items-center text-center px-4'
    style={{backgroundImage: "url('https://images.unsplash.com/photo-1727705723856-b44b14612e93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}
    >
        {/* Glassmorphism - major css properties (backdrop-blur-md bg-white/20) */}
        <div className='backdrop-blur-md bg-white/20 p-6 rounded max-w-2xl border border-red-500/30'>
            <h2 className='text-3xl md:text-5xl font-bold mb-4'>Discover trendy products</h2>
            <p className='text-md md:text-lg mb-6'>Ultimate destination for your online shopping</p>
            <button className='bg-red-600 text-white px-6 py-3 rounded hover:bg-red-500'>Shop now</button>
        </div>
    </div>
  )
}

export default Hero