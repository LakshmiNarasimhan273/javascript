import React, { useEffect, useState } from 'react'
import { addMember, updateMember } from "../redux/action";
import { useDispatch } from "react-redux";

function MemberForm({ editMember, setEditMember }) {
    // State for holding our forms data
    const[formData, setFormData] = useState({
        name: "",
        email: "",
        role: ""
    });

    // using useEffect hooks for immediate processing, when the edit button is clicked
    // at the same time the member data is loaded in then form input fields
    useEffect(() => {
        if(editMember) setFormData(editMember)
    }, [editMember]);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData(prev => ({...prev, [e.target.name]: [e.target.value]}))
    };

    // Condition based submit function, if the editMember state is having some data
    // it will update the value, or else it will add the member data
    const handleSubmit = (e) => {
        e.preventDefault();
        if(editMember){
            dispatch(updateMember(formData));
        }else{
            dispatch(addMember(formData));
        }
        setFormData({name: "", email: "", role: ""});
        setEditMember(null);
    }

    return (
        <form onSubmit={handleSubmit} className='bg-white p-4 rounded shadow-md w-full mx-w-md'>
            <h2 className='text-xl font-semibold mb-4'>{editMember ? "Edit" : "Add"} form</h2>

            <input type="text" 
            name='name' 
            value={formData.name} 
            onChange={handleChange} 
            placeholder='John doe'
            className='border p-2 w-full mb-2 rounded'
            />

            <input type="email" 
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='john@mail.com'
            className='border p-2 w-full mb-2 rounded'
            />

            <input type="text" 
            name='role'
            value={formData.role}
            onChange={handleChange}
            placeholder='Developer'
            className='border p-2 w-full mb-2 rounded'
            />

            <button type='submit' className='bg-green-600 font-semibold text-white px-4 py-2 rounded cursor-pointer'>{editMember ? "Edit" : "Add"} Member</button>

        </form>
    )
}

export default MemberForm