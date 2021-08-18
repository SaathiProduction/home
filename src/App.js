import './App.css';
import Header from './componemts/Header.js';
import Home from './componemts/Home';
import Links from './componemts/Links';
import Contact from './componemts/Contact';
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
            <Header home = {true} links = {false} contact = {false}/>
            <Home />
          </Route>
          <Route exact path="/links">
            <Header home = {false} links = {true} contact = {false}/>
            <Links />
          </Route>
          <Route exact path="/contact">
            <Header home = {false} links = {false} contact = {true}/>
            <Contact />
          </Route>
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
