import React from 'react'

function Dashboard({name, greetFunction}) {
  return (
    <div>
        <h1>Welcome, {name}</h1>
        <button onClick={() => greetFunction()}>Check status</button>
    </div>
  )
}

export default Dashboard