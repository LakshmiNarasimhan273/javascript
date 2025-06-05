import React from 'react'
import Button from "../Button";

function Login() {
  return (
    <div>
        <h1>Login form</h1>

        <form action="">
            <label htmlFor="">Username</label>
            <input type="text" /><br />
            <label htmlFor="">Password</label>
            <input type="password" /><br />
            <Button />
        </form>
    </div>
  )
}

export default Login