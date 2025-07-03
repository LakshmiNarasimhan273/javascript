import React, { useState } from 'react'
import MemberForm from './components/MemberForm'
import MemberList from './components/MemberList'

function App() {
  // Define a state to manage the dynamic form
  // if any data is loaded in this editMember state, the form act as Edit member
  // if the editMember remains the null value, form is act as a Add member
  const[editMember, setEditMember] = useState(null);
  return (
    <div className='min-h-screen bg-gray-200 p-6'>
      <h1 className='text-3xl font-bold text-center mb-6'>Team management dashboard</h1>
      <div className='flex flex-col items-center'>
        {/* Passing a state value and setState function as a props in both the components */}
        <MemberForm editMember={editMember} setEditMember={setEditMember} />
        <MemberList setEditMember={setEditMember} />
      </div>
    </div>
  )
}

export default App