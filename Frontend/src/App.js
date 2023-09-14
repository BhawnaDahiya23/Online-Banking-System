
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register'
import NewAccount from './component/NewAccount';
import Dashboard from './component/Dashboard';


export default function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/newaccount' element={<NewAccount/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </Router>
    </div>
  )
}
