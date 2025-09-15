import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const options = [
  {
    value: "",
    label: "--Select Country--",
  },
  {
    value: "Finland",
    label: "Finland",
  },
  {
    value: "Sweden",
    label: "Sweden",
  },
  {
    value: "Norway",
    label: "Norway",
  },
  {
    value: "Denmark",
    label: "Denmark",
  },
];

const selectOptions = options.map(({ value }, { label }) => (
  <option value="{value}">{label}</option>
));

console.log(selectOptions);

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    tel: "",
    dateOfBirth: "",
    favoriteColor: "",
    weight: "",
    gender: "",
    file: "",
    bio: "",
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
    touched: {
      firstName: false,
      lastName: false,
    },
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      this.setState({
        skills: { ...this.state.skills, [name]: checked },
      });
    } else if (type === "file") {
      console.log(type, "cehck here");
      this.setState({ [name]: e.target.files[0] });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = this.state;

    const formattedSkills = [];

    for (const key in skills) {
      console.log(key);
      if (skills[key]) {
        formattedSkills.push(key.toUpperCase());
      }
    }
    const data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formattedSkills,
    };
    /*
     the is the place where we connect backend api 
     to send the data to the database
     */
    console.log(data);
  };

  handleBlur = (e) => {
    const {name,value} = e.target
    this.setState({
        touched : {...this.state.touched,[name] : true}
    })
  }

  validate = (e) => {
    const errors = {
        firstName : ''
    }

    if((this.state.touched.firstName && this.state.firstName.length < 3) || (this.state.touched.firstName && this.state.firstName.length > 12)){
        errors.firstName = 'Firstname must me between 2 and 12'
    }
    return errors
  }

  render() {
    const {
      first,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
    } = this.state;
    const {firstName} = this.validate()
    return (
      <div className="App">
        <h3>Add Student</h3>
        <form on onSubmit={this.handleSubmit} noValidate>
          <div className="row">
            <div className="form-group">
              <label htmlFor="firstName">First Name: </label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={first}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
              />
              <h1>{firstName}</h1>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name: </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={this.handleChange}
              />
              <h1>{lastName}</h1>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="Email"
              />
            </div>
          </div>
          <div>
            <p>Gender</p>
            <div>
              <input
                type='radio'
                id='female'
                name='gender'
                value='Female'
                onChange={this.handleChange}
                checked={gender === 'Female'}
              />
              <label htmlFor='female'>Female</label>
            </div>
            <div>
              <input
                id='male'
                type='radio'
                name='gender'
                value='Male'
                onChange={this.handleChange}
                checked={gender === 'Male'}
              />
              <label htmlFor='male'>Male</label>
            </div>
            <div>
              <input
                id='other'
                type='radio'
                name='gender'
                value='Other'
                onChange={this.handleChange}
                checked={gender === 'Other'}
              />
              <label htmlFor='other'>Other</label>
            </div>
          </div>
          <div>
            <p>Select your skills</p>
            <div>
              <input
                type='checkbox'
                id='html'
                name='html'
                onChange={this.handleChange}
              />
              <label htmlFor='html'>HTML</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='css'
                name='css'
                onChange={this.handleChange}
              />
              <label htmlFor='css'>CSS</label>
            </div>
            <div>
              <input
                type='checkbox'
                id='javascript'
                name='javascript'
                onChange={this.handleChange}
              />
              <label htmlFor='javascript'>JavaScript</label>
            </div>
          </div>
          <div>
            <label htmlFor='bio'>Bio</label> <br />
            <textarea
              id='bio'
              name='bio'
              value={bio}
              onChange={this.handleChange}
              cols='120'
              rows='10'
              placeholder='Write about yourself ...'
            />
          </div>

          <div>
            <input type='file' name='file' onChange={this.handleChange} />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");

// ReactDOM.render(jsxElement, rootElement)
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
