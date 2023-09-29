
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
import Withdraw from './component/Withdraw';
import Accounts from './component/Accounts';
import AdminAccounts from './component/AdminAccounts';
import AdminTransaction from './component/AdminTransaction';
import PerformTransaction from './component/PerformTransaction'
import AllAccounts from './component/Admin/AllAccounts';
import FormDialog from './component/Withdraw2';
// import PerformTransaction from './component/PerformTransaction.jsx';
import PerformT from './component/PerformTransaction.jsx';
import MyTransaction from './component/MyTransaction'


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
          <Route path='/transaction' element={<Transactions/>}/>
          <Route path='/accounts' element={<Accounts/>}/>
          <Route path='/performTransaction' element={<PerformTransaction/>} />
          <Route path='/adminaccounts' element={<AdminAccounts/>} />
          <Route path='/admintransaction' element={<AdminTransaction/>} />
          <Route path='/mytransaction' element={<MyTransaction/>} />
          <Route path='/withdraw' element={<Withdraw/>} />
          <Route path='/withdraw2' element={<FormDialog/>} />
          <Route path='/performTransaction2' element={<PerformT/>} />

          {/* <Route path='/adminaccounts' element={<AllAccounts />} /> */}
        </Routes>
      </Router>
    </div>
  )
}
