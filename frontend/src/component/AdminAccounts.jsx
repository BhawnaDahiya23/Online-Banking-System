import React, { useEffect, useState } from 'react';
import { Icon, Table, TableBody,Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import './transactions.css'
import Navbar1 from "./Navbar1";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import AdminNavbar from './AdminNavbar.jsx'

const AdminAccounts = () => {
const[val,setVal]=useState("Enable")
const [search,setSearch]=useState("")

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



  return (
    <div>
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
        <Table celled >
       

    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Account Number </Table.HeaderCell>
        <Table.HeaderCell>User Id</Table.HeaderCell>
        <Table.HeaderCell>Balance</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Transaction History</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {
      datas.filter((data)=>{
        return search.toLowerCase()===''? data : data.acc.toLowerCase().includes(search)
      }).map((data) => (
        // <Table.Body>
          <Table.Row>
            <Table.Cell>{data.acc}</Table.Cell>
            <Table.Cell>{data.abc}</Table.Cell>
            <Table.Cell >2567</Table.Cell>
            <Table.Cell><Button variant="contained" color="error">
  Enable
</Button></Table.Cell>
            <Table.Cell ><Button icon labelPosition='right' >
View
<Icon name='right arrow' />
</Button></Table.Cell>
        </Table.Row>
        // console.log(transaction)
      ))
    }
      
    </Table.Body>
  </Table>
  </Container>
    </div>
  )
}

export default AdminAccounts