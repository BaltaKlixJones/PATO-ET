import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getPato } from "../../Redux/Actions";
import style from "./Form.module.css"
import Swal from "sweetalert2";



const Form = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const Pato = useSelector((state) => state.pato);  

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
    } else {
      const authenticatedUser = Pato.find(user => user.email === form.email && user.password === form.password);
      if (authenticatedUser) {
        const adminPath = `PATO/${Pato[0].id}`;
        Swal.fire({
          title: 'Login',
          text: 'Logeando...',
          icon: 'success',
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false,
          allowOutsideClick: false
        }).then(() => {
          setTimeout(() => {
            history.push(`/Administrador/patriciajonesaministradora?admin=${adminPath}/a123lxzcjj44p55ad4091-33-2`);
          }, 1000);
        });
      } else {
       Swal.fire({
        title: 'Error',
        text: "¡Usuario o contraseña incorrectos!",
        icon: 'error',
        confirmButtonColor: '#19a501fd',
        confirmButtonText: 'Okey'
      })
      }
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
          <span className={style.signup}>Iniciar sesion</span>
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} className={style.formInput}/>
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className={style.formInput}/>
          <button type="submit" className={style.formSubmit}>Sign up</button>
        </form>
      </div>
    );
  };
  
  export default Form;

 
