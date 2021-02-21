import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import EuroSymbolIcon from "@material-ui/icons/EuroSymbol";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import InfoIcon from "@material-ui/icons/Info";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { NavLink } from "react-router-dom";

let sidebarOptionsArray = [
  { Home: [ <HomeIcon></HomeIcon>,
             '/home'] },
  { Products: [ <EuroSymbolIcon></EuroSymbolIcon>,
            '/products'] },
  { Contact: [<ContactMailIcon></ContactMailIcon>,
                 '/contact'] },
  { Sellers: [<AlternateEmailIcon></AlternateEmailIcon>,
                '/sellers'] },
  { About: [ <InfoIcon></InfoIcon>,
                 '/about'] },
];



const SidebarOptionList = ({ handleView }) => {

  return (

    
    <List>
      {
      
      
          
      sidebarOptionsArray.map((object, index) => (
         <NavLink to={Object.values(object)[0][1]} > 
          <ListItem button key={index} onClick={handleView}>
            <ListItemIcon>{Object.values(object)[0][0]}</ListItemIcon>
            <ListItemText primary={Object.keys(object)} />
          </ListItem>
        </NavLink>
        
      ))
      }
    </List>
  );
};

export default SidebarOptionList;