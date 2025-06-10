import React from 'react'
import Dashboard from './Dashboard';
import Home from './Home';

function Login() {
    const username = "Narasimhan";
    const welcomeMessage = () => {
        window.alert("Welcome you're logged in");
    }
    const role = "admin";
  return (
    <div>
        Login Form
        {/* props */}
        <Dashboard name={username} greetFunction={welcomeMessage} />
        <Home userRole={role} />
    </div>
  )
}

export default Login