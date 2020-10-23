/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:31:08
 * @modify date 2020-10-23 13:58:33
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


/**
 * impirt required component
 * Home , Login
 */

import {Home} from './pages/home';
import  Login  from '../src/pages/login'

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
            
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
