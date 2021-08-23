import './App.css';
import Header from './componemts/Header.js';
import Home from './componemts/Home';
import Footer from './componemts/Footer';
import Links from './componemts/Links';
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      
        <Switch>
          <Route exact path="/">
            <Header home = {true} links = {false} />
            <Home />
          </Route>
          <Route exact path="/home">
            <Header home = {true} links = {false} />
            <Home />
          </Route>
          <Route exact path="/links">
            <Header home = {false} links = {true} />
            <Links />
          </Route>
          
        </Switch>
      
    </Router>
    <Footer />
    </div>
  );
}

export default App;
