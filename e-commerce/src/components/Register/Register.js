import React, { useReducer} from "react";
import { TextField, Container, Button, Grid, Link } from "@material-ui/core";
import { auth } from "../../lib/firebase";
import useStyles from "./styles";
import {Redirect} from 'react-router-dom';

const Register = () => {

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: ""
    }
  );


  const onSubmit = (evt) => {

        evt.preventDefault();

      if(formInput.password === formInput.repeatPassword){

        auth.createUserWithEmailAndPassword(formInput.email, formInput.password)
        .then((userCredential) => { 
          
        const user = userCredential.user;

        if(user){
            return <Redirect to="/login"/>
        }

        })
        .catch((error) => {

        console.log(error.code, error.message);

        });
      }else{
        console.log('Passwords dont match!');
      }        
   
    }
    

  const classes = useStyles();

  const handleInput = evt => {

    const name = evt.target.name;
    const newValue = evt.target.value;
    
    setFormInput({ [name]: newValue });

  };

  return (
    <div>
      <Container className={classes.content}>
        <div className={classes.toolbar}></div>
        <form onSubmit={onSubmit}>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            onChange={handleInput}
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
            onChange={handleInput}
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="repeatPassword"
            label="Repat Password"
            type="password"
            id="repeatPassword"
            autoComplete="current-password"
            onChange={handleInput}
          />
          <Button
            type="submit"
            variant="contained"
            color="inherit"
            className={classes.submit}
            
          >
            Register!
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already an account? Sign in!"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
};

export default Register;
