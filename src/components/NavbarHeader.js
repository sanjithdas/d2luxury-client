/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-21 21:28:35
 * @modify date 2020-10-30 21:05:43
 * @desc [NavBar Component]
 */

import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import PropTypes from "prop-types";
import {connect} from 'react-redux';


const Styles = styled.div`
  .navbar {
    background-color: #fff;
    position:sticky;
    top:0;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    font-size:1.3rem;
    color: #000;
    position:sticky;
    top:0;

    &:hover {
      color: red;
    }
  }
`;

class  NavbarHeader extends Component{
  constructor(){
    super();
  }
  
  render(){
    const authenticated = this.props.authenticated 
    
    return(
  <Styles>
    <Navbar expand="lg" className="sticky-top">
      <Navbar.Brand href="/">D2Luxury</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home  </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/rooms">Rooms</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav.Item>
          <Nav.Item>

            { authenticated ? (
              <Nav.Link href="/logout">Logout</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
            
            {/* <Nav.Link href="/login">{ authenticated  ? 'Logout' : 'Login'} </Nav.Link> */}
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
    )};
}

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated
})
export default connect(mapStateToProps)(NavbarHeader);
