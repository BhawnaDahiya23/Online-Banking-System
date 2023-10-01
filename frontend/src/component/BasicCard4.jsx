import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PaidIcon from '@mui/icons-material/Paid';
import { Link, useNavigate } from 'react-router-dom';
// import {useHistory} from 'react-router-dom'
import { useHistory } from "react-router-dom";

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard4() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography variant="h1" component="div">
        <PaidIcon/>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
         <h4> Perform Transaction</h4>
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button onClick={() => navigate('/')} size="small">Perform</Button> */}
        <Link to='/performTransaction2' size = "small">Perform</Link>
      </CardActions>
    </Card>
  );
}
