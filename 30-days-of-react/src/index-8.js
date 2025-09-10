import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
  state = {
    image: "dog",
  };

  changeAnimal = () => {
    let dogURL =
      "dog";
    let catURL =
      "cat";
    let image = this.state.image === dogURL ? catURL : dogURL

    this.setState({ image })
  };
  render() {
    return (
      <div className='App'>
        <h1>30 Days Of React</h1>
        <div className='animal'>
          <img src={this.state.image} alt='animal' />
        </div>

        <button onClick={this.changeAnimal} className='btn btn-add'>
          Change
        </button>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");

// ReactDOM.render(jsxElement, rootElement)
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
