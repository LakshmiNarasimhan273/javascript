import React, { useState } from 'react'
import * as Yup from "yup";

// Validate functions
const validationSchema = Yup.object().shape({
    name: Yup.string().max(30, 'Name must be 30 characters or less').required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    message: Yup.string().min(10, "Message should be atleast of 10 characters").required("Message is required")
})

function ContactForm() {
    // state value for holding our form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    // state for processing our error
    const[errors, setErrors] = useState({});

    // input field onChange functionality
    const handleChange = (e) => {
        const{name, value} = e.target;
        setFormData(prev => ({
            ...prev, 
            [name]: value
        }));
    }

    // Enabling yup validation into our form
    const validate = async() => {
        try{
            await validationSchema.validate(formData, {abortEarly: false});
            setErrors({});
            return true;
        }catch(err){
            const newErrors = {};
            err.inner.forEach((e) => {
                newErrors[e.path] = e.message;
            });
            setErrors(newErrors);
            return false;
        }
    }

    // onSubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = await validate();
        if(!isValid) return;

        alert("Form submitted");
        setFormData({name: "", email: "", message: ""});
    }

    return (    
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} />
                    {errors.name}
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' value={formData.email} onChange={handleChange} />
                    {errors.email}
                </div>

                <div>
                    <label htmlFor="">Message</label>
                    <textarea rows={5} name='message' value={formData.message} onChange={handleChange}></textarea>
                    {errors.message}
                </div>
                <button type='submit'>Send message</button>
            </form>
        </div>
    )
}

export default ContactForm