import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPato } from "../../Redux/Actions";
import style from "./Form.module.css"

const Form = () => {

    const dispatch = useDispatch();
    const history = useHistory();
  
    const Pato = useSelector((state) => state.pato);
    console.log(Pato);
  
    const [form, setForm] = useState({
      name: "",
      lastName: "",
      email: "", 
    });
  
    const handleSubmit = (event) => {
      event.preventDefault(); 
  
      
      if (form.name === Pato.name && form.lastName === Pato.lastName && form.email === Pato.email) {
        history.push("/"); 
      } else {
        
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
