import React from 'react'
import {Grid} from '@material-ui/core'
import Product from '../Product';

import {db} from '../../lib/firebase';



import useStyles from './styles';




const Products = () =>{

        
        const productsRef = db.collection("products");

        
        /*
            productsRef.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        
         async function getData(){
            
            const doc =  await productsRef.get();
            if (!doc.exists) {
              console.log('No such document!');
            } else {
              console.log('Document data:', doc.data());
            }
        }

        getData(); */
        
    
    



    

    const classes = useStyles();

    const productList = [{
        'id' : 1 ,
        'title': 'Xbox One',
        'description' : 'console',
        'price' : '200€'
    },{
        'id' : 2,
        'title': 'PlayStation 4',
        'description' : 'console',
        'price' : '220€'
    }];

    return (
        
        <main className={classes.content}>
             <div className={classes.toolbar}></div>
            <Grid container justify="center" spacing={4}  >
               
            {
               
             productList.map( (product) => ( 
                   <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
               ))
               }
            
                    
                
                
            </Grid>
        </main>
    );
};

export default Products;