import { AppBar, Button, IconButton,  Toolbar, Typography } from '@mui/material';
import * as React from 'react';

import { Link  } from 'react-router-dom';


const Navbar = () => {

  return (
      <div>
      <AppBar >
              <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
        
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employe
                  </Typography>
                  <Link to='/Add'> 
            <Button variant="contained" >Add</Button></Link>&nbsp;&nbsp;
          
                  <Link to='/views'> 
                  <Button  variant="contained" >View</Button></Link>
        
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Navbar