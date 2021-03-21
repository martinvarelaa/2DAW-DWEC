import { Button, Container, Grid, Typography } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import Product from '../Product/Product';
import useStyles from './styles';

const Cart = () => {

    const classes = useStyles();

    const [userCart , setUserCart] = useState([]);
    
    useEffect(() => setUserCart(JSON.parse(localStorage.getItem('userCart')))
        , []);

    userCart.map(product => product.price.split('').pop());

    var realPrice = 0;

    userCart.map(product => {

        const price = product.price.split('');
        price.indexOf(price.pop());
        realPrice += +price.join('');

    })



    return (
        <Container xs={12} lg={12} xl={12} md={12} className={classes.mainContainer} >
            <Typography variant="h3" component="h3">
                Cart
            </Typography>

            <Grid className={classes.gridOfProducts} container spacing={5}>
{
    userCart.map( (product,index) => (
        <Grid item key={index}>
            <Product product={product} cart={true} userCart={[userCart, setUserCart]}></Product>
        </Grid>
        
    ))
}
            </Grid>

            <Container className={classes.cartDetails} xs={12} lg={12} xl={12} md={12}>
                <Typography variant="h4" component="h4">Total price: {realPrice}€</Typography>
                <Typography variant="h5" component="h5">Total items: {userCart.length}</Typography>
                <Button className={classes.button} variant="contained">Buy!</Button>
            </Container>
        </Container>
            
        
    )
}

export default Cart
