import { useState, useContext, useEffect } from "react";
import { signIn } from '../services/auth';
import { useNavigate } from "react-router-dom";
import { getProfile } from "../services/auth";
import { UserContext } from "../context/userContext";

export const UseForm = ( initialForm, validateForm ) => {

  const {user, setUser} = useContext(UserContext);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleSend = async (form) => {
    try {
      const res = await signIn(form);
      const resJson = await res?.json();
      console.log(resJson);

      if(resJson.message =="Logiado con exito"){
        setUser(await getProfile());
        navigate('/');
      } else {
        alert(resJson.error)
      };
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //CAMBIAR ERRORES
    setErrors(validateForm(form));
  };

  //CUANDO CAMBIEN LOS ERRORES
  const [effects, setEffects] = useState(false);
  useEffect(() => {
    if(effects) {
      if (Object.keys(errors).length === 0) {
        handleSend(form);
      }
    }

    //DA PASO AL USE EFFECT
    setEffects(true);
  }, [errors]);

  return {
    form,
    errors,
    handleChange,
    handleSubmit,
  };
};
