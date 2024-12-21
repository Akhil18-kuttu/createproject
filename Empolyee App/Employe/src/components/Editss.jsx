import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useLocation, useNavigate } from 'react-router'

const Editss = (props) => {
  var [input, setinput] = useState({ Name: "", Age: "", Dept: "", Salary: "" })
  const navigate = useNavigate()
  const location=useLocation()
  
  const inputHandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
    
  }
  const addhandler = () => {
    if (location.state !== null) {
      axios.put("http://localhost:3000/update/"+location.state.details._id, input)
     .then((res) => {
      alert(res.data.message)
      navigate('/views')
      
     })
      } 
    else{
    axios.post("http://localhost:3000/add" ,input)
    .then((res) => {
      alert(res.data.message)
      navigate('/views')
       
    })
     }
  }
  
  useEffect(() => {
  if (location.state !== null) {
    setinput({
      Name: location.state.details.Name,
      Age: location.state.details.Age,
      Dept: location.state.details.Dept,
      Salary: location.state.details.Salary,
    });
  }
}, [location.state]); // Only rerun when location.state changes

    

  return (
      <div> 
          <h1>hjhgjhj</h1>
      <TextField type='text' label='Name' variant='outlined'
        name="Name"
        value={input.Name}
        onChange={inputHandler}
      >Name</TextField> <br /> <br />
      
      <TextField type='number' label='Age' variant='outlined'
       name="Age"
        value={input.Age}
        onChange={inputHandler}
      >Age</TextField> <br /> <br />
      
      <TextField type='text' label='department' variant='outlined'
       name="Dept"
        value={input.Dept}
        onChange={inputHandler}
      >department</TextField> <br /> <br />
      
      <TextField type='number' label='Salary' variant='outlined'
       name="Salary"
        value={input.Salary}
        onChange={inputHandler}
      >Salary</TextField> <br /> <br />
          <Button variant='contained' onClick={addhandler}>Submit</Button> 

    </div>
  )
}

export default Editss