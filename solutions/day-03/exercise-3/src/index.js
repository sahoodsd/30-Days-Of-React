import React from "react";
import ReactDOM from "react-dom/client";

const title = "SUBSCRIBE";
const subTitle = "Sign up with your email address to receive news and updates.";

const header = <h1>{title}</h1>;
const subHeader = <h5>{subTitle}</h5>;

const InputField = ({placeholder,name,type='text'}) => (
  <input placeholder={placeholder} name={name} type={type} />
);
const Button = () => <button>Subscribe</button>;

const App = () => {
  return (
    <div className="main-wrapper">
      <div className="container">
        <main>
          <div className="row">{header}</div>
          <div className="row">{subHeader}</div>
          <div className="row">
            <InputField placeholder='First name' name='first_name'/>
            <InputField placeholder='Last name' name='last_name'/>
            <InputField placeholder='Email' name='Email'/>
          </div>
          <div className="row">
            <Button />
          </div>
        </main>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
