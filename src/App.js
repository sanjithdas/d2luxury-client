/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:31:08
 * @modify date 2020-10-23 22:56:07
 * @desc [App Component - Main Component]
 */
/**
 * import react and installed modules.
 */
import React, { Fragment } from "react";

/**
 * import all styles
 */
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.css';
import "./css/flaticon.css"
import "./css/ionicons.min.css";
import "./css/icomoon.css";
import "./css/aos.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import { Provider } from 'react-redux';
import store from './store';

// Font awestuff 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt, faTimes, faHome, faPlus, faQuestion, faSortDown, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

/**
 * impirt required component
 * Home , Login , Rooms , About , Create room (admin)
 */

import Home from './pages/home';
import  Login  from '../src/pages/login';
import Rooms from '../src/components/Rooms';
import About from '../src/pages/about'
import Contact from '../src/pages/contact';
import Register from '../src/pages/register';
import Create from '../src/components/admin/rooms/create'
import NavbarHeader  from "./components/NavbarHeader";


function App() {
  library.add(faPencilAlt, faTimes, faHome, faPlus, faQuestion, faSortDown, faExclamationTriangle)
  return (
    <Provider  store={store}>
      {console.log(store)}
     <Router>
      <NavbarHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/register" component={Register} />
          <Route path="/admin/room/create" component={Create} />
        </Switch>
     </Router>
     </Provider>
    
  );
}

export default App;
