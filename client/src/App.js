import React from "react"
import './App.css';
import { Route, BrowserRouter, useLocation, Redirect } from "react-router-dom";
import {Home, Location, Centro, Head, Admin, Contacto} from "./Pages";
import NavBar from "./Components/NavBar/NavBar";
import Reseñas from "./Components/Reseñas/Reseñas";
import Blog from "./Components/Blog/Blog";
import Form from "./Components/Form/Form";
import Cursos from "./Pages/Cursos/Cursos";
import Descripcion from "./Pages/Descripcion/Descripcion";
import QuienSoy from "./Pages/Info/QuienSoy";
import axios from "axios"; 
import { BD } from "./config";
axios.defaults.baseURL = BD; 


function App() {

  const location = useLocation();
  

  return (
    <div className="App">
      <BrowserRouter>
      {location.pathname.startsWith('/Admin') ? (
  <Head />
) : (
  <>
    <Head />
    <NavBar />
  </>
)}
      
        <Route exact path="/" render={(props) => (
          <>
            <Home {...props} />
            <Descripcion {...props} />
            <Reseñas {...props} />
          </>
        )} />
        <Route exact path="/Admin" component={Form} />
         <Route exact path="/Administrador/:id" component={Admin} />
        <Route exact path="/Centro" component={Centro} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Contacto" component={Contacto} />
        <Route exact path="/Cursos" component={Cursos} />
        <Route exact path="/QuienSoy" component={QuienSoy} />
      </BrowserRouter>
    </div>
  );
}

export default App;
