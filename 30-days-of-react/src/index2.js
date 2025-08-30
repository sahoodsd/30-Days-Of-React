import React from 'react'
import ReactDOM from 'react-dom/client'
import sdImage from './images/sd.jpg'


const user = (
    <div>
        <img src={sdImage} alt='sd-image'/>
    </div>
)

const rootElement = document.getElementById("root");

// ReactDOM.render(jsxElement, rootElement)
const root = ReactDOM.createRoot(rootElement);
root.render(user);