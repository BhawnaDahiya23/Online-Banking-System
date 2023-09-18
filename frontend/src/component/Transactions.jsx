import React, { useEffect, useState } from 'react';
import { Icon, Table, TableBody } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import './transactions.css'
import Navbar from "./navbar";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Transactions = () => {
  const account_no = useLocation().state;
  const [listTransaction, setListTransaction] = useState([]);

  console.log('account_no ' + account_no)

  useEffect(() => {
    const fetchList = async () => {
      var translist = await axios.get('http://localhost:8080/api/transactions/viewAllTransactions/id/' + account_no, {
        headers : {Authorization : localStorage.getItem('jwt')}
      })

      console.log(translist)
      setListTransaction(translist.data);
    }
    fetchList();
  })

  return (
    <div>
        <Navbar/>
        <h1 >View Transactions</h1>
        <Container>
        <Table celled >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>From</Table.HeaderCell>
        <Table.HeaderCell>Amount</Table.HeaderCell>
        <Table.HeaderCell>Date</Table.HeaderCell>
        <Table.HeaderCell>To</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
    {
      listTransaction.map((transaction) => (
        // <Table.Body>
          <Table.Row>
            <Table.Cell>{transaction.from_acc}</Table.Cell>
            <Table.Cell>{transaction.amount}</Table.Cell>
            <Table.Cell >{transaction.trans_time}</Table.Cell>
            <Table.Cell>{transaction.to_acc}</Table.Cell>
            <Table.Cell positive>{transaction.status}</Table.Cell>
        </Table.Row>
        // console.log(transaction)
      ))
    }
    
      {/* <Table.Row>
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
      </Table.Row> */}
    </Table.Body>
  </Table>
  </Container>
    </div>
  )
}

export default Transactions