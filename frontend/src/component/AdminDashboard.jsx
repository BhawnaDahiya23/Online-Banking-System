import React, { useState } from "react";
import Navbar1 from "./Navbar1";
import AdminNavbar from "./AdminNavbar"
import './dashboard.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'
import BasicCard from "./BasicCard";
import BasicCard2 from "./BasicCard2";
import BasicCard3 from "./BasicCard3";
import BasicCard4 from "./BasicCard4";
import AdminCard1 from "./AdminCard1";
import AdminCard2 from "./AdminCard2";
import {Box,IconButton,Typography} from "@mui/material";
import PaymentsIcon from '@mui/icons-material/Payments';
import AdminCard3 from "./AdminCard3";




export default function AdminDashboard  () {
  return (
    <>
    <div><AdminNavbar/></div>
    <div className="dashboard">
    <AdminCard1/>
    <AdminCard2/>
    <AdminCard3/>
   
    </div>
    </>
  )
}
