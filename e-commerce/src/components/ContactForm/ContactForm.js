import React, { useReducer } from "react";
import useStyles from "./styles";
import { Container, Link, TextField, Button, Grid } from "@material-ui/core";

const ContactForm = () => {
  const classes = useStyles();

  const [formInput, setFormInput] = useReducer((state, newState) => ({
    ...state,
    ...newState,
  }));

  const handleInput = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setFormInput({ [name]: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <Container>
      <div className={classes.toolbar}></div>
      <form onSubmit={onSubmit}>
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          onChange={handleInput}
        />
        <TextField
          variant="filled"
          margin="normal"
          required
          fullWidth
          name="comments"
          label="Comments"
          type="multiline"
          id="password"
          onChange={handleInput}
          multiline 
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="inherit"
          className={classes.submit}
          
        >
          Send!
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
  );
};

export default ContactForm;
