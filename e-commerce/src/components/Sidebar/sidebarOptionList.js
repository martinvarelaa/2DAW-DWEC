import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/HomeTwoTone";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbolTwoTone";
import ContactMailIcon from "@material-ui/icons/ContactMailTwoTone";
import InfoIcon from "@material-ui/icons/InfoTwoTone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmailTwoTone";
import { NavLink } from "react-router-dom";
import useStyles from './styles';

let sidebarOptionsArray = [
  { Home: [ <HomeIcon></HomeIcon>,
            '/home'] },
  { Products: [ <EuroSymbolIcon ></EuroSymbolIcon>,
            '/products'] },
  { Contact: [<ContactMailIcon ></ContactMailIcon>,
                '/contact'] },
  { About: [ <InfoIcon></InfoIcon>,
                '/about'] },
];



const SidebarOptionList = ({ handleView }) => {
  
  const classes = useStyles();
  
  return (

    
    <List>
      {
      
      sidebarOptionsArray.map((object, index) => (
        <NavLink key={index} className={classes.listElement}  to={Object.values(object)[0][1]} > 
          <ListItem button  onClick={handleView} >
            <ListItemIcon className={classes.icons}>{Object.values(object)[0][0]}</ListItemIcon>
            <ListItemText primary={Object.keys(object)} />
          </ListItem>
        </NavLink>
        
      ))
      }
    </List>
  );
};

export default SidebarOptionList;
