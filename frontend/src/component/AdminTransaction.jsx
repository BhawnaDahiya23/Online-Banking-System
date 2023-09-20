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

const AdminTransaction = () => {
const[val,setVal]=useState("Enable")
const [search,setSearch]=useState("")

    const datas=[
        {
        from:"user2",
        from_acc:"12345671",
        to_acc:"1234567",
        amount:"1098",
        time:"23/08/2023 9:08pm"
        },
        {
        from:"user3",
        from_acc:"12345671",
        to_acc:"1234567",
        amount:"1098",
        time:"23/08/2023 9:08pm"
        },
        {
            from:"user2",
            from_acc:"12345671",
            to_acc:"1234567",
            amount:"1098",
            time:"23/08/2023 9:08pm"
            },
            {
                from:"user4",
                from_acc:"12345671",
                to_acc:"1234567",
                amount:"1098",
                time:"23/08/2023 9:08pm"
                },
                {
                    from:"user3",
                    from_acc:"12345671",
                    to_acc:"1234567",
                    amount:"1098",
                    time:"23/08/2023 9:08pm"
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
        placeholder="Search By Username"
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
        <Table.HeaderCell>User</Table.HeaderCell>
        <Table.HeaderCell>Sender Account Number</Table.HeaderCell>
        <Table.HeaderCell>Recepient Account Number</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Time</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {
      datas.filter((data)=>{
        return search.toLowerCase()===''? data : data.from.toLowerCase().includes(search)
      }).map((data) => (
        // <Table.Body>
          <Table.Row>
            <Table.Cell>{data.from}</Table.Cell>
            <Table.Cell>{data.from_acc}</Table.Cell>
            <Table.Cell >{data.to_acc}</Table.Cell>
            <Table.Cell>{data.amount}</Table.Cell>
            <Table.Cell >{data.time}</Table.Cell>
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

export default AdminTransaction