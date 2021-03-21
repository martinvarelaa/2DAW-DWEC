import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart, Delete, Info } from "@material-ui/icons";


import useStyles from './styles';
import { Redirect } from "react-router";

const Product = ({ product, productID, cart, userCart, user }) => {  //Desctructuring props

  const classes = useStyles();

  const [canRedirect, setCanRedirect] = useState(false);

  const handleInfoClick = () => {
    setCanRedirect(true);
  }

  const addToCart = () => {
    const userCart = JSON.parse(localStorage.getItem('userCart'));
    userCart.push(product);
    localStorage.setItem('userCart', JSON.stringify(userCart));

  }

  const deleteFromCart = () => {

    const arr = [...userCart[0]];
    const index = arr.indexOf(product);
    arr.splice(index, 1);
    userCart[1](arr);
    localStorage.setItem('userCart', JSON.stringify(arr))

  }




  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography xs={12} variant="h5" gutterBottom className={classes.title}>
          {product.name}
        </Typography>
        <CardMedia component="img" src={product.url} className={classes.img}></CardMedia>
        <div className={classes.cardContent}>

          <Typography variant="h6" className={classes.price}>{product.price}</Typography>
        </div>
        
        <CardActions disableSpacing className={classes.cardActions}>

          {!cart && user ? <IconButton aria-label="Add to cart" onClick={addToCart}> <AddShoppingCart></AddShoppingCart> </IconButton> : null}

          <IconButton aria-label="Product info" onClick={cart ? deleteFromCart : handleInfoClick}>
            {cart ? <Delete></Delete> : <Info></Info>}
          </IconButton>

        </CardActions>

      </CardContent>
      {canRedirect && (
        <Redirect to={"/productDetail/" + productID}></Redirect>
      )}

    </Card>
  );
};

export default Product;
