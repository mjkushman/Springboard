import { Link, useNavigate } from "react-router-dom";

import {AppBar, Toolbar, Typography, Stack, Button} from '@mui/material';
import { useContext } from 'react';
import UserContext from '../context/UserContext';


const Navbar = () => {
  
  const {setToken, currentUser, LOCAL_STORAGE_KEY} = useContext(UserContext)

  const navigate = useNavigate()

  // Log out the user. Removes their token and data from local storage
  const handleLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    setToken(null);
  };




  return (
    <>
      <AppBar position='static' sx={{width:'100vw'}}>
        <Toolbar>
      <Typography 
      onClick={() => (navigate('/'))}
      variant='h6' 
      component='div'
      align='left'
      sx={{flexGrow:1}}>
        <Link to='/'>
        JOBLY

        </Link>
      </Typography>
      <Stack direction='row'
      spacing={2}>
        {currentUser.username && (
          <div>
          <Button color='inherit' onClick={() => (navigate('/companies'))}>Companies</Button>
          <Button color='inherit' onClick={() => (navigate('/jobs'))}>Jobs</Button>
          <Button color='inherit' onClick={() => (navigate(`/${currentUser.username}`))}>{currentUser.username}</Button>
          <Button color='inherit' onClick={handleLogout}>Log Out</Button>
          </div>
        )}
        {!currentUser.username && (
        <div>
        <Button color='inherit' onClick={() => (navigate('/login'))}>Sign In</Button>
        <Button color='inherit' onClick={() => (navigate('/signup'))}>Sign Up</Button>
        </div>
        )}
      </Stack>

        </Toolbar>
      </AppBar>
      
      {/*  THE OLD NAV

      <div className="flex row-auto">
        <div className="flex">
          <Link to="/">Home</Link>
        </div>

        If there is a user, show username and logout button
        {currentUser.username && (
          <div className="">
            <Link className="m-2 p2" to="/companies">
              Companies
            </Link>
            <Link className="m-2 p2" to="/jobs">
              Jobs
            </Link>

            <Link className="m-2 p2" to={`/${currentUser.username}`}>
              {currentUser.username}
            </Link>
            <Link className="m-2 p2" to="/logout">
              Log out
            </Link>
            <span>Log out</span>
          </div>
        )}
        {!currentUser.username && (
          <div className="">
            <Link className="m-2 p2" to="/login">
              Log in
            </Link>
            <Link className="m-2 p2" to="/signup">
              Sign up
            </Link>
          </div>
        )}
      </div>
       */}
    </>
  );
};

export default Navbar;
