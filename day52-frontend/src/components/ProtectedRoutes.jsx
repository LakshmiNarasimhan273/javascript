import React from 'react'
import {Navigate} from "react-router-dom";

function ProtectedRoutes({children}) {
    // children parameter is another component that we receive from our App component
 const token = localStorage.getItem("token");
//  ternary operator checks the token variable - which means, if we have a token in our
// localstroage we have able to access the children component, else we are stayed only in the 
// login component
 return token ? children : <Navigate to="/" />
}

export default ProtectedRoutes;