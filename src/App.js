import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Home } from "./pages";
import {NavBar} from './components'
import { Sidebar } from "./components/Sidebar";
import { CustomCursor } from "./components/CustomCursor";
import { Me } from "./pages/Me";
import { ComingSoon } from "./components/ComingSoon";
import { Price } from "./pages/Price";

const Home = lazy(() => import('./pages/Home'));


function App() {
  return (
    <div className="App">
      <Router>
        <CustomCursor/>
        <NavBar/>
        <Sidebar/>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={''}>
           <Home/>
          </Suspense>
        </Route>
        <Route exact path="/me">
          <Me/>
        </Route>
    
        <Route exact path="/price">
          <Price/>
        </Route>
        <Route exact path="/contact">
          <ComingSoon/>
        </Route>
        
        <Route path="*">
        
        </Route>
      </Switch>
    
    </Router>
    </div>
  );
}

export default App;
