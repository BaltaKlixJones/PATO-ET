import React from "react"
import './App.css';
import { Route, Routes } from "react-router-dom";

import Head from "./Pages/Head/Head";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";



function App() {
  return (
    <div className="App">
      <Head/>
      <NavBar/>
     <Routes>
      <Route exact path="/" element={<Home/>} />
    </Routes>
    </div>
  );
}

export default App;
