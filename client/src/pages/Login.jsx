import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../axios/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Login() {
  const navigate=useNavigate()
   // Create a state object for the form values
  const [values, setValues] = useState({
    email: "", 
    password: "" 
  });

  const handleChange = (e) => {
    // Use the input's name attribute to update the corresponding state property
    setValues((prevValues) => ({ ...prevValues, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit behavior
    // Send a POST request to the backend /user/login endpoint
    axiosInstance.post("user/login", values)
    .then((res)=>{
      // On success,  store the authentication token and navigate to the dashboard
      alert("Login successful");
      console.log("login successfull -->",res);
      
      navigate('/');//redirect to the home page 
    }).catch((error) => {
      console.error("Login Error:", error);
      alert("Invalid credentials or server error");
    });
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', background: 'linear-gradient(135deg,rgb(18, 18, 181),rgb(160, 9, 9))' }}>
      <Form 
      onSubmit={handleSubmit}
      className="bg-light p-5 rounded shadow-lg border" style={{ maxWidth: '400px', width: '100%' }}>
        <Form.Group className="mb-3" controlId="loginBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' required 
          onChange={handleChange} 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="loginBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' required 
          onChange={handleChange} 
          />
        </Form.Group>
        <Button variant="primary" type="submit">Login</Button>
      </Form>
    </div>
  );
}

export default Login;
