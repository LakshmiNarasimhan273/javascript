import React from 'react'
import { useSelector, useDispatch } from 'react-redux' ;
import { increment, decrement, reset } from '../redux/action';

// useSelector
function Counter() {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increase count</button>
        <button onClick={() => dispatch(decrement())} disabled={count === 0}>Decrease count</button>
        <button onClick={() => dispatch(reset())} disabled={count === 0}>Reset count</button>
    </div>
  )
}

export default Counter