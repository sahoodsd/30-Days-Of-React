import React from "react";
import ReactDOM from "react-dom/client";

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

const Button = (props) => <button onClick={props.onClick} >{props.text}</button>

const App = () => {

  const greetPeople = ()=>{
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }

  const handleDate = ()=>{
    alert(showDate(new Date()))
  }

  return (
    <div className="app">
      <Button onClick={greetPeople} text='greet people'/>
      <Button onClick={handleDate} text='Show Time'/>
    </div>
  );
};

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
