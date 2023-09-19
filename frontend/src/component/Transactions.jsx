import React ,{useEffect,useState}from 'react';
import { Icon, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import './transactions.css'
import Navbar from "./navbar";
import { useLocation } from 'react-router-dom';

const Transactions = () => {
  const location=useLocation();
  const path=location.pathname;
  useEffect(() => {
   console.log(path)
  }, [])
  

  return (
    <div>
        <Navbar/>
        <h1 >View Transactions</h1>
        <Container>
        <Table celled >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Transaction Id</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>From</Table.HeaderCell>
        <Table.HeaderCell>To</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>₹1000</Table.Cell>
        <Table.Cell >acc1234</Table.Cell>
        <Table.Cell>acc3254</Table.Cell>
        <Table.Cell positive>Done</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>₹1000</Table.Cell>
        <Table.Cell >acc1234</Table.Cell>
        <Table.Cell>acc3254</Table.Cell>
        <Table.Cell positive>Done</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>₹1000</Table.Cell>
        <Table.Cell >acc1234</Table.Cell>
        <Table.Cell>acc3254</Table.Cell>
        <Table.Cell positive>Done</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>₹1000</Table.Cell>
        <Table.Cell >acc1234</Table.Cell>
        <Table.Cell>acc3254</Table.Cell>
        <Table.Cell positive>Done</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>₹1000</Table.Cell>
        <Table.Cell >acc1234</Table.Cell>
        <Table.Cell>acc3254</Table.Cell>
        <Table.Cell positive>Done</Table.Cell>
      </Table.Row>
      
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>₹1000</Table.Cell>
        <Table.Cell >acc1234</Table.Cell>
        <Table.Cell>acc3254</Table.Cell>
        <Table.Cell negative>Failed</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>₹1000</Table.Cell>
        <Table.Cell >acc1234</Table.Cell>
        <Table.Cell>acc3254</Table.Cell>
        <Table.Cell negative>Failed</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>₹1000</Table.Cell>
        <Table.Cell >acc1234</Table.Cell>
        <Table.Cell>acc3254</Table.Cell>
        <Table.Cell negative>Failed</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>₹1000</Table.Cell>
        <Table.Cell >acc1234</Table.Cell>
        <Table.Cell>acc3254</Table.Cell>
        <Table.Cell positive>Done</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>₹1000</Table.Cell>
        <Table.Cell >acc1234</Table.Cell>
        <Table.Cell>acc3254</Table.Cell>
        <Table.Cell negative>Failed</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>₹1000</Table.Cell>
        <Table.Cell >acc1234</Table.Cell>
        <Table.Cell>acc3254</Table.Cell>
        <Table.Cell positive>Done</Table.Cell>
      </Table.Row>
    
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>₹1000</Table.Cell>
        <Table.Cell >acc1234</Table.Cell>
        <Table.Cell>acc3254</Table.Cell>
        <Table.Cell positive>Done</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>₹1000</Table.Cell>
        <Table.Cell >acc1234</Table.Cell>
        <Table.Cell>acc3254</Table.Cell>
        <Table.Cell negative>Failed</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
  </Container>
    </div>
  )
}

export default Transactions