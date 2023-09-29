import React,{useEffect,useState} from 'react';
// import { Icon, Table ,Button} from 'semantic-ui-react';
import {Icon, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import './transactions.css'
import Navbar1 from "./Navbar1";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Accounts = () => {
  const[userToken,setUserToken]=useState("");
  const[accounts,setAccounts]=useState([])


  
let navigate=useNavigate();
  useEffect(() => {
    if(localStorage.getItem('jwt')=== null)
    {
        navigate('/login')
    }
    else{
        setUserToken(localStorage.getItem('jwt'))
    }  
        
}, [])

useEffect(() => {
  const getaccounts = async()=>{

    try {
      const resp = await axios.get('http://localhost:8080/api/account/viewAccounts', {headers:{'Authorization':`${userToken}`}})
      console.log(resp.data)
      setAccounts(resp.data)
      console.log(accounts)
      
  } catch (error) {
      console.log(error)
  }
  
  }
  getaccounts();
}, [userToken])




  return ( 
    <>
     <div>
        <Navbar1/>
        {/* <h1 ><center>View Transactions</center></h1> */}
        <div className='dashboard'>
        <Container>
            <Typography variant='h4' align='center' style={{padding:20, margin:50}}>
                Your Accounts
            </Typography>
            
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Table className="custom-table">
                        <TableHead class="table-header">
                            <TableRow>
                                <TableCell>Account</TableCell>
                                <TableCell>Balance</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Transaction History</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                        {Accounts.map((account) => (
                        // <Table.Body>
                            <TableRow>
                                <TableCell>{account.account_no}</TableCell>
                                <TableCell>₹{account.balance}</TableCell>
                                <TableCell>{account.account_type}</TableCell>
                                <TableCell><Button icon labelPosition='right' onClick={() => {navigate('/transaction', {state : account.account_no})}}>
                                  View
                                  <Icon name='right arrow' />
                                  </Button>
                                </TableCell>
                                
                            </TableRow>
                        // console.log(transaction)
                            ))
                        }
      
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        </Container>
        </div>
    </div>
    {/* <div>
        <Navbar1/>
        <h1 >Your Accounts</h1>
        <Container>
        <Table celled >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Account</Table.HeaderCell>
        <Table.HeaderCell>Balance</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Transaction History</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {accounts.map((account) => (

<Table.Row>
<Table.Cell>{account.account_no}</Table.Cell>
<Table.Cell>₹{account.balance}</Table.Cell>
<Table.Cell >{account.account_type}</Table.Cell>
<Table.Cell><Button icon labelPosition='right' onClick={() => {navigate('/transaction', {state : account.account_no})}}>
View
<Icon name='right arrow' />
</Button>
</Table.Cell>

</Table.Row>
        
      ))}
    </Table.Body>
  </Table>
  </Container>
    </div>
  ) */}
  </>
  )
}

export default Accounts