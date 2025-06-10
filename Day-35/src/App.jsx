import React from 'react'
import Login from "./components/Login";
import Interview from "./components/Interview";

function App() {
  // application loading status
  const status = "failed";
  const role = "super-admin" // user, admin, super-admin
  return (
    <div>
      {/* <Login /> */}
      <Interview currentStatus={status} userRole={role} />
    </div>
  )
}

export default App