import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PaymentsIcon from '@mui/icons-material/Payments';
import { Link } from 'react-router-dom';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{  borderRadius: '5px', borderColor: 'text.disabled'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography variant="h1" component="div">
      <PaymentsIcon/>
        </Typography>
        
        <Typography variant="body2">
            <h4>Open Account</h4>
          
          <br />
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
          
        </Typography>
      </CardContent>
      <CardActions>
      <Link to='/newaccount'>
        <Button size="small">Open</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
