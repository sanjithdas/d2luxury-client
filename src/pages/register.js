/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-23 16:36:03
 * @modify date 2020-10-27 23:12:51
 * @desc [Login Component]
 */
import React, { Component, useState } from "react";

import { Row, Col, Form, Card, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { compose } from "redux";

//redux stuff
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import {signupUser } from '../actions/userActions';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
     
      errors: {},
    };
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    this.props.signupUser(newUserData , this.props.history)
    // console.log("Submitted Auth");
  };
// setting errors
  componentWillReceiveProps(nextProps){
    if (nextProps.UI.errors)
     this.setState({ errors: nextProps.UI.errors})
  }

  
  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    //console.log("onchange Auth");
  };

  render() {
    
    const { UI: {loading} } = this.props
    const { errors } = this.state;

    return (
      <div>
        <Row className="mt-5 mb-5">
          <Col md={6} className="mx-auto">
            <Card>
              <Card.Body>
                <h1 className="text-center pb-4, pt-3">
                  <FontAwesomeIcon icon="lock" className="text-primary" />{" "}
                  <span className="text-black">Register</span>
                </h1>

                <Form onSubmit={this.onHandleSubmit}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={this.state.email}
                      onChange={this.onHandleChange}
                    />
                    <span style={{ color: "red" }}>{errors.email} </span>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onHandleChange}
                    />

                    <span style={{ color: "red" }}>{errors.password} </span>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.onHandleChange}
                    />

                    <span style={{ color: "red" }}>
                      {errors.confirmPassword}{" "}
                    </span>
                  </Form.Group>

                  {errors.general && (
                    <span style={{ color: "red" }}>{errors.general} </span>
                  )}

                  {errors.error === "auth/weak-password" && (
                    <span style={{ color: "red" }}>
                      Please use a strong password{" "}
                    </span>
                  )}

                  <Button type="submit" variant="black" className="btn-block">
                    Signup
                    {loading && <div class="spinner-grow text-warning"></div>}
                  </Button>
                  <br></br>
                  <small>
                    {" "}
                    Already have an account ? login{" "}
                    <Link to="/login"> here </Link>
                  </small>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Register.propTypes = {
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired
  
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
})



export default connect(mapStateToProps, {signupUser})(Register);
