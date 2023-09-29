import React,{useEffect,useState} from 'react';
import { Icon, Table ,Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import '../transactions.css'
import Navbar from "../AdminNavbar";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const AllAccounts = () => {
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
      const resp = await axios.get('http://localhost:8080/api/admin/allAccounts', {headers:{'Authorization':`${userToken}`}})
      console.log(resp.data)
      setAccounts(resp.data)
      console.log(accounts)
      
  } catch (error) {
      console.log(error)
  }
  
  }
  getaccounts();
}, [userToken])

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
    <div>
        <Navbar/>
        <h1>All Accounts</h1>
        <Container>
        <Table celled >
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
          {accounts.map((account) => (

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
        
      ))}
    </Table.Body>
  </Table>
  </Container>
    </div>
  )
}

export default AllAccounts