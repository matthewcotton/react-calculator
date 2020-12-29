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
      outputLine: "",
      resultHistory: [],
      resultFlag: false,
    };
  }

  // Add number or operator to outputLine
  pushInput(char) {
    // Check if result history is currently being shown
    if (this.state.outputLine.includes("Result History")) {
      this.clear();
      var validOps = ["+", "-", "/", "*"];
      // Check if char is an operator
      if (validOps.includes(char)) {
        return;
      }
    }

    // If char is "clear"
    if (char === "clear") {
      this.clear();
    }
    // If char is "="
    else if (char === "=") {
      this.calculate();
    }
    // If char is "plus-minus"
    else if (char === "plus-minus") {
      this.changeSign();
    }
    // If char is "history"
    else if (char === "history") {
      this.history();
    }
    // Else
    else {
      this.addToOutput(char);
    }
  }

  // Add to output line
  addToOutput(char) {
    var validOps = ["+", "-", "/", "*", "."];
    // Check if the resultFlag is true
    if (this.state.resultFlag) {
      // Check if char is a number
      if (!isNaN(char)) {
        this.clear();
      }
      // Check if char is an operator (+, -, /, *) or a dot
      else if (validOps.includes(char)) {
        this.setState(() => {
          return {
            resultFlag: false,
          };
        });
      }
    }

    var re = /[+\-*/]/g;
    // Check if first addition to string is an operator
    if (char.match(re) && this.state.outputLine === "") {
      return;
    }
    // If char is an operator and the last item in the string is an operator replace the last value
    else if (
      char.match(re) &&
      this.state.outputLine[this.state.outputLine.length - 1].match(re)
    ) {
      this.setState((state) => {
        return {
          outputLine:
            state.outputLine.slice(0, state.outputLine.length - 1) + char,
        };
      });
    }
    // Otherwise add char to the current string
    else {
      this.setState((state) => {
        return {
          outputLine: state.outputLine + char,
        };
      });
    }
  }

  // Evalulate the outputLine string
  calculate() {
    var equation = this.state.outputLine;
    var re = /[+\-*/.]/g;
    // If equation only includes a decimal place is an empty string
    if (equation === "." || equation === "") {
      return;
    } else if (equation[0] === "." && equation[1].match(re)) {
      this.clear();
      return;
    }
    // Check string is only contains valid characters
    equation = equation.replace(/[^-()\d/*+.]/g, "");

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
              outputLine: "",
            };
          });
        }
      }
    });

    // Check if equation is not undefined
    if (equation) {
      // Evalulate the string
      // eslint-disable-next-line
      var answer = eval(equation);

      this.setState((state) => {
        return {
          outputLine: String(answer),
          resultHistory: state.resultHistory.concat(String(answer)),
          resultFlag: true,
        };
      });
    }
  }

  // Clear the outputLine
  clear() {
    this.setState(() => {
      return {
        outputLine: "",
        resultFlag: false,
      };
    });
  }

  // Change sign if only one number is in the string
  changeSign() {
    var re = /[+\-*/]/g;
    var nums = this.state.outputLine.split(re);
    if (nums.length === 1) {
      this.setState(() => {
        return {
          outputLine: "-" + nums[0],
          resultFlag: false,
        };
      });
    } else if (nums.length === 2 && nums[0] === "") {
      this.setState(() => {
        return {
          outputLine: nums[1],
          resultFlag: false,
        };
      });
    }
  }

  history() {
    this.setState((state) => {
      return {
        outputLine: "Result History: " + state.resultHistory.join(" | "),
        resultFlag: false,
      };
    });
  }

  // Populate buttons
  renderButtonBlock(rowNum) {
    const buttons = [
      [
        ["7", "seven", "7", "full-width", ""],
        ["8", "eight", "8", "full-width", ""],
        ["9", "nine", "9", "full-width", ""],
        ["÷", "divide", "/", "full-width", ""],
      ],
      [
        ["4", "four", "4", "full-width", ""],
        ["5", "five", "5", "full-width", ""],
        ["6", "six", "6", "full-width", ""],
        ["x", "multiply", "*", "full-width", ""],
      ],
      [
        ["1", "one", "1", "full-width", ""],
        ["2", "two", "2", "full-width", ""],
        ["3", "three", "3", "full-width", ""],
        ["-", "minus", "-", "full-width", ""],
      ],
      [
        ["±", "plus-minus", "plus-minus", "full-width", ""],
        ["0", "zero", "0", "full-width", ""],
        [".", "point", ".", "full-width", ""],
        ["+", "plus", "+", "full-width", ""],
      ],
      [["=", "equals", "=", "full-width full-height", "2"]],
      [
        ["Clear", "clear", "clear", "full-width full-height", "6"],
        ["Result History", "history", "history", "full-width full-height", "6"],
      ],
    ];
    var buttonBlock = [];

    buttons[rowNum].forEach((button) => {
      const newButton = this.createButton(
        button[0],
        button[1],
        button[2],
        button[3],
        button[4]
      );
      buttonBlock.push(newButton);
    });

    return buttonBlock;
  }

  // Create a new button
  createButton(displayValue, id, calcValue, className, colWidth) {
    return (
      <Col className="p-1" xs={colWidth}>
        <Button
          variant="info"
          id={id}
          className={className}
          onClick={() => this.pushInput(calcValue)}
        >
          <h1 className="button"> {displayValue} </h1>
        </Button>
      </Col>
    );
  }

  render() {
    return (
      <Container>
        <br />
        <Row>
          <Col className="text-right">
            <Card>
              <Card.Body className="results-box">
                <h1 className="result-txt"> {this.state.outputLine} </h1>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Card>
          <Card.Body>
            <Row className="justify-content-between">
              <Col className="p-0" xs={10}>
                <Container>
                  <Row className="btn-row">{this.renderButtonBlock(0)}</Row>
                  <Row>{this.renderButtonBlock(1)}</Row>
                  <Row>{this.renderButtonBlock(2)}</Row>
                  <Row>{this.renderButtonBlock(3)}</Row>
                </Container>
              </Col>
              {this.renderButtonBlock(4)}
            </Row>
            <Row className="justify-content-center">
              {this.renderButtonBlock(5)}
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Buttons;
