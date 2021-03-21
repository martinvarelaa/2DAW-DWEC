import React, { useState, useEffect } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'

import Product from '../Product';

import { db } from '../../lib/firebase';



import useStyles from './styles';




const Products = () => {

    const classes = useStyles();

   


    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {

        const response = db.collection('products');
        const data = await response.get();
        setProducts( data.docs.map((product)=> product));

        
    }

    const user = localStorage.getItem('currentUser');

    useEffect(() => {

        fetchProducts();
        
        

    }, []); 


    
    

    return (

        <main className={classes.content}>
            <div className={classes.toolbar}></div>
            
            <Grid container justify="flex-start" spacing={4} className={classes.grid} >
                {
                    
                    products.map((product , index) => (

                        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product.data()} productID ={product.id} user={user} />
                        </Grid>
                        

                    ))
                    }
                    


            </Grid>
           
            

        </main>
    );
};

export default Products;