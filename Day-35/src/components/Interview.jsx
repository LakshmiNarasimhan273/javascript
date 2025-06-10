import React from 'react'
import User from "../pages/User";
import Admin from "../pages/Admin";
import Superadmin from "../pages/Superadmin";

function Interview({currentStatus, userRole}) {
  return (
    <div>
        {/* {
            currentStatus === 'pending' ? (
                <h1>Loading...</h1>
            ) : currentStatus === 'success' ? (
                <h1>Data displayed</h1>
            ) : currentStatus === 'failed' ? (
                <h1>Data fetching failed</h1>
            ) : (
                <h1>Status not verified</h1>
            )
        } */}

            {
                userRole === 'user' ? (
                    <User />
                ) : userRole === 'admin' ? (
                    <Admin />
                ) : userRole === 'super-admin' ? (
                    <Superadmin />
                ) : (
                    <h1>Unauthorized user role</h1>
                )
            }

    </div>
  )
}

export default Interview