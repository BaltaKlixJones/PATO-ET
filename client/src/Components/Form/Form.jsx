import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPato } from "../../Redux/Actions";
import style from "./Form.module.css"

const Form = () => {

    const dispatch = useDispatch();
    const history = useHistory();
  
    const pato = useSelector((state) => state.pato);
    console.log(pato);
  
    const [form, setForm] = useState({
      name: "",
      lastName: "",
      email: "", 
    });
  
    const handleSubmit = (event) => {
      event.preventDefault(); // Evita el comportamiento por defecto del formulario
  
      // Itera sobre cada objeto en el array pato para verificar si hay una coincidencia
      const match = pato.some((p) => {
        return form.name === p.name && form.lastName === p.lastName && form.email === p.email;
      });
  
      if (match) {
        history.push("/"); // Redirecciona a la página de inicio
      } else {
        // Aquí manejas el caso en que los valores no coinciden
        alert("Los valores ingresados no son correctos");
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setForm({ ...form, [name]: value });
    };

    useEffect(() => {
        dispatch(getPato());
      }, [dispatch]);
  
    return (
      <div>
        <form onSubmit={handleSubmit} className={style.form}>
          <span className={style.signup}>Sign Up</span>
          <input type="name" name="name" placeholder="Name" value={form.name} onChange={handleChange} className={style.formInput}/>
          <input type="lastName" name="lastName" placeholder="LastName" value={form.lastName} onChange={handleChange} className={style.formInput}/>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className={style.formInput}/>
  
          <button type="submit" className={style.formSubmit}>Sign up</button>
        </form>
      </div>
    );
  };
  
  export default Form;
