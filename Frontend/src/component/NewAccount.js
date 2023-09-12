import React, {useState} from "react";
import Navbar from "./navbar";
import './Style.css'


export default function NewAccount(){
    const [values, setValues] = useState({
        acc_type:'',
        balance:'',
        First_name:'',
        Last_name:'',
        aadhar_number:'',
        address:'',
        Occupation:'',
        mobile:'',
        email:'',        
        dob:'',
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
        if(values.acc_type == "Select account type"){
            errors.acc_type="Account type is required"
        }
        if(!values.balance){
            errors.balance="Balance is required"
        }
        if(!values.First_name){
            errors.First_name="First name is required"
        }
        if(!values.Last_name){
            errors.Last_name="Last name is required"
        }
        if(!values.aadhar_number){
            errors.aadhar_number="Aadhar card number is required and must be 12 digits."
        } else if(values.aadhar_number !== 12){
            errors.aadhar_number="Aadhar acrd number must be 12 digits."
        }
        if(!values.address){
            errors.address="Address is required."
        }
        if(!values.Occupation){
            errors.Occupation="Occupation is required."
        }
        if(!values.mobile){
            errors.mobile="Mobile number is required";
        }else if(values.mobile.length !== 10){
            errors.mobile="Mobile number should be 10 digits."
        }
        if(!values.email){
            errors.email="Email is required"
        }else if(!/\S+@\S+\.\S+/.test(values.email)){
            errors.email="Email is invalid"
        }    
        if(!values.dob){
            errors.dob="Date of Birth is required"
        }

        return errors;
    };
    const [errors, setErrors] = useState({});
    return(
        <>
        <div id="navbar"><Navbar/></div>
        <div className="main">
        <div className="container">
            <form className="form">
            <h1><center>Open a New Account</center></h1>
                <div>
                <label className="label">Account type:</label>
                <select name="acc_type" id="acc_type">
                    <option  value="Select_account">Select account type </option>
                    <option value="Saving">Saving</option>
                    <option value="Salary">Salary</option>
                    <option value="Current">Current</option>
                </select>
                {errors.acc_type && <p className="error">{errors.acc_type}</p>}
                </div>
                <div>
                <label className="label">Balance:</label>
                <input className="input"type="number" name="balance"/>
                {errors.balance && <p className="error">{errors.balance}</p>}
                </div>
                <div>
                <label className="label">First Name:</label>
                <input className="input" type="text" name="First_name" value={values.First_name} onChange={handleChange}/>
                {errors.First_name && <p className="error">{errors.First_name}</p>}
                </div>
                <div>
                <label className="label">Last Name:</label>
                <input className="input" type="text" name="Last_name" value={values.Last_name} onChange={handleChange}/>
                {errors.Last_name && <p className="error">{errors.Last_name}</p>}
                </div> 
                <div>
                <label className="label">Aadhar Card Number:</label>
                <input className="input" type="number" name="aadhar_number" value={values.aadhar_number} onChange={handleChange}/>
                {errors.aadhar_number && <p className="error">{errors.aadhar_number}</p>}
                </div>
                <div>
                <label className="label">Address</label>
                <input className="input" type="text" name="address"/>
                {errors.address && <p className="error">{errors.address}</p>}
                </div>
                <div>
                <label className="label">Occupation</label>
                <input className="input" type="text" name="Occupation"/>
                {errors.Occupation && <p className="error">{errors.Occupation}</p>}
                </div>
                <div>
                <label className="label">Mobile Number:</label>
                <input className="input" type="number" name="mobile" value={values.mobile} onChange={handleChange}/>
                {errors.mobile && <p className="error">{errors.mobile}</p>}
                </div> 
                <div>
                <label className="label">Email ID:</label>
                <input className="input" type="email" name="email" value={values.email} onChange={handleChange}/>
                {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                <label className="label">Date of Birth:</label>
                <input className="input" type="date" name="dob" value={values.dob} onChange={handleChange}/>
                {errors.dob && <p className="error">{errors.dob}</p>}
                </div>
                <div>
                    <button onClick={handleFormSubmit}>Submit</button>
                </div>
            </form>
        </div>
        </div>
        </>
    )
}