import React,{useState,useEffect}from 'react'
import './Style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

export default function Navbar1()
{
  const [userToken,setUserToken]=useState(false)
  useEffect(() => {
    if(localStorage.getItem('jwt')=== null)
        {
            setUserToken(false)
        }
        else{
            setUserToken(true)
        }
  }, [])
  const navigate=useNavigate()
  
const handleClick= () =>{
  localStorage.removeItem('jwt')
navigate('/login')
}

    return( 
        <>
             <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          
          <Nav.Link className='iconsmall' ><AdminPanelSettingsIcon/></Nav.Link>
          
          <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
          
          
          <Nav className="me-auto">
           {!userToken &&  <Nav.Link href="/login">Login</Nav.Link>}
           {!userToken && <Nav.Link href="/register">Register</Nav.Link>}
           {userToken && <Nav.Link onClick={handleClick}>Logout</Nav.Link>}
            
          </Nav>
        </Container>
      </Navbar>

           
        </>
    );
}
