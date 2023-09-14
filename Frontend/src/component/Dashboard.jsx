import React, { useState } from "react";
import Navbar from "./navbar";
import './dashboard.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'

const items = [
  {
    header: 'Check Account Balance',
    description:
      '',
    meta: 'Check Balance',
  },
  {
    header: 'Show Transaction',
    description:
     '',
    meta: 'Past  Transactions',
  },
  {
    header: 'History',
    description:
      '',
    meta: 'See your History',
  },
  {
    header: 'Apply for Internet Banking',
    description:
      '',
    meta: 'Net Banking',
  }
]


export default function Dashboard  () {
  return (
    <>
    <div><Navbar/></div>
    <div className="form">
    <Card.Group items={items} />
    </div>
    </>
  )
}
