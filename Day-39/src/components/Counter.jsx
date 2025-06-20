import React, { useState } from 'react'

function Counter() {
    // syntax useState
    // First parameter - variable | Second parameter - variable update function
    // useState("") - initial value for our state variable
    // const[message, setMessage] = useState("Welcome to javascript");
    // const message = "Welcome";
    // const changemessage = () => {
    //     setMessage("Welcome to React development");
    // }

    // Counter application
    // Count useState for storing and updating our count data
    const[count, setCount] = useState(0);

    // Increase function
    const increaseCount = () => {
        setCount(count + 1); // logic current count value + 1
        console.log(count); 
        console.log(products);
               
    }

    // Decrease function
    const decreaseCount = () => {
        setCount(count - 1);
    }

    // Reset function
    const resetCount = () => {
        setCount(0);
    }
  return (
    <div>
        {/* <h1>{message}</h1>
        <button onClick={changemessage}>Change message</button> */}
        <h1>{count}</h1>
        <button onClick={increaseCount}>Increase count</button>
        <button onClick={decreaseCount} disabled={count === 0}>Decrease count</button>
        <button onClick={resetCount} disabled={count === 0}>Reset</button>
    </div>
  )
}

export default Counter