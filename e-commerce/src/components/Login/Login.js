
import { Container } from '@material-ui/core';
import React, { useState, useReducer } from 'react'
import useStyles from './styles';
import {auth} from '../../lib/firebase';
import {TextField, FormControlLabel, Checkbox, Grid, Button, Link } from '@material-ui/core';
import { Redirect } from 'react-router-dom';




const Login = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const [formInput, setFormInput] = useReducer(
        (state, newState) => ({ ...state, ...newState })
    );

    const onSubmit = (evt)=>{
        evt.preventDefault();
        auth.signInWithEmailAndPassword(formInput.email, formInput.password)
        .then((userCredential) => {

        
        const user = userCredential.user;
        localStorage.setItem('currentUser', user.displayName);
        localStorage.setItem('currentUserData', JSON.stringify(user));
        localStorage.setItem('userCart', JSON.stringify([]));
        setLoggedIn(true);
        

        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    const handleSubmit = (evt)=>{
        const name = evt.target.name;
        const value = evt.target.value;

        setFormInput({[name]: value});

    }
    const classes = useStyles();

    
    

    return (
        <Container className={classes.content} >
            <div className={classes.toolbar}></div>
            <form onSubmit={onSubmit}>
                <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoFocus
                    onChange={handleSubmit}
                />
                <TextField
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={handleSubmit}

                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="inherit"
                >
                    Sign In
                </Button>
                <Grid container>
                    <Grid item>
                        <Link href="/register" variant="body2">
                            {"Sing Up"}
                        </Link>
                    </Grid>
                </Grid>
            </form>
            {loggedIn && (
        <Redirect to="/home"/>
        )}
        </Container>
    
    )
}

export default Login
