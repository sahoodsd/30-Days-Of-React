import React from "react";
import ReactDOM from "react-dom/client";
import SdImage from "./images/sd.jpg";

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

class Header extends React.Component {
  render() {
    const {
      data: {
        welcome,
        title,
        subtitle,
        author: { firstName, lastName },
        date,
      },
      style,
    } = this.props;
    console.log(style);
    return (
      <header style={style}>
        <div className="header-wrapper" >
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{showDate(date)}</small>
        </div>
      </header>
    );
  }
}

class Count extends React.Component {
  render() {
    const { count, addOne, minusOne, style } = this.props;
    return (
      <div>
        <h1>{count}</h1>
        <Button style={style} text="+1" onClick={addOne}></Button>
        <Button style={style} text="-1" onClick={minusOne}></Button>
      </div>
    );
  }
}

class TechList extends React.Component {
  render() {
    const { techs } = this.props;
    const techList = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techList;
  }
}

class UserCard extends React.Component {
  render() {
    const {
      user: { firstName, lastName, image },
    } = this.props;
    return (
      <div className="user-card">
        <img src={image} alt="sd-image" />
        <h2>
          {firstName}
          {lastName}
        </h2>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    const { text, onClick, style } = this.props;
    return (
      <button style={style} onClick={onClick}>
        {text}
      </button>
    );
  }
}

const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
    } = this.props;
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text="greet people"
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text="Show time" onClick={handleTime} style={buttonStyles} />
          <Button
            text="Change Background"
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count
            count={count}
            addOne={addOne}
            minusOne={minusOne}
            style={buttonStyles}
          />
        </div>
      </main>
    );
  }
}

class Footer extends React.Component {

  render() {
    return (
      <footer style={this.props.style}>
        <div className="footer-wrapper" >
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  state = {
    count: 0,
    styles: {
      background: "#61dbfb",
      color: "#000",
    },
  };

  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };

  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleTime = () => {
    alert(this.showDate(new Date()));
  };

  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2025");
  };

  changeBackground = () => {
    this.setState((prevState) => {
      const isBlue = prevState.styles.background === "#61dbfb";
      return {
        styles: {
          background: isBlue ? "#08202c" : "#61dbfb",
          color: isBlue ? "#fff" : "#000",
        },
      };
    });
  };

  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: new Date(), // date needs to be formatted to a human readable format
    };
    // const date = new Date()

    const user = { ...data.author, image: SdImage };
    const techs = ["HTML", "CSS", "Javascript"];

    return (
      <div className="app">
        {/* {this.state.styles} */}
        <Header data={data} 
        style={this.state.styles}
        />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
        />
        <Footer date={new Date()} 
        style={this.state.styles}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
