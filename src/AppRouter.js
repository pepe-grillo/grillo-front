import React  from 'react';
import {Switch, Route} from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom"
import AddProducts from "./containers/AddProduct/AddProduct"
import ProductsList from "./containers/ProductsList/ProductsList"

const AppRouter = () => (
    <Router>
      <Switch>
        <Route path='/products-list' component={ProductsList}/>
        <Route exact path='/' component={AddProducts}/>
      </Switch>
    </Router>
)

export default AppRouter;