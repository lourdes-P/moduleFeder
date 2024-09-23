import React from "react";
import ReactDOM from "react-dom";
import MiCompCultura from "./MiCompCultura";

import "./index.css";

const App = () => (
  <div className="container">
     <MiCompCultura />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

  