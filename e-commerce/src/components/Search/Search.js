import { Container, Typography, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import useStyles from './styles'

import {db} from '../../lib/firebase';
import Product from '../Product';


const Search = () => {

    const classes = useStyles();

    const {keyword} = useParams();

    const [searchResults, setSearchResults] = useState([]);

    useEffect( () =>{
        fetchData();
    }, [])

    const fetchData = async ()=>{

        const response = db.collection('products').where("name", "==", keyword);
        const data = await response.get();
        const arr = [];

        data.docs.map((product) => arr.push(product.data()));

        setSearchResults([...arr]);


    }

    


    return (
        <Container className={classes.mainContainer}>
            <Typography  component="h2" variant="h4" className={classes.title} display="inline">
                Search Results:
            </Typography>
            <Container>
                {
                    searchResults.map((product) => (
                        <Grid item>
                            <Product product={product}></Product>
                        </Grid>
                        
                    ))
                }
                <Grid container spacing={4}>
                    
                </Grid>
            </Container>
        </Container>
    )
}

export default Search
