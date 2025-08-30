import React from "react";
import ReactDOM from "react-dom/client";
import sdImage from './images/sd.jpg'


const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstname: 'sahood',
  lastname: 'sd'
}
const date = 'Aug 25, 2025'

const header = (
  <header className="header-wrapper">
    <h1>{welcome}</h1>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <p>Instructor : {author.firstname} {author.lastname}</p>
    <small>{date}</small>
  </header>
);

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1999
const currentYear = new Date().getFullYear()

const age = currentYear - yearBorn

const personAge = (
  <p>
    {' '}
    {author.firstname} {author.lastname} is {age} years old
  </p>
)

const techs = ['HTML','CSS','Javascript']
const techsFormatted = techs.map((techs)=><li>{techs}</li>)

const user = (
    <div>
        <img style={{height:'250px'}} src={sdImage} alt='sd-image'/>
    </div>
)

const main = (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started  {' '} <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>
        {techsFormatted}
      </ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
);

const copyRight = 'Copyright 2020'

const footer = (
  <footer>
    <div className='footer-wrapper'>
    < p>{copyRight}</p>
    </div>
  </footer>
);

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
);

const rootElement = document.getElementById("root");

// ReactDOM.render(jsxElement, rootElement)
const root = ReactDOM.createRoot(rootElement);
root.render(app);
