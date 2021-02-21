import React from "react";

import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Badge,
} from "@material-ui/core";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";

import useStyles from "./styles";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = ({}) => {

 

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const [open, setOpen] = React.useState(false);

  const changeView = () => {
    setOpen(!open);
  };

  
  

  


  return (

    <AppBar position="fixed" className={classes.root} color="inherit">
      <Toolbar >
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

        <div>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit" aria-label="cart">
            <ShoppingCart></ShoppingCart>
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
      <Sidebar item key={this} open={open} id="sidebar" changeView={changeView} ></Sidebar>
    </AppBar>
    
  );
};

export default Navbar;