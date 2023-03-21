import React from "react"
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import {Home, Location, Centro, Head, Admin, Contacto} from "./Pages";
import NavBar from "./Components/NavBar/NavBar";
import Reseñas from "./Components/Reseñas/Reseñas";
import Blog from "./Components/Blog/Blog";
import axios from "axios"; 
axios.defaults.baseURL = "https://back-pato-et-production.up.railway.app/"; 


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Head/>
      <NavBar/>
      <Route exact path="/" render={(props) => (
        <>
          <Home {...props} />
          <Location {...props} />
          <Reseñas {...props} />
        </>
      )} />
      <Route exact path="/Admin" render={(props) => (
        <>
          <Admin {...props} />
          <Location {...props} />
          <Reseñas {...props} />
        </>
      )} />
      <Route exact path="/Centro" component={Centro} />
      <Route exact path="/Blog" component={Blog} />
      <Route exact path="/Contacto" component={Contacto} />
    </BrowserRouter>
    </div>
  );
}

export default App;
