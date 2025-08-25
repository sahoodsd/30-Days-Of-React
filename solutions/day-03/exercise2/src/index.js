import React from 'react'
import ReactDOM from 'react-dom/client'
import csslogo from './css_logo.png'


const user = (
    <div>
        <img src={csslogo} alt='css-logo'/>
    </div>
)

const rootElement = document.getElementById("root");

// ReactDOM.render(jsxElement, rootElement)
const root = ReactDOM.createRoot(rootElement);
root.render(user);