import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import Container from "react-bootstrap/Container";
//import Col from "react-bootstrap/Col";
//import Row from "react-bootstrap/Row";
//import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";
import "./App.css";
import Buttons from "./Buttons.js"; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }

  render() {
    return (
        <Buttons></Buttons>
    );
  }
}

export default App;