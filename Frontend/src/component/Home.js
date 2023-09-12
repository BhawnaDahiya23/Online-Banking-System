import React from 'react'
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Style.css'


function Home(){
    const Navigate = useNavigate();
    return(
        <>
        <div>
            <Navbar/>
        </div>
        <div className='home-main'>
            <ul>
                <li><button onClick={()=>Navigate('/login')}>Login</button></li>
                <li><button onClick={()=>Navigate('/register')}>Register</button></li>
                <li><button onClick={()=>Navigate('/newaccount')}>Open Account</button></li>
                
            </ul>
        </div>

        </>
    )
}
export default Home;