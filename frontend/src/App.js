
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register'
import NewAccount from './component/NewAccount';
import Dashboard from './component/Dashboard';
import AdminDashboard from './component/AdminDashboard';
import Transactions from './component/Transactions';
import Login2 from './component/Login2';
import Accounts from './component/Accounts';
import PerformTransaction from './component/PerformTransaction';
import AdminAccounts from './component/AdminAccounts';
import AdminTransaction from './component/AdminTransaction';


export default function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/newaccount' element={<NewAccount/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/admindashboard' element={<AdminDashboard/>}/>
          <Route path='/accounts/transaction/:acc_no' element={<Transactions/>}/>
          <Route path='/accounts' element={<Accounts/>}/>
          <Route path='/performTransaction' element={<PerformTransaction/>} />
          <Route path='/adminaccounts' element={<AdminAccounts/>} />
          <Route path='/admintransaction' element={<AdminTransaction/>} />
        </Routes>
      </Router>
    </div>
  )
}
