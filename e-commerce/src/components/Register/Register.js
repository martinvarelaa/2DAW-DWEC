import React, { useReducer, useState } from "react";
import { TextField, Container, Button, Grid, Link, Typography } from "@material-ui/core";
import { auth } from "../../lib/firebase";
import useStyles from "./styles";
import { Redirect } from 'react-router-dom';

const Register = () => {

  const [successOnRegister, setSuccessOnregister] = useState(false);

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      email: "",
      password: "",
      displayName: "",
    }
  );


  const onSubmit = (evt) => {

    evt.preventDefault();

    if (formInput.password === formInput.repeatPassword) {

      auth.createUserWithEmailAndPassword(formInput.email, formInput.password)
        .then((userCredential) => {


          userCredential.user.updateProfile({
            displayName: formInput.displayName
          })

          const user = userCredential.user;


          if (user) {
            setSuccessOnregister(true);
          }

        })
        .catch((error) => {

          console.log(error.code, error.message);

        });

    } else {
      return <Typography>Passwords dont match!</Typography>
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
            id="displayName"
            label="Username"
            name="displayName"
            onChange={handleInput}
            type="text"
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            type="email"
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
      {successOnRegister && (
        <Redirect to="/login"></Redirect>
      )}
    </div>

  );
};

export default Register;
