import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Home } from "./pages";
import {NavBar} from './components'
import { Sidebar } from "./components/Sidebar";
import { Me } from "./pages/Me";
import { ComingSoon } from "./components/ComingSoon";
import { Price } from "./pages/Price";
import { ErrorPage } from "./pages/ErrorPage";

const Home = lazy(() => import('./pages/Home'));
const Bip = lazy(() => import('./components/Bip'));
const CustomCursor = lazy(() => import('./components/CustomCursor'));




function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={''}>
          <CustomCursor/>
        </Suspense>
        <NavBar/>
        <Sidebar/>
        <Suspense fallback={''}>
            <Bip/>
        </Suspense>
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
            <ErrorPage/>
          </Route>
        </Switch>
    
    </Router>
    </div>
  );
}

export default App;
