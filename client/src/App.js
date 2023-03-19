import React from "react"
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Head from "./Pages/Head/Head";
import {Home} from "./Pages";
import NavBar from "./Components/NavBar/NavBar";
/* import axios from "axios"; */
/* axios.defaults.baseURL = "http://localhost:3001/"; */



function App() {
  return (
    <div className="App">
      <Head/>
      <NavBar/>
     <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
    </div>
  );
}

export default App;
