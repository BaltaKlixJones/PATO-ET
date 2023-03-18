import React from "react"
import './App.css';
import { Switch, Route } from "react-router-dom";
import Head from "./Pages/Head/Head";
import NavBar from "./Components/NavBar/NavBar";


function App() {
  return (
    <div className="App">
     
      <Head/>    
      <NavBar/>
    </div>
  );
}

export default App;
