import React from 'react'

function Home({userRole}) {
  return (
    <div>
        {
            userRole === 'admin' ? (
                <h1>Welcome admin</h1>
            ) : (
                <h1>Welcome user</h1>
            )
        }
    </div>
  )
}

export default Home