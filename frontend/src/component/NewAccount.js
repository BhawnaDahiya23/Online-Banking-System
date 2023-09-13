import React,{useState,useEffect} from "react";
import Navbar from "./navbar";
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
        try {
            const resp = await axios.post('http://localhost:8080/api/account/saveAccount', values,{headers:{'Authorization':`${userToken}`}})
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
        <div><Navbar/></div>
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
                </div>
                <div>
                <label>Balance:</label>
                <input type="number" name="balance" onChange={handleChange}/>
                </div>
                <div>
                <label>First Name:</label>
                <input type="text" name="first_name" onChange={handleChange}/>
                </div>
                <div>
                <label>Last Name:</label>
                <input type="text" name="last_name" onChange={handleChange}/>
                </div> 
                <div>
                <label>Aadhar Card Number:</label>
                <input type="number" name="aadhar_no"onChange={handleChange}/>
                </div>
                <div>
                <label>Address</label>
                <input type="text" name="address" onChange={handleChange}/>
                </div>
                <div>
                <label>Occupation</label>
                <input type="text" name="occupation" onChange={handleChange}/>
                </div>
                <div>
                <label>Mobile No:</label>
                <input type="text" name="mobile" onChange={handleChange}/>
                </div> 
                <div>
                <label>Email ID:</label>
                <input type="text" name="emailId" onChange={handleChange}/>
                </div>
                <div>
                <label>Date of Birth</label>
                <input type="date" name="dob" onChange={handleChange}/>
                </div>
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}