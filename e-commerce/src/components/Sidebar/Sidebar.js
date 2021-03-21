import {
  Divider,
  Drawer,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import React, {useState, useEffect} from "react";
import SidebarOptionList from "./sidebarOptionList";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeftTwoTone";

import useStyles from "./styles";

const Sidebar = ({ open, changeView }) => {

  const [username, setUsername] = useState(null);

  useEffect(() => { setUsername(localStorage.getItem('currentUser')) });

  const classes = useStyles();

  if (!open) {
    return null;
  }
  
  return (
    <Drawer
      classes={{ paper: classes.sidebar }}
      anchor="left"
      variant="temporary"
      open={open}
    >
      <Box
        width="100%"
        display="flex"
        flexDirection="row"
      >
        <IconButton onClick={changeView} className={classes.backButton}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography justify="center" className={classes.username}>
          {username ? username : "Anonimo"}
        </Typography>
      </Box>
      <Divider />
      <SidebarOptionList handleView={changeView}></SidebarOptionList>
    </Drawer>
  );
};

export default Sidebar;
