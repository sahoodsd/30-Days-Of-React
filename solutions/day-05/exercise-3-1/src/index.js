import React from "react";
import ReactDOM from "react-dom/client";

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";

  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const Container = ({ hexaColor }) => {
  let style = {
    backgroundColor: hexaColor,
    color: 'white',
    textAlign : 'center',
    padding:'30px',
    margin:'5px',
    borderRadius : '6px',
    fontSize: '20px',
    fontWeight : 'bold'
  };

  return (<div style={style}>{hexaColor}</div>);
};

const App = () => (
  <div>
    <Container hexaColor={hexaColor()} />
    <Container hexaColor={hexaColor()} />
    <Container hexaColor={hexaColor()} />
    <Container hexaColor={hexaColor()} />
    <Container hexaColor={hexaColor()} />

  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
