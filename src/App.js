import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import {NavBar} from './components'


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
      <Switch>
        <Route exact path="/">
         <Home/>
        </Route>
        <Route exact path="/about">
          
        </Route>
    
        <Route exact path="/cart">
         
        </Route>
        <Route exact path="/products">
         
        </Route>
        
        <Route path="*">
        
        </Route>
      </Switch>
    
    </Router>
    </div>
  );
}

export default App;
