import React from 'react';
import { Icon, Table ,Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import './transactions.css'
import Navbar from "./navbar";

const Accounts = () => {
  return ( 
    <div>
        <Navbar/>
        <h1 >Your Accounts</h1>
        <Container>
        <Table celled >
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Account</Table.HeaderCell>
        <Table.HeaderCell>Balance</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>5436278111</Table.Cell>
        <Table.Cell>₹100000</Table.Cell>
        <Table.Cell >Savings</Table.Cell>
        <Table.Cell><Button icon labelPosition='right'>
      View
      <Icon name='right arrow' />
    </Button></Table.Cell>
       
      </Table.Row>
      <Table.Row>
        <Table.Cell>5436278111</Table.Cell>
        <Table.Cell>₹100000</Table.Cell>
        <Table.Cell >Savings</Table.Cell>
        <Table.Cell><Button icon labelPosition='right'>
      View
      <Icon name='right arrow' />
    </Button></Table.Cell>
       
      </Table.Row>
      <Table.Row>
        <Table.Cell>5436278111</Table.Cell>
        <Table.Cell>₹100000</Table.Cell>
        <Table.Cell >Savings</Table.Cell>
        <Table.Cell><Button icon labelPosition='right'>
      View
      <Icon name='right arrow' />
    </Button></Table.Cell>
       
      </Table.Row>
      <Table.Row>
        <Table.Cell>5436278111</Table.Cell>
        <Table.Cell>₹100000</Table.Cell>
        <Table.Cell >Savings</Table.Cell>
        <Table.Cell><Button icon labelPosition='right'>
      View
      <Icon name='right arrow' />
    </Button></Table.Cell>
       
      </Table.Row>
    </Table.Body>
  </Table>
  </Container>
    </div>
  )
}

export default Accounts