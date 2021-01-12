import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";

import "./style.css";

function App() {
  return (
    <div className="App">
       <div className="nav">
      <nav classname="nav-bar"> About us </nav>
        </div>
      <div className="container">
       
        <h1>
          Internalaya
          <br />
          Coming Soon....
        </h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
