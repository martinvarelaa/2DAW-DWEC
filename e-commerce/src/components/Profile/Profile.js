import { Container, Typography, Card, TextField, CardActions, Button } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import { auth } from '../../lib/firebase';

import useStyles from './styles';


const Profile = () => {

    const classes = useStyles();

    const [formInput, setFormInput] = useState([]);

    const [redirect, setRedirect] = useState({'one': false, 'two' : false});


        const user = JSON.parse(localStorage.getItem('currentUserData'));
        

    const handleChange = evt => {

        const name = evt.target.name;
        const newValue = evt.target.value;
        setFormInput({ [name]: newValue });
        
    };


    const onSubmit = evt =>{
        
        const currentUser = auth.currentUser;
    
        currentUser.updateEmail(formInput['email']).then(()=> console.log('Done')); 
    
        currentUser.updateProfile({ 'displayName': formInput['displayName'] }).then(() => console.log('Done'));
            

    }

    return (
        <Container lg={12} xs={12} md={12} xl={12} className={classes.root}>
            <Card lg={12} xs={12} md={12} xl={12} className={classes.card}>
                <Typography variant="h4" componenet="h4" className={classes.title}>
                    Your Profile
                </Typography>

                <form className={classes.form}>

                    <TextField
                        className={classes.input}
                        label="Username"
                       
                        onChange={handleChange}
                        onKeyUp={handleChange}
                        multiline
                        type="text"
                        name="displayName"
                        
                    />
                    <TextField
                        className={classes.input}
                        label="Email"
                        
                        onChange={handleChange}
                        onKeyUp={handleChange}
                        multiline
                        type="text"
                        name="email"
                        
                    />


                </form>
                <CardActions className={classes.cardActions}>
                    <Button onClick={onSubmit} variant="contained" color="primary">Save</Button>
                    
                </CardActions>
            </Card>
            {redirect['one'] && redirect['two'] && (<Redirect to="/home"></Redirect>)}
        </Container>

    )
}

export default Profile
