/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 12:31:08
 * @modify date 2020-10-27 23:22:21
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
import "bootstrap/dist/css/bootstrap.css";
import "./css/flaticon.css";
import "./css/ionicons.min.css";
import "./css/icomoon.css";
import "./css/aos.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios'
import { Provider } from "react-redux";
import store from "./store";

// Font awestuff
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPencilAlt,
  faTimes,
  faHome,
  faPlus,
  faQuestion,
  faSortDown,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

import { SET_AUTHENTICATED } from './actions/types';
import {logoutUser, getUserData} from './actions/userActions';

/**
 * impirt required component
 * Home , Login , Rooms , About , Create room (admin)
 */

import Home from "./pages/home";
import Login from "../src/components/Login";
import Rooms from "../src/components/Rooms";
import About from "../src/pages/about";
import Contact from "../src/pages/contact";
import Register from "../src/pages/register";
import Create from "../src/components/admin/rooms/Create";
import NavbarHeader from "./components/NavbarHeader";
import room_details from "./pages/room_details";
import Footer from "../src/components/FooterC";
import AuthRoute from "./util/AuthRoute";
import { Map, GoogleApiWrapper } from "google-maps-react";
import jwtDecode from "jwt-decode";
const mapStyles = {
  width: "100%",
  height: "100%",
};

let authenticated;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
    // this.props.push("/login");
    //authenticated = false;
  } else {
    store.dispatch({ type : 'SET_AUTHENTICATED' });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
    //authenticated = true;
  }
}
function App() {
  library.add(
    faPencilAlt,
    faTimes,
    faHome,
    faPlus,
    faQuestion,
    faSortDown,
    faExclamationTriangle
  );
  return (
    <Provider store={store}>
     
      <Router>
        <NavbarHeader />
        <Switch>
          <Route exact path="/" component={Home} />
          <AuthRoute
            exact
            path="/login"
            component={Login}
           
          />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <AuthRoute
            exact
            path="/register"
            component={Register}
            
          />
          <Route path="/admin/room/create" component={Create} />
          <Route path="/room/details/:roomno" component={room_details} />
        </Switch>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
