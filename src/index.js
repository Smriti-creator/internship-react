import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";
import Clock from "react-clock";
import "./style.css";


function App() {
  return (
    <div className="App">
       <div className="nav">
    
      <nav classname="nav-bar" bgcolor="#000000"> Contact us: +977-99999999 </nav>
 </div>
      <div className="container">
        <h1>
          Internalaya
          <br />
          Coming Soon....
        </h1>
        <Timer />
        <Optin />
        <Clock />
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
