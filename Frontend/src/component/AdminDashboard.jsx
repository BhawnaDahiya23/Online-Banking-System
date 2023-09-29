import React, { useState } from "react";
import Navbar1 from "./Navbar1";
import AdminNavbar from "./AdminNavbar"
import './dashboard.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'
// import BasicCard from "./BasicCard";
// import BasicCard2 from "./BasicCard2";
// import BasicCard3 from "./BasicCard3";
// import BasicCard4 from "./BasicCard4";
import AdminCard1 from "./AdminCard1";
import AdminCard2 from "./AdminCard2";
import {Box,IconButton,Typography} from "@mui/material";
import PaymentsIcon from '@mui/icons-material/Payments';
import AdminCard3 from "./AdminCard3";
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";




export default function AdminDashboard  () {
  return (
    <>
    <div><AdminNavbar/></div>
    <div className="dashboard">
    <Container maxWidth="lg">
      <Typography variant='h4' align='center' style={{padding:20, margin:50}}>
        Admin Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <AdminCard1/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AdminCard2/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AdminCard3/>
        </Grid>
      </Grid>
      </Container>
    {/* <AdminCard1/>
    <AdminCard2/>
    <AdminCard3/> */}
   
    </div>
    </>
  )
}
