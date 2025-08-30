import React from "react";
import ReactDOM from "react-dom/client";

// const Age = (props) => (
//     <div>The Person is {props.age} years old</div>
// )

// const Weight = (props) => (
//     <div>The weight of the object of the earth is {props.weight}</div>
// )

// const Status =(props) => {
//     let status = props.status ? 'Old enough to drive' : 'too young for driving'
//     return (
//         <div>{status}</div>
//     )
// }


// const Skills = (props) => {
//     const skillList = props.skills.map((skill) =><li>{skill}</li>)
//     return (
//         <ul>{skillList}</ul>
//     )
// }


const Header = (props) => {
    return(<header>
      <div className='header-wrapper'>
        <h1>{props.data.welcome}</h1>
        <h2>{props.data.title}</h2>
        <h3>{props.data.subtitle}</h3>
      </div>
    </header>)
}

const App = () => {

    const data = {
        welcome : 'welcome',
        title : 'titkaskd',
        subtitle : 'sadasd'
    }
    
    return (
        <div className='app'>
            <Header data={data}/>
        </div>
    )
};

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
