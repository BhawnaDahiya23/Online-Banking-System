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
                <input type="text" name="account_type"/>
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
                <label>Account type:</label>
                <input type="text" name="account_type"/>
                </div>
                
                <div>
                <label>Aadhar Card Number:</label>
                <input type="number" name="aadhar_number"/>
                </div>
                
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}