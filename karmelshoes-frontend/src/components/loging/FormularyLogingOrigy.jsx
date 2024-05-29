/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { logingModel } from "../../models/logingModel";
import { useState } from "react";

export const FormularyLogingOrigy = ({ showLoging, showForgotPassword, handlerLoging, showRegistrer }) => {
  const [dataFormulary, setDataFormulary] = useState(logingModel);
  const { name, password } = dataFormulary;
  const [errors, setErrors] = useState({});

  const handlerOnChange = (event) => {
    const { name, value } = event.target;
    setDataFormulary((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlerOnSubmit = async (event) => {
    event.preventDefault();
    if (validateFormulary(dataFormulary)) {
      try {
        await handlerLoging(dataFormulary);
        showLoging();
        setDataFormulary(logingModel);
      } catch (error) {
        if (error.response.status === 401) {
          setErrors({
            message: "Error en la autenticacion nombre o contraseña incorrectos"
          })
        }
      }
    }
  };

  const validateFormulary = (data) => {
    const newErrors = {};

    if (data.password && !/[A-Z]/.test(data.password)) {
      newErrors.password = "La contraseña debe contener al menos una letra mayúscula";
    }

    if (data.password && !/[a-z]/.test(data.password)) {
      newErrors.password = "La contraseña debe contener al menos una letra minuscula";
    }

    if (data.password && !/[0-9]/.test(data.password)) {
      newErrors.password = "La contraseña debe contener al menos un numero";
    }

    if (data.password.length < 4) {
      newErrors.password = "La contraseña debe tener 4 o mas caracteres";
    }

    if (data.name.length < 4) {
      newErrors.name = "El nombre debe tener 4 o mas caracteres";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const renderMainErrorMessage = () => {
    if (errors.password || errors.message || errors.name) {
      return (
        <main className="div-message-error scale-up-vertical-top">
          <h4>{errors.password || errors.message || errors.name}</h4>
        </main>
      );
    } else {
      return null;
    }
  }


  return (
    <>
      <form onSubmit={handlerOnSubmit} className="section-loging">
        <div className="section-loging-1">
          <Link onClick={showLoging}>
            <img src="/src/assets/imgs/circulo-marca-x.svg" alt="" />
          </Link>
        </div>
        <div className="input-name">
          <label htmlFor="name">
            <img src="/src/assets/imgs/circulo-de-usuario.svg" alt="" />
          </label>
          <input
            onChange={handlerOnChange}
            value={name}
            name="name"
            className="input-loging"
            type="text"
            id="name"
            placeholder="Nombre"
            required
          />
        </div>
        <div className="input-password">
          <label htmlFor="password">
            <img src="/src/assets/imgs/cerrar.svg" alt="" />
          </label>
          <input
            onChange={handlerOnChange}
            value={password}
            name="password"
            className="input-loging"
            type="password"
            id="password"
            placeholder="Contraseña"
            required
          />
        </div>
        <div className="input-save-password">
          <label htmlFor="save-password">
            <h5 onClick={showRegistrer}>Registrarse</h5>
          </label>
          <Link onClick={showForgotPassword}>
            <h5>¿Has olvidado tu contraseña?</h5>
          </Link>
        </div>
        <input className="input-submit" type="submit" value="Iniciar" />
      </form>
      {renderMainErrorMessage()}
    </>
  );
};
