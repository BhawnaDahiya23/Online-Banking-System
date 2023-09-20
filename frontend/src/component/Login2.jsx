import React,{useState} from 'react'
import { Form } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import Navbar1 from "./Navbar1";
import './Style.css'

export default function Login2(){

    const[error1,setError1]=useState(false)
return(


<>
<Navbar1/>
    <Container>
      
  <Form className='shadow'>
    <h1>LOGIN</h1>
    { error1 ?
    <Form.Input
    width={12}
    error={{ content: 'Please enter your username', pointing: 'below' }}
      fluid
      label='username'
      placeholder='username'
      id='form-input-first-name'
    />
    :
    <Form.Input
    width={12}
      fluid
      label='First name'
      placeholder='First name'
      id='form-input-first-name'
    />
}

{ error1 ?
    <Form.Input
    width={12}
      error='Please enter correct password'
      fluid
      label='password'
      placeholder='password'
      type='password'
    />
    
    :
    <Form.Input
    width={12}
      fluid
      label='password'
      placeholder='password'
      type='password'
    />}
    </Form>
    </Container>
    </>
)
}