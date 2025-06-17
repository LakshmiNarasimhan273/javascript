import React from 'react'

const navLinks = [
    { id: 1, title: "Home" },
    { id: 2, title: "Products" },
    { id: 3, title: "Profile" },
    { id: 4, title: "Help & Support" },
    { id: 5, title: "Subscription" }
]

function Navbar() {
    return (
        <div className='flex justify-between bg-slate-800 text-white p-5'>
            <h1>Myweb</h1>

            <div className='flex gap-4'>
                {
                    navLinks.map(link => (
                        <ul key={link.id}>
                            <li>{link.title}</li>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar