/**
 * @author [Sanjith]
 * @email [sanjith.das@gmail.com]
 * @create date 2020-10-21 21:28:35
 * @modify date 2020-11-06 13:13:38
 * @desc [NavBar Component]
 */

// import react stuff
import React, { Component } from "react";
import { connect } from "react-redux";

// import bootstrap Nav
import { Nav, Navbar } from "react-bootstrap";

// to style the componet
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #fff;
    position: sticky;
    top: 0;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    font-size: 1.3rem;
    color: #000;
    position: sticky;
    top: 0;

    &:hover {
      color: red;
    }
  }
`;

class NavbarHeader extends Component {
  render() {
    const authenticated = this.props.authenticated;

    return (
      <Styles>
        <Navbar expand="lg" className="sticky-top">
          <Navbar.Brand href="/" className="htl-title-text">
            <h3>D2Luxury</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Home </Nav.Link>
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
                {authenticated ? (
                  <Nav.Link href="/register">Create Room</Nav.Link>
                ) : (
                  <Nav.Link href="/register">Register</Nav.Link>
                )}
              </Nav.Item>
              <Nav.Item>
                {authenticated ? (
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
    );
  }
}

// map the global state (authenticated ) to the props.
const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

// connect to the global state and export the component.
export default connect(mapStateToProps)(NavbarHeader);
