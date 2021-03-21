import React, { useState, useEffect } from 'react'
import { Menu, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import { Redirect } from 'react-router';
import {auth} from '../../../lib/firebase';

//Faltan los option list, cambiar por un prop el valor del texto 
//"Profile" y "Log Out".

const NavBarMenu = ({ open, anchorEl }) => {

  const classes = useStyles();

  const [currentUser, setCurrentUser] = useState(null);

  const [canRedirect, setCanRedirect] = useState({});
  
  useEffect(()=>{

    setCurrentUser(localStorage.getItem('currentUser'));
    
    })


  const doLogOut = () => {

    localStorage.removeItem('currentUser');
    localStorage.removeItem('userCart');
    localStorage.removeItem('currentUserData');
    auth.signOut();

    setCanRedirect( {logOut : true});
    
  }


  const logIn = () =>{
    setCanRedirect({login : true});
    console.log(canRedirect);
    
    
  }

  const goProfile = () =>{
    setCanRedirect({profile:true})
  }

  const goRegister = () => {
    setCanRedirect({ register: true });
  }


  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      keepMounted
    >
      {currentUser ? <MenuItem className={classes.root} onClick={goProfile} >Profile</MenuItem> : <MenuItem className={classes.root} onClick={goRegister}>Register</MenuItem> }
      
      <MenuItem className={classes.root} onClick={currentUser ? doLogOut : logIn }>{currentUser ? "Log Out" : "Log In" }</MenuItem>
      

      {canRedirect.login && (
        <Redirect to="/login" />
      )}

      {canRedirect.register && (
        <Redirect to="/register" />
      )}

      {canRedirect.profile && (
        <Redirect to="/profile" />
      )}
    </Menu>


  )
}

export default NavBarMenu
