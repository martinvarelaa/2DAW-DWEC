
import { Typography, AppBar, Container, Toolbar } from '@material-ui/core';
import React from 'react'

import useStyles from './styles';




const Footer = () => {

    const classes = useStyles();

    return (
        <AppBar position="static" color="inherit" className={classes.root}>
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="subtitle2" color="inherit">
                        © 2021 Martín Varela e-Commerce
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Footer;
