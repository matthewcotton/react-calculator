import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Buttons from "./Buttons.js";
import MyNav from "./MyNav";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MyNav />
        <Buttons />
      </div>
    );
  }
}

export default App;
