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
             <Navbar  fixed='top' bg="dark" data-bs-theme="dark" expand='sm' >
        <Container>
          
          {/* <Nav.Link className='iconsmall' ><AdminPanelSettingsIcon/></Nav.Link> */}
          
          <Navbar.Brand href="#home">Admin Panel</Navbar.Brand>
          <Navbar.Toggle aria-controls='admin-nav' />
                 
          <Navbar.Collapse id='admin-nav' className="justify-content-end">
          
          
          <Nav className="justify-content-end" variant="underline">
           {!userToken &&  <Nav.Link href="/login">Login</Nav.Link>}
           {!userToken && <Nav.Link href="/register">Register</Nav.Link>}
           {userToken && <Nav.Link onClick={handleClick}>Logout</Nav.Link>}
            
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

           
        </>
    );
}
