import React, { useState } from "react";

import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Badge,
  InputBase,
} from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCartTwoTone";
import MenuIcon from "@material-ui/icons/MenuTwoTone";
import SearchIcon from '@material-ui/icons/SearchTwoTone'
import AccountCircle from "@material-ui/icons/AccountCircleTwoTone";
import useStyles from "./styles";
import Sidebar from "../Sidebar/Sidebar";
import NavBarMenu from "./NavBarMenu";
import { Redirect } from "react-router";

const Navbar = () => {

  const classes = useStyles();

  const [openSidebar, setOpen] = useState(false);

  const [cartRedirect, setRedirect] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [canSearch, setCanSearch] = useState(false);

  const isLogged = localStorage.getItem('currentUser');

  const [keyword, setKeyword] = useState('');

  

  const changeView = () => {
    setOpen(!openSidebar);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setUserMenuOpen(!userMenuOpen)
  };

  const handleRedirect = () =>{
    
    setRedirect(!cartRedirect);
  }
  
  const doSearch = () => {
    
    setCanSearch(true);
  }

  const handleValue = (evt) =>{

    evt.preventDefault();   
    setKeyword(evt.target.value)
    
    
  }

  return (
    <AppBar position="relative" className={classes.root} color="inherit">
      <Toolbar>
        <IconButton
          onClick={changeView}
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-controls="sidebar"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={classes.title}>
          MyCommerce
        </Typography>
        <div className={classes.search}>
          <form className={classes.search} onSubmit={doSearch}>
          <SearchIcon />
          <InputBase placeholder="Buscar" onChange={handleValue} onKeyUp={handleValue}></InputBase>
          </form>
          
        </div>
        
        <div className={classes.icons}>

          <IconButton color="inherit" onClick={isLogged ?  handleRedirect : null}>
            <ShoppingCart></ShoppingCart>
          </IconButton>
          <IconButton onClick={handleClick} edge="end" color="inherit">
            <AccountCircle />
            <NavBarMenu open={userMenuOpen} anchorEl={anchorEl}></NavBarMenu>
          </IconButton>
          

        </div>
      </Toolbar>
      <Sidebar
        item
        key={this}
        open={openSidebar}
        id="sidebar"
        changeView={changeView}
      ></Sidebar>

      {
        cartRedirect && (
          <Redirect to="/cart"></Redirect>
        ) 
        
      }

      {
        canSearch && (
          <Redirect to={"/search/"  + keyword}></Redirect>
        )
      }
    </AppBar>
  );
};

export default Navbar;
