import React from 'react'

// Maintain list data outside the component function is makes our component
// rendering optimized
const users = [
    {id: 1, username: "Narasimhan", role: "Mentor"},
    {id: 2, username: "Lakshmi Narasimhan", role: "Developer"},
    {id: 3, username: "Lakshmi", role: "Tester"},
    {id: 4, username: 'someone', role: "DevOps"}
];
function Home() {
    // forEach is only supported in js place, not working under our return statement

    const displayName = (username) => {
        alert(`${username} user is active`);
    }
  return (
    <div className='flex flex-col justify-center items-center h-[500px]'>
        {
            // For list concept we need to use "map()" function for manipulate
            // our array of objects
            users.map(user => (
                // providing a key property to enable a unique list processing in react
                <div key={user.id} >
                    <h1>{user.username}</h1>
                    <h3>{user.role}</h3>
                    {/* Syntax difference between html and react component for event */}
                    {/* 1) onclick="displayName()" in react we need to use like this onClick={displayName} */}
                    {/* implementing helper function rectify the unwanted re-rendering our function */}
                    <button onClick={() => displayName(user.username)} className='bg-orange-500 font-semibold px-4 py-2 rounded'>Show username</button>
                </div>
            ))
        }
    </div>
  )
}

export default Home