import React, { useEffect, useState } from "react";
import Navbar1 from './Navbar1'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const dummy = [1,2]


export default function Withdraw() {
    
    const [fromAccount, setFromAccount] = useState('')
    const [amount, setAmount] = useState('')
    // const [toAccount, setToAccount] = useState('')
    const [accountList, setAccountList] = useState([])

    // const [error, setError] = useState(null)


    useEffect(() => {
        const fetchAccountNumbers = async () => {
            var getList = await axios.get('http://localhost:8080/api/account/viewAccountNumbers', {
                headers : {Authorization : localStorage.getItem('jwt')}
            }) 
            console.log(getList.data)
            setAccountList(getList.data)
        }
        fetchAccountNumbers();
    }, [])


    const handleSubmit = async () => {
        try {
            var body = {
            "from_acc" : fromAccount,
            // "to_acc" : toAccount,
            "amount" : amount 
            };
            console.log(body); 
            var resp = await axios.post('http://localhost:8080/api/transactions/withdrawal', body, {
                headers : {Authorization : localStorage.getItem('jwt')}
            })
            console.log(resp.data)
            alert('WITHDRAW SUCCESSFUL!')
            setAmount('')
            // setToAccount('')
        } catch(error) {
            alert('WITHDRAW FAILED!')
            console.log(error)
        }
        
    }

    return (

        <div>

            <Navbar1 />
            <select onChange={(event) => {
                console.log(event.target.value);
                setFromAccount(event.target.value);
            }}>
                <option>Select Your Account</option>
             {accountList.map((option) => (

                <option value={option}>{option}</option>

            ))}
            </select>


            <input onChange={(event) => {
                console.log(event.target.value);
                setAmount(event.target.value);
            }} type="number"/>

            <button onClick={() => handleSubmit()}/>
           

        </div>

    )
}