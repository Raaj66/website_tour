import React, { Component } from "react";
import { render } from "react-dom";
import { Steps, Hints } from "intro.js-react";

import "./tooltip.css"
import "./index.css";

export default class App extends Component {
  constructor(props) {
    super(props);
      
    this.state = {
      stepsEnabled: true,
      initialStep: 0,
      steps: [
        {
          element: ".first",
          intro: "Hello step",
        },
        {
          element: ".second",
          intro: "World step",
        },
        {
          element: ".third",
          intro: "New step added",
        },
        {
          element: ".fourth",
          intro: "New step added",
        },
      ],
    //   hintsEnabled: true,
    //   hints: [
    //     {
    //       element: ".hello",
    //       hint: "Hello hint",
    //       hintPosition: "middle-right",
    //     },
    //   ],
    };
  }

  onExit = () => {
    this.setState(() => ({ stepsEnabled: false }));
  };

  toggleSteps = () => {
    this.setState((prevState) => ({ stepsEnabled: !prevState.stepsEnabled }));
  };

  addStep = () => {
    const newStep = {
      element: ".alive",
      intro: "Alive step",
    };

    this.setState((prevState) => ({ steps: [...prevState.steps, newStep] }));
  };

  toggleHints = () => {
    this.setState((prevState) => ({ hintsEnabled: !prevState.hintsEnabled }));
  };

  addHint = () => {
    const newHint = {
      element: ".alive",
      hint: "Alive hint",
      hintPosition: "middle-right",
    };

    this.setState((prevState) => ({ hints: [...prevState.hints, newHint] }));
  };

  render() {
    const { stepsEnabled, steps, initialStep, hintsEnabled, hints } =
      this.state;

    return (
      <div>
        <Steps
          enabled={stepsEnabled}
          steps={steps}
          initialStep={initialStep}
          onExit={this.onExit}
        />
        {/* <Hints enabled={hintsEnabled} hints={hints} /> */}

        {/* <div className="controls">
          <div>
            <button onClick={this.toggleSteps}>Toggle Steps</button>
            <button onClick={this.addStep}>Add Step</button>
          </div>
          <div>
            <button onClick={this.toggleHints}>Toggle Hints</button>
            <button onClick={this.addHint}>Add Hint</button>
          </div>
        </div> */}
        <div
          style={{
            height: "99.5vh",
            width: "99.7vw",
            border: "1px solid",
            display: "flex",
          }}
        >
          <div>
            <div
              className="first"
              style={{ width: "49vw", height: "49vh", backgroundColor: "red" }}
            >
              first
            </div>
            <div
              className="second"
              style={{
                width: "49vw",
                height: "49vh",
                backgroundColor: "green",
              }}
            >
              second
            </div>
          </div>
          <div>
            <div
              className="third"
              style={{
                width: "49vw",
                height: "49vh",
                backgroundColor: "yellow",
              }}
            >
              third
            </div>
            <div
              className="fourth"
              style={{ width: "49vw", height: "49vh", backgroundColor: "blue" }}
            >
              fourth    
            </div>
          </div>
        </div>

        {/*         
        <h1 className="hello">Hello,</h1>
        <hr />
        <h1 className="world">World!</h1>
        <hr />
        <h1 className="alive">It's alive!</h1> */}
      </div>
    );
  }
}
