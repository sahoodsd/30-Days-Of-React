import React from "react";
import ReactDOM from "react-dom/client";
import csslogo from "./css_logo.png";
import htmllogo from "./html_logo.png";
import reactlogo from "./react_logo.png";
import jslogo from "./js_logo.png";

const Logo = ({ logoPath, altName }) => (
  <div>
    <img src={logoPath} alt={altName} />
  </div>
);

const ImageRow = ()=>(
  <div className="image-row">
    <Logo logoPath={csslogo} altName="alt-css" />
    <Logo logoPath={htmllogo} altName="alt-html" />
    <Logo logoPath={jslogo} altName="alt-js" />
    <Logo logoPath={reactlogo} altName="alt-react" />
  </div>
);

const title = <h5>Front End Technologies</h5>;

const App = () => {

  return (
    <div className="main-wrapper">
      {title}
      <ImageRow />
    </div>
  );
};

const rootElement = document.getElementById("root");

// ReactDOM.render(jsxElement, rootElement)
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
