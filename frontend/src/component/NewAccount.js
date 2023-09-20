import React,{useState,useEffect} from "react";
import Navbar1 from "./Navbar1.js";
import './Style.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";


export default function NewAccount(){
    const[userToken,setUserToken]=useState("")
    const [values, setValues] = useState({
        account_type:'Saving',
        balance:'',
        first_name:"",
        last_name:"",
        aadhar_no:"",
        address:"",
        occupation:"",
        emailId:"",
        mobile:"",
        dob:"",

    });


    
    const validation = (values) => {
        let errors = {};
        if(values.account_type == "Select account type"){
            errors.acc_type="Account type is required"
        }
        if(!values.balance){
            errors.balance="Balance is required"
        }
        if(!values.first_name){
            errors.First_name="First name is required"
        }
        if(!values.last_name){
            errors.Last_name="Last name is required"
        }
        if(!values.aadhar_no){
            errors.aadhar_number="Aadhar card number is required and must be 12 digits."
        } else if(values.aadhar_no.length !== 12){
            errors.aadhar_number="Aadhar acrd number must be 12 digits."
        }
        if(!values.address){
            errors.address="Address is required."
        }
        if(!values.occupation){
            errors.Occupation="Occupation is required."
        }
        if(!values.mobile){
            errors.mobile="Mobile number is required";
        }else if(values.mobile.length !== 10){
            errors.mobile="Mobile number should be 10 digits."
        }
        if(!values.emailId){
            errors.email="Email is required"
        }else if(!/\S+@\S+\.\S+/.test(values.emailId)){
            errors.email="Email is invalid"
        }    
        if(!values.dob){
            errors.dob="Date of Birth is required"
        }

        return errors;
    };
    const [errors, setErrors] = useState({});

    let navigate = useNavigate ();
    const config={
        'Authorization':`${userToken}`,
        'Accept' : 'application/json',
        'Content-Type': 'application/json'

    };
    const bodyParameters={
        key:"value"
    };

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(values)
        console.log(userToken)

        let er=validation(values)
        console.log("in handle forms: " + values)
        if(er.hasOwnProperty('acc_type') || er.hasOwnProperty('balance') || er.hasOwnProperty('First_name') || er.hasOwnProperty('Last_name') || er.hasOwnProperty('aadhar_number') || er.hasOwnProperty('address')  || er.hasOwnProperty('Occupation')  || er.hasOwnProperty('mobile')|| er.hasOwnProperty('email')|| er.hasOwnProperty('dob'))
        {
            console.log('er is true')
            setErrors(er);
            return;
        }
        console.log('No error')


        try {
            const resp = await axios.post('http://localhost:8080/api/account/saveAccount', values,{headers:{'Authorization':`${userToken}`,"Access-Control-Allow-Origin": "*"}})
            console.log(resp)
            navigate('/dashboard')
        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {
        if(localStorage.getItem('jwt')=== null)
        {
            navigate('/login')
        }
        else{
            setUserToken(localStorage.getItem('jwt'))
        }
      
    }, [])


    
    return(
        <>
        <div><Navbar1/></div>
        <div className="form">
            <form>
            <h1>Open a New Account</h1>
                <div>
                <label>Account type:</label>
                <select name="account_type" id="acc_type" onChange={handleChange}>
                    <option value="Saving">Saving</option>
                    <option value="Salary">Salary</option>
                    <option value="Current">Current</option>
                </select>
                {errors.acc_type && <p className="error">{errors.acc_type}</p>}
                </div>
                <div>
                <label>Balance:</label>
                <input type="number" name="balance" onChange={handleChange}/>
                {errors.balance && <p className="error">{errors.balance}</p>}
                </div>
                <div>
                <label>First Name:</label>
                <input type="text" name="first_name" onChange={handleChange}/>
                {errors.First_name && <p className="error">{errors.First_name}</p>}
                </div>
                <div>
                <label>Last Name:</label>
                <input type="text" name="last_name" onChange={handleChange}/>
                {errors.Last_name && <p className="error">{errors.Last_name}</p>}
                </div> 
                <div>
                <label>Aadhar Card Number:</label>
                <input type="number" name="aadhar_no"onChange={handleChange}/>
                {errors.aadhar_number && <p className="error">{errors.aadhar_number}</p>}
                </div>
                <div>
                <label>Address</label>
                <input type="text" name="address" onChange={handleChange}/>
                {errors.address && <p className="error">{errors.address}</p>}
                </div>
                <div>
                <label>Occupation</label>
                <input type="text" name="occupation" onChange={handleChange}/>
                {errors.Occupation && <p className="error">{errors.Occupation}</p>}
                </div>
                <div>
                <label>Mobile No:</label>
                <input type="text" name="mobile" onChange={handleChange}/>
                {errors.mobile && <p className="error">{errors.mobile}</p>}
                </div> 
                <div>
                <label>Email ID:</label>
                <input type="text" name="emailId" onChange={handleChange}/>
                {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div>
                <label>Date of Birth</label>
                <input type="date" name="dob" onChange={handleChange}/>
                {errors.dob && <p className="error">{errors.dob}</p>}
                </div>
                <div>
                    <button onClick={handleSubmit}>Submit</button> <br></br> <br></br>
                    <button onClick={() => navigate('/dashboard')}>Skip this Section</button>
                </div>
            </form>
        </div>
        </>
    )
}