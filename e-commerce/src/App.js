import React from 'react'
import { BrowserRouter as Router }  from 'react-router-dom'
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './components/Products/Products'
import Sidebar from './components/Sidebar/Sidebar'




const App = () => {
    return (
       
        <Router>
            <Navbar></Navbar>
            
        <Switch>
          <Route exact path="/home">
            
          </Route>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/contact">
            
          </Route>
        </Switch>
     
    </Router>

    )
}

export default App
