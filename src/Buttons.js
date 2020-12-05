import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelection: "",
      resultHistory: [],
    };
  }

  // Add number or operator to currentSelection
  addNumOrOp(char) {
    // Check if char is a number and the last result is still the currentSelection
    if (
      this.state.currentSelection ===
        this.state.resultHistory[this.state.resultHistory.length - 1] &&
      !isNaN(char)
    ) {
      this.clear();
    }

    // Check if first addition to string is an operator
    var re = /[+\-*/]/g;

    if (char.match(re) && this.state.currentSelection === "") {
      return;
    }
    // If char is an operator and the last item in the string is an operator replace the last value
    else if (
      char.match(re) &&
      this.state.currentSelection[this.state.currentSelection.length - 1].match(
        re
      )
    ) {
      this.setState((state) => {
        return {
          currentSelection:
            state.currentSelection.slice(0, state.currentSelection.length - 1) +
            char,
        };
      });
    }
    // Otherwise add char to the current string
    else {
      this.setState((state) => {
        return {
          currentSelection: state.currentSelection + char,
        };
      });
    }
  }

  // Evalulate the currentSelection string
  calculate() {
    var equation = this.state.currentSelection;

    // Check string is only contains valid characters
    equation = equation.replace(/[^-()\d/*+.]/g, "");

    var re = /[+\-*/.]/g;

    // Remove unwanted operators and decimal places at the end of the string
    while (equation[equation.length - 1].match(re)) {
      equation = equation.slice(0, equation.length - 1);
    }

    // Check for too many decimal places in a number
    re = /[+\-*/]/g;
    var nums = equation.split(re);
    nums.forEach((num) => {
      if (num.includes(".")) {
        var subNum = num.split(".");
        if (subNum.length > 2) {
          equation = "";
          this.setState(() => {
            return {
              currentSelection: "",
            };
          });
        }
      }
    });

    // Check if equation is not undefined
    if (equation) {
      // Evalulate the string
      var answer = eval(equation);

      this.setState((state) => {
        return {
          currentSelection: String(answer),
          resultHistory: state.resultHistory.concat(String(answer)),
        };
      });
    }
  }

  // Clear the currentSelection
  clear() {
    this.setState(() => {
      return {
        currentSelection: "",
      };
    });
  }

  // Change sign if only one number is in the string
  changeSign() {
    var re = /[+\-*/]/g;
    var nums = this.state.currentSelection.split(re);
    if (nums.length === 1) {
      this.setState(() => {
        return {
          currentSelection: "-" + nums[0],
        };
      });
    } else if (nums.length === 2 && nums[0] === "") {
      this.setState(() => {
        return {
          currentSelection: nums[1],
        };
      });
    }
  }

  render() {
    return (
      <Container>
        <br />
        <Row>
          <Col className="text-right">
            <Card>
              <Card.Body id="results-box">
                <h1> {this.state.currentSelection} </h1>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Card>
          <Card.Body>
            <Row>
              <Col xs={10}>
                <Container>
                  <Row>
                    <Col>
                      <Button
                        variant="info"
                        id="seven"
                        onClick={() => this.addNumOrOp("7")}
                      >
                        <h1>7</h1>
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="info"
                        id="eight"
                        onClick={() => this.addNumOrOp("8")}
                      >
                        <h1>8</h1>
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="info"
                        id="nine"
                        onClick={() => this.addNumOrOp("9")}
                      >
                        <h1>9</h1>
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="info"
                        id="divide"
                        onClick={() => this.addNumOrOp("/")}
                      >
                        <h1>÷</h1>
                      </Button>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Button
                        variant="info"
                        id="four"
                        onClick={() => this.addNumOrOp("4")}
                      >
                        <h1>4</h1>
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="info"
                        id="five"
                        onClick={() => this.addNumOrOp("5")}
                      >
                        <h1>5</h1>
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="info"
                        id="six"
                        onClick={() => this.addNumOrOp("6")}
                      >
                        <h1>6</h1>
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="info"
                        id="multiply"
                        onClick={() => this.addNumOrOp("*")}
                      >
                        <h1>x</h1>
                      </Button>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Button
                        variant="info"
                        id="one"
                        onClick={() => this.addNumOrOp("1")}
                      >
                        <h1>1</h1>
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="info"
                        id="two"
                        onClick={() => this.addNumOrOp("2")}
                      >
                        <h1>2</h1>
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="info"
                        id="three"
                        onClick={() => this.addNumOrOp("3")}
                      >
                        <h1>3</h1>
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="info"
                        id="minus"
                        onClick={() => this.addNumOrOp("-")}
                      >
                        <h1>‒</h1>
                      </Button>
                    </Col>
                  </Row>
                  <br />
                  <Row>
                    <Col>
                      <Button
                        variant="info"
                        id="plus-minus"
                        onClick={() => this.changeSign()}
                      >
                        <h1>±</h1>
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="info"
                        id="zero"
                        onClick={() => this.addNumOrOp("0")}
                      >
                        <h1>0</h1>
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="info"
                        id="point"
                        onClick={() => this.addNumOrOp(".")}
                      >
                        <h1>.</h1>
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="info"
                        id="plus"
                        onClick={() => this.addNumOrOp("+")}
                      >
                        <h1>+</h1>
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col xs={2}>
                <Button
                  variant="info"
                  id="equals"
                  onClick={() => this.calculate()}
                >
                  <h1>=</h1>
                </Button>
              </Col>
            </Row>
            <br />
            <Row className="justify-content-center">
              <Button
                variant="info"
                id=""
                className="clear"
                onClick={() => this.clear()}
              >
                <h1>Clear</h1>
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Buttons;
