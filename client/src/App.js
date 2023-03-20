import React from "react"
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Head from "./Pages/Head/Head";
import {Home} from "./Pages/Home";
import NavBar from "./Components/NavBar/NavBar";
import Reseñas from "./Components/Reseñas/Reseñas";
import Location from "./Pages/Location /Location";
import Centro from "./Pages/Centro/Centro";
import Blog from "./Components/Blog/Blog";
import axios from "axios"; 
axios.defaults.baseURL = "https://back-pato-et-production.up.railway.app/"; 


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Head/>
      <NavBar/>
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Location} />
      <Route exact path="/" component={Reseñas} />
      <Route exact path="/Centro" component={Centro} />
      <Route exact path="/Blog" component={Blog} />
    </BrowserRouter>
    </div>
  );
}

export default App;
