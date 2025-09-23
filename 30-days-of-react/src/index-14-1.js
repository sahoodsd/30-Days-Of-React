import React, { Component } from "react";
import ReactDOM from "react-dom/client";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "John",
      data: [],
    };
  }

  componentDidMount() {
    console.log("I am componentDidMount and I will be last to run.");
    const API_URL =
      "https://restcountries.com/v3.1/independent?status=true&fields=flags,name,capital,population";

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  renderCountries = () => {
    return this.state.data.map((country) => {
      return (
        <div>
          <div key={country.name.common} className="country-card">
            <div>
              <img src={country.flags.png} alt={country.name.common} />
            </div>
            <div>
              <h1>{country.name.common}</h1>
              <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
              <p>Population: {country.population.toLocaleString()}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="App">
        <h1>React Component Life Cycle</h1>
        <h2>Calling API...</h2>

        <div>
          <p>There are {this.state.data.length} countries in the API</p>
          <div className="countries-wrapper">{this.renderCountries()}</div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
