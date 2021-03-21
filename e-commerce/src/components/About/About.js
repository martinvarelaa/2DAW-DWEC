import { Container, Typography, Card, CardActions, IconButton, Icon } from '@material-ui/core'
import React from 'react'
import useStyles from './styles';

import Instagram from '@material-ui/icons/Instagram'
import Twitter from '@material-ui/icons/Twitter'
import Facebook from '@material-ui/icons/Facebook'
import Phone from '@material-ui/icons/Phone'

const About = () => {

    const classes = useStyles();

    const instagramSubmit = () =>{
        window.location.href = "https://www.instagram.com/"
    }
    const twitterSubmit = () => {
        window.location.href = "https://twitter.com/"
    }
    const facebookSubmit = () => {
        window.location.href = "https://es-es.facebook.com/"
    }

    return (
       <Container className={classes.mainContainer}>
           <Typography variant="h3" component="h3" className={classes.title}>Contacta con nosotros!</Typography>
           <Card>
               <Typography component="body" variant="body1" className={classes.bodyText}>
                    MyCommerce es la tienda de informática, electrónica y telefonía líder por calidad, precio y servicio. 
                    Desde 1990 apostamos por la venta online con el objetivo de ofrecer a nuestros clientes productos específicos a 
                    precios asequibles sin renunciar a la calidad en el servicio.
                    Mantenemos la filosofía del pequeño comercio, la cercanía con el cliente y el trato personal.
               </Typography>
                <CardActions className={classes.cardActions}>
                    <IconButton onClick={instagramSubmit}>
                        <Instagram></Instagram>
                    </IconButton>
                    <IconButton onClick={facebookSubmit}>
                        <Facebook></Facebook>
                    </IconButton>
                    <IconButton onClick={twitterSubmit}>
                        <Twitter></Twitter>
                    </IconButton>
                    <IconButton>
                        <Phone></Phone><Typography className={classes.phoneNumber} variant="body1" component="body">674598188</Typography>
                    </IconButton>
            </CardActions>
           </Card>
       </Container>
            
        
    )
}

export default About;
