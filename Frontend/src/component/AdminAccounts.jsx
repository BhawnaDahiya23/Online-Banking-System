import React, { useEffect, useState } from 'react';
// import { Icon, Table, TableBody,Button } from 'semantic-ui-react';
import {Icon, Button} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import './transactions.css'
import Navbar1 from "./Navbar1";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import AdminNavbar from './AdminNavbar.jsx'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

// navigate = useNavigate

const AdminAccounts = () => {
const[val,setVal]=useState("Enable")
const [accounts, setAccounts] = useState([])
const [search,setSearch]=useState("")
const navigate = useNavigate();


    const datas=[
        {
        acc:"12345611",
        abc:"1245"
        },
        {
            acc:"12345622",
            abc:"134"
            },
            {
                acc:"12345633",
                abc:"1255"
                },
                {
                    acc:"123456733",
                    abc:"1256"
                    },
                    {
                        acc:"12345633",
                        abc:"1246"
                        },
                        {
                            acc:"1234565433",
                            abc:"12467"
                            },

    ]


//   const account_no = useLocation().state;
//   const [listTransaction, setListTransaction] = useState([]);

//   console.log('account_no ' + account_no)

//   useEffect(() => {
//     const fetchList = async () => {
//       var translist = await axios.get('http://localhost:8080/api/transactions/viewAllTransactions/id/' + account_no, {
//         headers : {Authorization : localStorage.getItem('jwt')}
//       })

//       console.log(translist)
//       setListTransaction(translist.data);
//     }
//     fetchList();
//   })


useEffect(() => {
  const fetch = async () => {
    try {
      const resp = await axios.get('http://localhost:8080/api/admin/allAccounts', {headers:{'Authorization':`${localStorage.getItem('jwt')}`}})
      console.log(resp.data)
      setAccounts(resp.data)
      console.log(accounts)
  } catch (error) {
      console.log(error)
  }

  }
  fetch()
}, [])

const handleActivate =  async (event) => {
  console.log(event.currentTarget.value)
  try {
    const resp = await axios.post('http://localhost:8080/api/admin/setStatus', {'status' : true, 'account_no' : event.currentTarget.value}, {
      headers : {Authorization : localStorage.getItem('jwt')}
    })
    console.log(resp)
  } catch (err) {

  }
}

const handleDeactivate =  async (event) => {
  console.log(event.currentTarget.value)
  try {
    const resp = await axios.post('http://localhost:8080/api/admin/setStatus', {'status' : false, 'account_no' : event.currentTarget.value}, {
      headers : {Authorization : localStorage.getItem('jwt')}
    })
    console.log(resp)
  } catch (err) {

  }
} 

  return (
    <>
    <div>
      <AdminNavbar/>
      <div className='dashboard'>
        <Container>
          <Typography variant='h4' align='center' style={{padding:20, margin:50}}>
            View Transactions
          </Typography>
          <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:400 }}
          >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search By Account Number"
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon sx={{ fontSize: 40 }}/>
          </IconButton>
          </Paper>
          <Grid>
            <Grid item xs={12}>
              <Table className="custom-table">
                <TableHead class="table-header">
                  <TableRow>
                      <TableCell>Account</TableCell>
                      <TableCell>Balance</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell>Aadhar Number</TableCell>
                      <TableCell>First Name</TableCell>
                      <TableCell>Last Name</TableCell>
                      <TableCell>Occupation</TableCell>
                      <TableCell>Transaction</TableCell>
                      <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {
                  accounts.filter((data)=>{
                  return search.toLowerCase()===''? data : data.account_no.toString().toLowerCase().includes(search)
                  }).map((account) => (
                // <Table.Body>
                  <Table.Row>
                    <TableCell>{account.account_no}</TableCell>
                    <TableCell>{account.balance}</TableCell>
                    <TableCell >{account.account_type}</TableCell>
                    <TableCell >{account.aadhar_no}</TableCell>
                    <TableCell >{account.first_name}</TableCell>
                    <TableCell >{account.last_name}</TableCell>
                    <TableCell >{account.occupation}</TableCell>
                    <TableCell><Button icon labelPosition='right' onClick={() => {navigate('/transaction', {state : account.account_no})}}>
                    View
                    <Icon name='right arrow' />
                    </Button></TableCell>
                    <TableCell>{account.status ? 
                      <Button value={account.account_no} negative onClick={handleDeactivate} >Deactivate</Button> : 
                      <Button value={account.account_no} positive onClick={handleActivate}>Activate</Button>
                    }
        
                    </TableCell>
  
                  </Table.Row>
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
        <AdminNavbar/>
        <h1 >View Transactions</h1>
        <Container>
        <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search By Account Number"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Paper>
        <Table >
       

    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Account</Table.HeaderCell>
        <Table.HeaderCell>Balance</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Aadhar Number</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Occupation</Table.HeaderCell>
        <Table.HeaderCell>Transactions</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {
      accounts.filter((data)=>{
        return search.toLowerCase()===''? data : data.account_no.toString().toLowerCase().includes(search)
      }).map((account) => (
        // <Table.Body>
        <Table.Row>
        <Table.Cell>{account.account_no}</Table.Cell>
        <Table.Cell>{account.balance}</Table.Cell>
        <Table.Cell >{account.account_type}</Table.Cell>
        <Table.Cell >{account.aadhar_no}</Table.Cell>
        <Table.Cell >{account.first_name}</Table.Cell>
        <Table.Cell >{account.last_name}</Table.Cell>
        <Table.Cell >{account.occupation}</Table.Cell>
        <Table.Cell><Button icon labelPosition='right' onClick={() => {navigate('/transaction', {state : account.account_no})}}>
        View
        <Icon name='right arrow' />
        </Button></Table.Cell>
        <Table.Cell>{account.status ? 
          <Button value={account.account_no} negative onClick={handleDeactivate} >Deactivate</Button> : 
          <Button value={account.account_no} positive onClick={handleActivate}>Activate</Button>
        }
        
      </Table.Cell>
  
  </Table.Row>
        // console.log(transaction)
      ))
    }
      
    </Table.Body>
  </Table>
  </Container>
    </div> */}
    </>
  )
}

export default AdminAccounts