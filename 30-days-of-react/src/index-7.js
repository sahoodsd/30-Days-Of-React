import React from "react";
import ReactDOM from "react-dom/client";

const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavík" },
];

const Country = ({ country:{name, city} }) => {
  return (
     <div>
      <h1>{name}</h1>
      <small>{city}</small>
    </div>
  );
};

const Countries = ({ countries }) => {
  const skillList = countries.map((country) => <Country key={country.name} country={country} />);
  return <ul>{skillList}</ul>;
};

const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Country List</h1>
        <Countries countries={countries} />
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");

// ReactDOM.render(jsxElement, rootElement)
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
