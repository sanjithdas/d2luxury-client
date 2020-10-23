/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:31:08
 * @modify date 2020-10-23 16:19:57
 * @desc [App Component - Main Component]
 */
import React, { Fragment } from "react";
import NavbarHeader  from "./components/NavbarHeader";
/**
 * import all styles
 */
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.css';
import "./css/flaticon.css"
import "./css/ionicons.min.css";
import "./css/icomoon.css";
import "./css/aos.css";


/**
 * impirt required component
 * Home , Login , Rooms , About
 */

import Home from './pages/home';
import  Login  from '../src/pages/login';
import Rooms from '../src/components/Rooms';
import About from '../src/pages/about'
import Contact from '../src/pages/contact';
import Register from '../src/pages/register';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Fragment>
     
      
      <Router>
      <NavbarHeader />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/rooms" component={Rooms} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/register" component={Register} />
            
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
