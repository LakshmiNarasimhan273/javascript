import React from 'react'

const products = [
  {
    "id": 1,
    "productname": "Wireless Bluetooth Earbuds",
    "product_image": "https://m.media-amazon.com/images/I/61Nl-y4L+bL._AC_SL1500_.jpg",
    "productprice": 49.99,
    "description": "High-fidelity sound with comfortable, secure fit. Perfect for workouts and daily commutes."
  },
  {
    "id": 2,
    "productname": "Smart Fitness Tracker",
    "product_image": "https://m.media-amazon.com/images/I/71SWXb4-rAL._AC_SL1500_.jpg",
    "productprice": 79.95,
    "description": "Monitor your heart rate, steps, and sleep patterns. Syncs with your smartphone."
  },
  {
    "id": 3,
    "productname": "Portable Power Bank 10000mAh",
    "product_image": "https://m.media-amazon.com/images/I/71EwW-M98TL._AC_SL1500_.jpg",
    "productprice": 29.00,
    "description": "Keep your devices charged on the go. Compact and lightweight design."
  },
  {
    "id": 4,
    "productname": "Ergonomic Office Chair",
    "product_image": "https://m.media-amazon.com/images/I/71K1jNq38ML._AC_SL1500_.jpg",
    "productprice": 199.50,
    "description": "Designed for maximum comfort and support during long working hours. Adjustable features."
  },
  {
    "id": 5,
    "productname": "Stainless Steel Water Bottle",
    "product_image": "https://m.media-amazon.com/images/I/61gR52tQ7GL._AC_SL1500_.jpg",
    "productprice": 15.75,
    "description": "Durable, insulated bottle keeps drinks cold for hours. Eco-friendly alternative."
  },
  {
    "id": 6,
    "productname": "LED Desk Lamp with Wireless Charger",
    "product_image": "https://m.media-amazon.com/images/I/61N7c8d-3rL._AC_SL1500_.jpg",
    "productprice": 39.99,
    "description": "Modern desk lamp with adjustable brightness and built-in wireless charging pad."
  },
  {
    "id": 7,
    "productname": "Noise-Cancelling Headphones",
    "product_image": "https://m.media-amazon.com/images/I/71+L+i-f5rL._AC_SL1500_.jpg",
    "productprice": 129.00,
    "description": "Immerse yourself in your music with superior noise cancellation and rich audio."
  }
]

function Assignment10() {
  return (
    <div>
        <ul>
            {
                products.map(data => (
                    <li key={data.id}>{data.productname}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Assignment10