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
    email: "",
    password: "",
  });

  /* const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert("Complete todos los campos");
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      alert("Ingrese un email válido");
    } else if (form.name === Pato.name && form.email === Pato.email && form.password === Pato.password) {
      history.push("/");
    } else {
      alert("Los valores ingresados no son correctos");
    }
  };
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  }; */

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError("Complete todos los campos");
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Ingrese un email válido");
    } else if (form.name === Pato.name && form.email === Pato.email && form.password === Pato.password) {
      history.push("/");
    } else {
      setError("Los valores ingresados no son correctos");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setError("");
  };

  useEffect(() => {
    dispatch(getPato());
  }, [dispatch]);
  
    return (
      <div>
        <form onSubmit={handleSubmit} className={style.form}>
          <span className={style.signup}>Sign Up</span>
          <input type="name" name="name" placeholder="Name" value={form.name} onChange={handleChange} className={style.formInput}/>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className={style.formInput}/>
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className={style.formInput}/>
          {error && <div className={style.error}>{error}</div>} {/* Si se usa el ALERT quitar esta linea */}
          <button type="submit" className={style.formSubmit}>Sign up</button>
        </form>
      </div>
    );
  };
  
  export default Form;

 
