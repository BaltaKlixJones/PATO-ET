import React from "react"
import './App.css';
import { Switch, Route } from "react-router-dom";
import Head from "./Pages/Head/Head";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";



function App() {
  return (
    <div className="App">

     <Route path="/" component={Head} />
     <Route exact path="/" component={Home} />
     <Route path="/" component={NavBar} />

    </div>
  );
}

export default App;
