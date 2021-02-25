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
  console.log(product);

  return (
    <Card className={classes.root}>
      <CardContent>
      <Typography variant="h5" gutterBottom className={classes.title}>
            {product.name}
          </Typography>
          <CardMedia component="img" src={product.url} className={classes.img}></CardMedia>
        <div className={classes.cardContent}>

          <Typography variant="h6">{product.price}</Typography>
        </div>
        <Typography variant="h6" color="textSecondary" className={classes.description}>
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
