import React, {useState} from "react";
import Navbar from "./navbar.js";
import './Style.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Register(){
    const [values, setValues] = useState({
        username:'',
        set_login_password:'',
        confirm_login_password:'',
    });
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    };
    let navigate=useNavigate()
    const handleFormSubmit =  async (event) => {
        event.preventDefault();
        let er=validation(values)
        console.log("in handle forms: " + values)
        if(er.hasOwnProperty('username') || er.hasOwnProperty('confirm_login_password'))
        {
            console.log('er is true')
            setErrors(er);
            return;
        }
        console.log('No error')
       
        try {
            const resp = await axios.post('http://localhost:8080/api/auth/register', {
                'username' : values.username,
                'password': values.confirm_login_password,
            })
            // localStorage.setItem('jwt', resp.data.tokenType + resp.data.accessToken)
            // console.log(localStorage.getItem('jwt'))
            // console.log(resp.status)
            console.log(resp.data)
            navigate('/newaccount')
        } catch (error) {
            console.log(error)
            if(error.response.status === 400) setErrors({username: 'Username already exists'})
        }
        // axios.post

    };
    const validation = (values) => {
        let errors = {};
        if(!values.username){
            errors.username="Username is required"
        }else if(values.username.length < 4){
            errors.username="Invalid Username"
        }
        if(!values.confirm_login_password){
            errors.confirm_login_password="password is required"
        } else if(values.confirm_login_password.length < 6){
            errors.confirm_login_password='Passwords must be more than 6 characters.'
        }
         else if(values.confirm_login_password !== values.set_login_password){
            errors.confirm_login_password='Password is incorrect'
        }

        return errors;
    };

    const [errors, setErrors] = useState({});
    return(
        <>
        <div><Navbar/></div>
        <div className="form">
            <form>
            <h1>Registration Form</h1>
                <div>
                <label>Username</label>
                <input type="text" name="username" value={values.username} onChange={handleChange}/>
                {errors.username && <p className="error">{errors.username}</p>}
                </div>
                <div>
                <label>Set Login Password:</label>
                <input type="password" name="set_login_password" value={values.set_login_password} onChange={handleChange}/>
                {/* {errors.confirm_login_password && <p className="error">{errors.confirm_login_password}</p>} */}
                </div>
                <div>
                <label>Confirm Login Password:</label>
                <input type="password" name="confirm_login_password" value={values.confirm_login_password} onChange={handleChange}/>
                {errors.confirm_login_password && <p className="error">{errors.confirm_login_password}</p>}
                </div>
                <div>
                    <button onClick={handleFormSubmit}>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}