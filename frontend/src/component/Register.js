import React, {useState} from "react";
import Navbar from "./navbar";
import './Style.css'

export default function Register(){
    const [values, setValues] = useState({
        account_number:'',
        set_login_password:'',
        confirm_login_password:'',
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
        if(!values.account_number){
            errors.account_number="Account number is required"
        }else if(values.account_number.length < 12){
            errors.account_number="Invalid account number"
        }
        if(!values.set_login_password){
            errors.set_login_password="password is required"
        } else if(values.set_login_password.length < 6){
            errors.set_login_password='Passwords must be more than 6 characters.'
        }
        if(!values.confirm_login_password){
            errors.confirm_login_password="password confirmation is required"
        } else if(values.confirm_login_password !== values.set_login_password){
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
            <h1>Registeration Form</h1>
                <div>
                <label>Account Number:</label>
                <input type="text" name="account_number" value={values.account_number} onChange={handleChange}/>
                {errors.account_number && <p className="error">{errors.account_number}</p>}
                </div>
                <div>
                <label>Set Login Password:</label>
                <input type="password" name="set_login_password" value={values.set_login_password} onChange={handleChange}/>
                {errors.set_login_password && <p className="error">{errors.set_login_password}</p>}
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