import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../axios/axiosInstance';
// import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Singup() {

  const navigate = useNavigate()

  const [ values , setValues]=useState({
    name:'',
    email:'',
    password:''
  })

  const handleChange =(e)=>{
    // console.log("name -->",e.target.name,"|  Value -->",e.target.value);
    
  setValues((prev)=>({ ...prev, [e.target.name]:e.target.value}))    
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(values);
    axiosInstance.post("user/register",values)  //this is a promise so we get the value in then()
    .then((res)=>{
      console.log(res);
      console.log('Registration successful:', res.data);
      alert(`Welcome, ${values.name}!`);
      navigate('/')//when the user register is success the goto '/' home page defined in  router.jsx 
    }).catch((error)=>{
      console.log("An Error occured in axios",error);
      alert("Something went wrong")
    })
  }

  return (
    <div
      className=" d-flex justify-content-center align-items-center"
      style={{
        height: '100vh',
        background: 'linear-gradient(135deg,rgb(18, 18, 181),rgb(160, 9, 9))'      }}
    >
      <Form
        className="bg-light p-5 rounded shadow-lg border  "
        style={{ maxWidth: '400px', width: '100%' }}  
        onSubmit={handleSubmit}
      >
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name </Form.Label>
      <Form.Control type="text" placeholder="Enter your name" onChange={handleChange} name='name' />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name='email'/>
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={handleChange} name='password' />
    </Form.Group>
    <Button variant="primary" type="submit"  >
      Submit
    </Button>
  </Form>
    </div>
  )
}

export default Singup