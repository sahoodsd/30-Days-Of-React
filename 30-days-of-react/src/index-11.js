import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class App extends Component {
  state = {
    firstName: "",
    message: "",
    key: "",
  };

  handleClick = (e) => {
    // console.log(e.altKey)
    this.setState({
      message: "Welcome to the world of events",
    });
  };

  handleMouseMove = (e) => {
    this.setState({
      message: "mouse is moving",
    });
  };

  handleChange = (e) => {
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    });
  }

  handleCopy = (e) => {
    this.setState({
        message:'Using 30 Days Of React for commercial purpose is not allowed'
    }
    )
  }

  handleBlur = (e) => {
    this.setState({
        message : 'Input field has been blurred'
    })
  }
  handleKeyPress = (e) => {
     this.setState({
      message:
        `${e.target.value} has been pressed and the keycode is ` + e.key,
    })
  }

  handleSubmit = (e) => {
     e.preventDefault()
    console.log(e.target)
    
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseMove={this.handleMouseMove}>Move Mouse on me</button>
        <p onCopy={this.handleCopy}>
            Check copy right permission by copying this text
        </p>

        <p>{this.state.message}</p>
        <label htmlFor="">Test for onKeyPress Event :</label>
        <input type="text" onKeyUp={this.handleKeyPress}/>
        <br/>
        <label htmlFor="">test for on blur event :</label>
        <input type="text" onBlur={this.handleBlur}/>
        <br/><br/>

        <form onSubmit={this.handleSubmit}>
            <label htmlFor="firstName">Firstname: </label>
            <input
                onChange={this.handleChange}
                name="FirstName"
                value={this.state.value}
            />
            <br/>
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

// ReactDOM.render(jsxElement, rootElement)
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
