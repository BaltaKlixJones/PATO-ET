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
    email: "",
    password: "",
  });

   const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.email || !form.password) {
      alert("Complete todos los campos");
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      alert("Ingrese un email válido");
    } else if (form.email === Pato[0].email && form.password === Pato[0].password) {
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
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className={style.formInput}/>
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className={style.formInput}/>
          <button type="submit" className={style.formSubmit}>Sign up</button>
        </form>
      </div>
    );
  };
  
  export default Form;

 
