import React from "react";
import ReactDOM from "react-dom/client";

class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;

    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
          <p>Select a country for your next holiday</p>
        </div>
      </header>
    );
  }
}

const Button = ({onClick, text, style}) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  );
};

const buttonStyle = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: "3px auto",
  cursor: "pointer",
  fontSize: 22,
  color: "white",
};

const Login =  () => {
    return(
        <div>
            <h3>Please Login</h3>
        </div>
    )
}

const Welcome = () => {
    return(
        <div>
            <h1>
                Welcome to react
            </h1>
        </div>
    )
}

class App extends React.Component {
  state = {
    loggedIn: false,
    techs : ['HTML' , 'CSS', 'JS']

  };

  handlogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  };

  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 9, 2020",
    };

    const {loggedIn,techs} = this.state


    const status = this.state.loggedIn ? <Welcome/> : <Login/> 

    return (
      <div>
        <Header data={data} />
        {status}
        <Button onClick={this.handlogin} text={loggedIn ? 'Logout' : 'Login'} style={buttonStyle} />
        {techs.length === 3 && (
            <p>
                You have all the prerequisite courses to get started React
            </p>
        )}
        {!loggedIn && (
            <p>
                 Please login to access more information about 30 Days Of React
            challenge
            </p>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

// ReactDOM.render(jsxElement, rootElement)
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
