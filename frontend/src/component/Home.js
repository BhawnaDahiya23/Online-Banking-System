import React from 'react'
import Navbar from './navbar';
import { Link } from 'react-router-dom';

import './Style.css'


function Home(){
    
    return(
        <>
        <div>
            <Navbar/>
        </div>
        <div>
            <ul>
                
                <li><u><Link to='/login'>Login</Link></u></li>
                <li><u><Link to='/register'>Register</Link></u></li>
                <li><u><Link to='/newaccount'>Open Account</Link></u></li>
            </ul>
        </div>

        </>
    )
}
export default Home;