
import { Container } from '@material-ui/core';
import React, { useState } from 'react'
import useStyles from './styles';

import {TextField, FormControlLabel, Checkbox, Grid, Button, Link } from '@material-ui/core';



const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const classes = useStyles();



    return (
        <Container className={classes.content} >
            <div className={classes.toolbar}></div>
            <form className={classes.form} noValidate>
                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoFocus
                />
                <TextField
                    variant="filled"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    classeName={classes.control}
                />
                <Button
                    type="submit"
                    
                    variant="contained"
                    color="inherit"
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="#" variant="body2">
                            {"Sing Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default Login
