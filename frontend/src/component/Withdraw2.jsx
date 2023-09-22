import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Dropdown } from 'semantic-ui-react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import './withdraw.css'


import 'semantic-ui-css/semantic.min.css'

const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
     
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
     
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
      
    },
   
  ]

export default function FormDialog() {
  const [open, setOpen] = React.useState(true);
  const[value,setValue]=React.useState("");
  const[acc,setAcc]=React.useState("");
  const[status,setStatus]=React.useState(false);
  
  const handleClick=(e) =>{
    setValue(e.target.value)

  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit=()=>{
    console.log(value)
    console.log(acc.value)
    setOpen(false)
    setStatus(true)
  }

  return (
    <div>
      {status && <><Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Payment Done — Your Current Balance is 2000</Alert>
        </Stack>

      </>}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>WithDraw</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Enter Below the Details in order to Withdraw the amount.
          </DialogContentText>
          <br/>
          <Dropdown
    placeholder='Select Your Account'
    fluid
    selection
    options={friendOptions}
    onChange={(e,{value}) => setAcc({value})}
  />
<br/>
<div classNmae="bb">
<Button variant="contained" classNmae="bb" value="100" onClick={handleClick}>₹100</Button>
&nbsp;
<Button variant="contained"  value="500"  onClick={handleClick}>₹500</Button>
&nbsp;
<Button variant="contained"  value="1000"  onClick={handleClick}>₹1000</Button>
&nbsp;
<Button variant="contained"  value="2000"  onClick={handleClick}>₹2000</Button>

</div>
<br/>


          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Amount"
            type="number"
            fullWidth
            variant="standard"
            value={value}
            onChange={handleClick}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Withdraw</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}