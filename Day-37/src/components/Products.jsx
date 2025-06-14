import React from 'react'

const allproducts = [
  {
    "productName": "Sports shoe",
    "price": 249.99,
    "productImage": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "shortDescription": "A comfortable and supportive chair designed for long hours of work."
  },
  {
    "productName": "Watch",
    "price": 79.99,
    "productImage": "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD",
    "shortDescription": "High-quality sound with a sleek, wire-free design for active lifestyles."
  },
  {
    "productName": "Laptop",
    "price": 19.50,
    "productImage": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "shortDescription": "Keeps your drinks cold for 24 hours and hot for 12 hours."
  },
  {
    "productName": "Telephone",
    "price": 45.00,
    "productImage": "https://images.unsplash.com/photo-1525598912003-663126343e1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "shortDescription": "Adjustable brightness and color temperature, controllable via app."
  },
  {
    "productName": "Headphone",
    "price": 45.00,
    "productImage": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "shortDescription": "Adjustable brightness and color temperature, controllable via app."
  }
]

function Products() {
  return (
    <section className='p-4 md:p-8'>
        <h3 className='text-2xl md:text-3xl font-bold text-center mb-3'>All products</h3>

        {/* Grid container div tag */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                allproducts.map(product => (
                    <div className='bg-white shadow rounded p-4 flex flex-col items-center'>
                        <img src={product.productImage} alt="" className='h-40 w-auto mb-4 object-contain' />
                        <h4 className='text-md md:text-lg font-bold mb-2'>{product.productName}</h4>
                        <h4 className='text-md md:text-lg font-semibold text-red-600 mb-2'>${product.price}</h4>
                        <p className='text-md text-gray-400 mb-2'>{product.shortDescription}</p>
                        <button className='bg-red-500 px-6 py-3 rounded text-white'>Add to cart</button>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Products