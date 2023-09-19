import React, { useState,useEffect } from "react";
import Navbar from "./navbar";
import './Style.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

// const server = 'localhost:8080/api'

export default function Login(){

    const [values, setValues] = useState({
        username:'',
        password:'',
    });
    const[userToken,setUserToken]=useState("")

    let navigate = useNavigate ();

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    };

    useEffect(() => {
        if(localStorage.getItem('jwt')!== null)
        {
            navigate('/dashboard')
        }
      
      
    }, [])
    
    const handleFormSubmit =  async (event) => {
        event.preventDefault();
        let er=validation(values)
        console.log("in handle forms: " + values)
        if(er.hasOwnProperty('username') || er.hasOwnProperty('password'))
        {
            console.log('er is true')
            setErrors(er);
            return;
        }
        console.log('No error')
       
        try {
            const resp = await axios.post('http://localhost:8080/api/auth/login', {
                'username' : values.username,
                'password': values.password,
            })
            localStorage.setItem('jwt', resp.data.tokenType + resp.data.accessToken)
            console.log(localStorage.getItem('jwt'))
            console.log(resp.status)
            navigate('/newaccount')
        } catch (error) {
            console.log(error)
            if(error.response.status) setErrors({password: 'wrong password'})
        }
        // axios.post

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
    const [vaild, setValid] = useState(false);
    const [cusername,setCusername ] = useState("srijarko");
    const[password,setPassword]=useState("unlucky")

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




