import React from 'react'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register'
import ContactForm from './components/ContactForm'
import Home from './components/Home';
import Cart from './components/Cart';
import Search from './components/Search';
import Profile from './components/Profile';
import About from './components/About';
import { Container } from '@material-ui/core'

import useStyles from './styles'
import ProductDetail from './components/ProductDetail/ProductDetail'




const App = () => {

  const classes = useStyles();

  return (
    <Router>

      <Navbar></Navbar>

      <Container className={classes.root}>
        <Switch>

          <Route exact path="/">
            <Redirect to="/home"/>
          </Route>
          
          <Route exact path="/home">

            <Home></Home>

          </Route>

          <Route exact path="/products">
            <Products/>
          </Route>

          <Route exact path="/contact">
            <ContactForm></ContactForm>
          </Route>

          <Route exact path="/login">
            <Login></Login>
          </Route>

          <Route exact path="/register">
            <Register></Register>
          </Route> 

          <Route exact path="/productDetail/:productID?"> 
            <ProductDetail></ProductDetail>
          </Route>

          <Route exact path="/cart"> 
            <Cart></Cart>
          </Route>

          <Route exact path="/search/:keyword"> 
            <Search></Search>
          </Route>

          <Route exact path="/profile">
            <Profile></Profile>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

        </Switch>

      </Container>

      <Footer></Footer>

      

    </Router>
  );
}

export default App;
