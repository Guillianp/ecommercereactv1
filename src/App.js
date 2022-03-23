import React from "react";
import './App.css';
import ProductPage from './components/pages/Products/ProductsPage'
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import {Switch, Route,} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <ProductPage />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
