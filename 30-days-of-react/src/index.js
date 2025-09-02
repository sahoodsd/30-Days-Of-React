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
    } = this.props;
    return (
      <header>
        <div className="header-wrapper">
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
      <button className={style} onClick={onClick}>
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
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    const { techs, user, greetPeople, handleTime } = this.props;
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
            className={buttonStyles}
          />
          <Button
            text="Show time"
            onClick={handleTime}
            className={buttonStyles}
          />
        </div>
      </main>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
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

    const handleTime = () => {
      alert(showDate(new Date()));
    };

    const greetPeople = () => {
      alert("Welcome to 30 Days Of React Challenge, 2025");
    };
    return (
      <div className="app">
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={handleTime}
          greetPeople={greetPeople}
        />
        <Footer date={new Date()}/>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
