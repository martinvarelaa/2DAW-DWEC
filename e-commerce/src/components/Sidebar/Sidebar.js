import {
  Divider,
  Drawer,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import React from "react";
import SidebarOptionList from "./sidebarOptionList";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import useStyles from "./styles";

const Sidebar = ({ open, changeView }) => {
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
          Username
        </Typography>
      </Box>
      <Divider />
      <SidebarOptionList></SidebarOptionList>
    </Drawer>
  );
};

export default Sidebar;
