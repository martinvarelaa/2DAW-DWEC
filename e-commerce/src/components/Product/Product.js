import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";


import useStyles from './styles';

const Product = ({product}) => {  //Desctructuring product from props
  
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardMedia className="" image=""></CardMedia>
      <CardContent>
      <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
        <div className={classes.cardContent}>

          <Typography variant="h6">{product.price}</Typography>
        </div>
        <Typography variant="h6" color="textSecondary">
          {product.description}
        </Typography>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to cart">
            <AddShoppingCart></AddShoppingCart>
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Product;
