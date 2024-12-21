import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Viewss = () => {
  // Initialize emp as an empty array
  const [emp, setEmp] = useState([]);
  const navigate=useNavigate()

  // Use useEffect to fetch data only once when the component mounts
  useEffect(() => {
    // Fetch data from the correct endpoint (/view) at port 3000
    axios.get("http://localhost:3000/view")
      .then((response) => {
        // Ensure the response data is an array
        if (Array.isArray(response.data)) {
          setEmp(response.data);
        } else {
          console.error('Expected an array, but got:', response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);  // Empty dependency array ensures it runs only once
  const delvalue = (id) => {
    console.log(id)
    axios.delete("http://localhost:3000/remove/" + id)
      .then((res) => {
        alert(res.data.message)
        window.location.reload()
    })
  }
  const updatevalue = (details) => {
    
    navigate('/Add',{state:{details}} )
  }

 
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>NAME</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Salary</TableCell>
              <TableCell align="center">Edit</TableCell>
              

            </TableRow>
          </TableHead>
          <TableBody>
            {/* Check if emp is an array and has data before calling map */}
            {Array.isArray(emp) && emp.length > 0 ? (
              emp.map((details) => (
                <TableRow >
                  <TableCell align="center">{details.Name}</TableCell>
                  <TableCell align="center">{details.Age}</TableCell>
                  <TableCell align="center">{details.Dept}</TableCell>
                  <TableCell align="center">{details.Salary}</TableCell>
                  <TableCell align="center">
                    <Button variant='contained' color='error'
                      onClick={() => { delvalue(details._id) }}>Delete</Button>&nbsp;&nbsp;
                    <Button variant='contained' onClick={() => { updatevalue(details) }}>Update</Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4}>No data available</TableCell> 
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Viewss;
