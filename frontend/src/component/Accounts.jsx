import React,{useEffect,useState} from 'react';
import { Icon, Table ,Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import './transactions.css'
import Navbar1 from "./Navbar1";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';

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
    <div>
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
  )
}

export default Accounts