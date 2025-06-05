import React from 'react'
import Button from '../Button'

function Register() {
  return (
    <div>
        <h1>Register form</h1>
        <form action="">
            <label htmlFor="">Username</label>
            <input type="text" /><br />

            <label htmlFor="">Email</label>
            <input type="email" /><br />

            <label htmlFor="">Password</label>
            <input type="password" /><br />

            <Button />
        </form>
    </div>
  )
}

export default Register