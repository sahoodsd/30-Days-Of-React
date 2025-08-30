import React from "react";
import ReactDOM from "react-dom/client";
import sdImage from "./images/sd.jpg";

const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Sahood",
  lastName: "SD",
};
const date = "Oct 2, 2020";

const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
);

const numOne = 3;
const numTwo = 2;

const Result = () => (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

const yearBorn = 1999;
const currentYear = 2020;
const age = currentYear - yearBorn;

const PersonAge = (
  <p>
    {" "}
    {author.firstName} {author.lastName} is {age} years old
  </p>
);

const UserCard = () => (
  <div className="user-card">
    <img src={sdImage} alt="sd-image" />
    <h4>
      {author.firstName} {author.lastName}
    </h4>
  </div>
);

const TechList = () => {
  const techs = ["HTML", "CSS", "JavaScript"];
  const techsFormatted = techs.map((tech) => <li>{tech}</li>);
  return techsFormatted;
};

const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>
        <TechList />
      </ul>
      {Result}
      {PersonAge}
      <UserCard />
    </div>
  </main>
);

const copyRight = '2020'

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
