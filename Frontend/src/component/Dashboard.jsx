import React, { useState } from "react";
import Navbar1 from "./Navbar1";
import './dashboard.css'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'
import BasicCard from "./BasicCard";
import BasicCard2 from "./BasicCard2";
import BasicCard3 from "./BasicCard3";
import BasicCard4 from "./BasicCard4";
import {Box,IconButton,Typography} from "@mui/material";
import PaymentsIcon from '@mui/icons-material/Payments';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";




export default function Dashboard  () {
  return (
    <>
    <div><Navbar1/></div>
    <div className="dashboard">
    <Container maxWidth="lg">
      <Typography variant='h4' align='center' style={{padding:20, margin:50}}>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BasicCard/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BasicCard2/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BasicCard3/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <BasicCard4/>
        </Grid>
      </Grid>
    
    </Container>
    </div>
    {/* <div className="dashboard">

    <BasicCard />
    <BasicCard2/>
    <BasicCard3/>
    <BasicCard4/>
   
    </div> */}
    </>
  )
}
