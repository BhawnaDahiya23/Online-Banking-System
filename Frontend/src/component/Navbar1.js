import React,{useState,useEffect}from 'react'
import './Style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function Navbar1({admin=false})
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
              { !admin &&
              <Navbar.Brand href="#home"><h1>Team 4</h1></Navbar.Brand>}
              { admin &&
              <Navbar.Brand href="#home"><h1>Admin Panel</h1></Navbar.Brand>}

              <Navbar.Toggle aria-controls='my-nav' />
                 
              <Navbar.Collapse id='my-nav' className="justify-content-end">
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


