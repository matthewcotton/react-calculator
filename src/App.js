import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Buttons from "./Buttons.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Buttons></Buttons>;
  }
}

export default App;
