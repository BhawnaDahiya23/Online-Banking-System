import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Dropdown } from 'semantic-ui-react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import './withdraw.css'
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


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

export default function PerformT() {


const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);
  const[value,setValue]=React.useState(0);
  const[acc,setAcc]=React.useState();
  const[status,setStatus]=React.useState(false);
  const [toAcc, setToAcc] = React.useState();
  const [accountList, setAccountList] = React.useState([]);
  const [balance, setBalance] = React.useState(-1);
  const [error, setError] = React.useState(null);
  const [success, setSucc] = React.useState(false);

  useEffect(() => {
    const fetchAccountNumbers = async () => {
        var getList = await axios.get('http://localhost:8080/api/account/viewAccountNumbers', {
            headers : {Authorization : localStorage.getItem('jwt')}
        }) 
        console.log(getList.data)
        const arr = []; 
        getList.data.forEach(element => {
            arr.push({
              key : element,
              value : element,
              text : element
            })
        });
        setAccountList(arr)
    }
    fetchAccountNumbers();
}, [])


  const handleClick=(e) =>{
    setValue(e.target.value)

  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log('closing')
    navigate('/dashboard')
    setOpen(false);
  };

  const handleSubmit = async () => {
    try {
        var body = {
        "from_acc" : acc.value,
        "to_acc" : Number(toAcc),
        "amount" : Number(value),

        };
        console.log(body); 
        var resp = await axios.post('http://localhost:8080/api/transactions/saveTransactions', body, {
            headers : {Authorization : localStorage.getItem('jwt')}
        })
        console.log(resp.data)
        // alert('TRANSACTION SUCCESSFUL')
        console.log(value)
        // console.log(acc.value)
        // setOpen(false)
        // setStatus(true)

        setSucc(true)
        
    } catch(e) {
        console.log('error ' + e.response.data.message)
        setError(e.response.data.message);
        // alert('TRANSACTION FAILED ' + error.response.data.message)
    }
    
}

  const handleCloseBalance = () => {
    setBalance(-1);
  }

  const handleSuccess = () => {
    setSucc(false)
  }

  const handleError = () => {
    setError(null)
  }

  const handleSetAccount = async (e, {value}) => {
   
  
    setAcc({value})

    try {  
      // 

      var resp = await axios.get('http://localhost:8080/api/account/viewBalance/' + value, {
        headers : { Authorization : localStorage.getItem('jwt') }

      })
      
      console.log(resp.data);
      setBalance(resp.data)
    }

    catch(error) {
      console.log(error)
    }


    // alert("BALANCE REMAINING " + resp.data)
   
    // setBalance()
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Perform Transaction</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Enter Below the Details in order to transfer an amount.
          </DialogContentText>
          <br/>
          <Dropdown
    placeholder='Select Your Account'
    fluid
    selection
    options={accountList}
    onChange={handleSetAccount}
  />

<Snackbar open={balance != -1} autoHideDuration={6000} onClose={handleCloseBalance}>
        <Alert onClose={handleCloseBalance} severity="info" sx={{ width: '100%' }}>
          The balance for this account is ₹{balance}
        </Alert>
    </Snackbar>

    <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleError}>
        <Alert onClose={handleError} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
    </Snackbar>

    <Snackbar open={success} autoHideDuration={6000} onClose={handleSuccess}>
        <Alert severity="success" sx={{ width: '100%' }} onClose={handleSuccess}>
          Transaction Successful
        </Alert>

    </Snackbar>

<br/>
<div classNmae="bb">
<Button variant="contained" classNmae="bb" value={100} onClick={handleClick}>₹100</Button>
&nbsp;
<Button variant="contained"  value={500}  onClick={handleClick}>₹500</Button>
&nbsp;
<Button variant="contained"  value={1000}  onClick={handleClick}>₹1000</Button>
&nbsp;
<Button variant="contained"  value={2000}  onClick={handleClick}>₹2000</Button>

</div>
<br/>
<TextField
            autoFocus
            margin="dense"
            id="name"
            label="Select Account"
            type="number"
            fullWidth
            variant="standard"
            value={toAcc}
            onChange={(event) => setToAcc(event.target.value)}
          />

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
          <Button onClick={handleSubmit}>Perform Transaction</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}