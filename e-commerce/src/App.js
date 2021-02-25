import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './components/Products/Products'
import Footer from './components/Footer';
import { Container } from '@material-ui/core'

import useStyles from './styles'




const App = () => {

  const classes = useStyles();

  return (
    <Router>
      <Navbar></Navbar>
      <Container className={classes.root}>
      <Switch>
        <Route exact path="/home">
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/contact">
        </Route>
      </Switch>

      </Container>
      
      <Footer></Footer>
    </Router>
  );
}

export default App;
