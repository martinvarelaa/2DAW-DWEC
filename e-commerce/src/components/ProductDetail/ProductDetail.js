import React, { useEffect, useState } from 'react'
import { CardMedia, Container, Typography, Card, CardActions, IconButton, ListItem, ListItemText, ListItemIcon, List, Button } from '@material-ui/core';
import AddShoppingCart from '@material-ui/icons/AddShoppingCartOutlined'
import useStyles from './styles';
import { Redirect, useParams } from 'react-router';
import { db } from '../../lib/firebase';

const ProductDetail = () => {


    const { productID } = useParams();

    const classes = useStyles();

    const [product, setProduct] = useState({});

    const currentUser = localStorage.getItem("currentUser");

    let stockAvaliable = false;

    const fetchProduct = async () => {

        const response = db.collection('products').doc(productID);

        const doc = await response.get();

        setProduct(doc.data());
        
        

    }


    useEffect(() => { 

        fetchProduct(); 
        
    }, []);

    const objectKeys = Object.keys(product);
    stockAvaliable = product.stock >=1 ? true : false;



    return (
        <Container xs={12} sm={12} md={12} lg={12} className={classes.mainContainer}>
            <Container  className={classes.imageContainer}>
                <Card xs={12} sm={6} md={6} lg={6} className={classes.card}>
                    <Typography  variant="h5" component="h3" align="center" gutterBottom className={classes.title}>{product.name}</Typography>
                    <CardMedia
                        src={product.url}
                        component="img"
                        className={classes.image}
                    />
                    
                    <CardActions  disableSpacing className={classes.cardActions}>
                        <IconButton aria-label="Add to cart">
                            {currentUser ? <AddShoppingCart></AddShoppingCart> : <Button variant="outlined" color="primary">Inicia sesión para comprar!</Button>}
                        </IconButton>
                        <Typography component="h3" variant="h3" className={classes.price}>{product['price']}</Typography>
                    </CardActions>
                </Card>
            </Container>
            <Container className={classes.detailsConatiner}>
                <Container xs={12} sm={6} md={6} lg={6} className={classes.card}>
                    <Container spacing={4}>
                        <Typography variant="h5" component="h5" align="center" className={classes.stock} >{stockAvaliable ? "Is Avaliable!" : "We will have it soon!"}</Typography>



                        {
                            
                            objectKeys.map( (key) => {
                                

                                if(key !== "url" && key !== "stock" && key !== 'price' ){
                                    console.log(key);

                                    return(
                                    <Card className={classes.cardListItem}>
                                        <Typography component="h6" align="center" variant="h6">
                                        {key.toUpperCase()}
                                        </Typography>
                                        <Typography align="left">
                                        { product[key] }
                                        </Typography>
                                        </Card>
                                    );
                                    
                                }
                                
                            return null;
                                
                                
                            })
                        }
                    </Container>
                </Container>
            </Container>
        </Container>
    )
}

export default ProductDetail;


