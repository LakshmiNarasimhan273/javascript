import React, { useEffect, useState } from 'react';
import axios from "axios";

function Users() {
    const[users, setUsers] = useState([]);

    useEffect(() => { // Mounting place
        axios.get("https://fakestoreapi.com/users")
        .then(res => setUsers(res.data))
        // Direct approach
        .catch(err => console.error(err)
        )
    }, []);
    // HTTP methods
    // GET - Retrive data from database
    // POST - Create and Save a new data in database
    // PUT - Edit the existing data(update method)
    // DELETE - Remove a data from database
    // PATCH - Partial updation
  return (
    <div>
        {
            users.map(user => (
                <div key={user.id}>
                    <h1>{user.username}</h1>
                    <h4>{user.email}</h4>
                </div>
            ))
        }
    </div>
  )
}

export default Users