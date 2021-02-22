import React from 'react'
import {Grid} from '@material-ui/core'
import Product from '../Product';

import {db} from '../../lib/firebase';



import useStyles from './styles';




const Products = () =>{

  
            var data = [];
            db.collection("products").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    data.push(doc.data());
                   
                    
                });
                data.forEach((product, index) =>{
                    console.log(Object.values(product))
                });
            });
        
 
    
        
    const classes = useStyles();

    

    return (
        
        <main className={classes.content}>
             <div className={classes.toolbar}></div>
            <Grid container justify="center" spacing={4}  >
            {
             data.forEach( (product,index) => ( 
                   <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
               ))
               }
            
                    
                
                
            </Grid>
        </main>
    );
};

export default Products;