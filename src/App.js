import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import {NavBar} from './components'
import { Sidebar } from "./components/Sidebar";



function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Sidebar/>
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
