import React from "react";
import Navbar from "./navbar";
import './Style.css'


export default function NewAccount(){
    return(
        <>
        <div><Navbar/></div>
        <div className="form">
            <form>
            <h1>Open a New Account</h1>
                <div>
                <label>Account type:</label>
                <select name="acc_type" id="acc_type">
                    <option value="Saving">Saving</option>
                    <option value="Salary">Salary</option>
                    <option value="Current">Current</option>
                </select>
                </div>
                <div>
                <label>Balance:</label>
                <input type="number" name="balance"/>
                </div>
                <div>
                <label>First Name:</label>
                <input type="text" name="First_name"/>
                </div>
                <div>
                <label>Last Name:</label>
                <input type="text" name="Last_name"/>
                </div> 
                <div>
                <label>Aadhar Card Number:</label>
                <input type="number" name="aadhar_number"/>
                </div>
                <div>
                <label>Address</label>
                <input type="text" name="address"/>
                </div>
                <div>
                <label>Occupation</label>
                <input type="text" name="Occupation"/>
                </div>
                <div>
                <label>Mobile No:</label>
                <input type="text" name="mobile"/>
                </div> 
                <div>
                <label>Email ID:</label>
                <input type="text" name="email"/>
                </div>
                <div>
                <label>Date of Birth</label>
                <input type="date" name="dob"/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}