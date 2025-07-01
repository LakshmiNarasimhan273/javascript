import React from 'react'
import Counter from './components/Counter'
// import { useSelector } from 'react-redux'

function App() {
  // const count = useSelector(state => state.count);
  return (
    <div>
      <Counter />
      {/* <h1>{count}</h1> */}
    </div>
  )
}

export default App