/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-30 21:36:21
 * @modify date 2020-10-30 22:06:02
 * @desc [Logout component]
 */

// Redux
import React, { Component } from "react";
import { connect } from "react-redux";

// logout

import { logoutUser } from "../actions/userActions";

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
    console.log('successfully loggedout')
    this.props.history.push("/login");
  }
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionsToProps ={
  logoutUser,
};

export default connect(mapStateToProps,mapActionsToProps)(Logout);
