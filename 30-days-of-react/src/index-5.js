import React from "react";
import ReactDOM from "react-dom/client";

const Header = (props) => {
  console.log(props);
   return (
    <header>
      <div className='header-wrapper'>
        <h1>{props.welcome}</h1>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>
          {props.firstName} {props.lastName}
        </p>
        <small>{props.date}</small>
      </div>
    </header>
  )
};

const App = () => {
    const welcome ='Welcome to 30 Days Of React'
    const title = 'Getting Started React'
    const subtitle ='JavaScript Library'
    const firstName ='Asabeneh'
    const lastName ='Yetayeh'
    const date = 'Oct 4, 2020'



    return (
        <div className='app'>
            <Header
                welcome = {welcome}
                title = {title}
                subtitle = {subtitle}
                firstName = {firstName}
                lastName= {lastName}
                date = {date}
            />
        </div>
    )
};

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
