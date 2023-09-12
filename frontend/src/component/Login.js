import React, { useState } from "react";
import Navbar from "./navbar";
import './Style.css'

export default function Login(){

    const [values, setValues] = useState({
        username:'',
        password:'',
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    };
    const handleFormSubmit =(event) => {
        event.preventDefault();
        setErrors(validation(values));
    };

    const validation = (values) => {
        let errors = {};
        if(!values.username){
            errors.username="Username is required"
        }
        if(!values.password){
            errors.username="password is required"
        } else if(values.password.length < 6){
            errors.password='Passwords must be more than 6 characters.'
        }

        return errors;
    };

    const [errors, setErrors] = useState({});

    return(
        <>
        <div><Navbar/></div>
        <div className="form">
            <form >
                <h1>Login</h1>
                <div className="labels">
                <label className="label">Username:</label>
                <input type="text" name="username" value={values.username} onChange={handleChange}/>
                {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div className="labels">
                <label>Password:</label>
                <input type="password" name="password" value={values.password} onChange={handleChange}/>
                {errors.password && <p className="error">{errors.password}</p>}
                </div>
                <div>
                    <button onClick={handleFormSubmit}>Login</button>
                </div>
            </form>
        </div>
        </>
    )
}




