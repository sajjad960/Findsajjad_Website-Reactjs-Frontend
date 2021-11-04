import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/">
         
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
