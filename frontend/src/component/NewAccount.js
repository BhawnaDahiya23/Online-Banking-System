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
                <label>Title:</label>
                <input type="text" name="Title"/>
                </div>
                <div>
                <label>First Name:</label>
                <input type="text" name="First_name"/>
                </div>
                <div>
                <label>Middle Name:</label>
                <input type="text" name="Middle_name"/>
                </div>
                <div>
                <label>Last Name:</label>
                <input type="text" name="Last_name"/>
                </div>
                <div>
                <label>Mobile Number:</label>
                <input type="number" name="mobile_number"/>
                </div>
                <div>
                <label>Email ID:</label>
                <input type="email" name="email"/>
                </div>
                <div>
                <label>Aadhar Card Number:</label>
                <input type="number" name="aadhar_number"/>
                </div>
                <div>
                <label>Date of Birth:</label>
                <input type="text" name="First_name"/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}