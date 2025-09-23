import React, { Component } from "react";
import ReactDOM from "react-dom/client";


const User = (firstName) => (
    <div>
        <h1>{firstName}</h1>
    </div>
  )

class App extends Component {
  constructor(props) {
    super(props);
    console.log("I am the constructor and i will be th frist one run.");
    this.state = {
      firstName: "Jhon",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      "I am getDerivedStateFromProps and I will be the second to run."
    );
     // ✅ Only override state if props.firstName exists
    if (props.firstName) {
      // return { firstName: props.firstName };
    return null; // no changes

    }
    return null; // no changes
  }

  componentDidMount() {
    console.log("I am componentDidMount and I will be last to run.");
  }

  render() {
    console.log("I am render and I will be the third to run.");
    return (
      <div className="App">
        <h1>React Component Life Cycle</h1>
        <h3>getDerivedStateFromProps</h3>
        <User firstName={this.state.firstName}></User>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

// ReactDOM.render(jsxElement, rootElement)
const root = ReactDOM.createRoot(rootElement);
root.render(<App></App>);
