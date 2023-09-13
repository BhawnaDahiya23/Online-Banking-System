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
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'Check Balance',
  },
  {
    header: 'Show Transaction',
    description:
      'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'Past 6 Transaction',
  },
  {
    header: 'History',
    description:
      'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
    meta: 'Last 7 site',
  },
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
