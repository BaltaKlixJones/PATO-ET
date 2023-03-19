import React from "react"
import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Head from "./Pages/Head/Head";
import {Home} from "./Pages/Home";
import NavBar from "./Components/NavBar/NavBar";
/* import axios from "axios"; */
/* axios.defaults.baseURL = "http://localhost:3001/"; */
import Reseñas from "./Components/Reseñas/Reseñas";
import Location from "./Pages/Location /Location";
import Centro from "./Pages/Centro/Centro";


function App() {
  return (
    <div className="App">
      <Head/>
      <NavBar/>
     <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route exact path="/" component={Location} />
      <Route exact path="/" component={Reseñas} />
      <Route exact path="/Centro" component={Centro} />
    </BrowserRouter>
    </div>
  );
}

export default App;
