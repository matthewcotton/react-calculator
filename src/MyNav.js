import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./App.css";

class MyNav extends React.Component {

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand>React Calculator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
            <Navbar.Text className="nav-link">
                <a href='https://www.matthewcotton.dev/#/projects'>Back to Portfolio</a>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default MyNav;
