/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "/src/css/styleFormularyForgotPassword.css"
import { useState } from "react";
import { updatePasswordByEmail } from "../../services/clientServices";

const initialStateFormularyForgotPassword = {
  newPassword: "",
  identification: "",
  email: "",
}

export const FormularyForgotPasword = ({ showForgotPassword }) => {

  const [dataFormulary, setDataFormulary] = useState(initialStateFormularyForgotPassword);
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
        await updatePasswordByEmail(dataFormulary.email, dataFormulary.identification, dataFormulary.newPassword );
        setErrors({
          message: "Se ha reestablecido correctamente la contraseña",
        })
        setDataFormulary(initialStateFormularyForgotPassword);
      } catch (error) {
        const errors = error.response.data;
        if(errors.code === 404) {
          setErrors({
            message: errors.message,
          })
        }
      }
    }
  }

  const validateFormulary = (data) => {
    const newErrors = {};

    if (data.newPassword && !/[A-Z]/.test(data.newPassword)) {
      newErrors.newPassword = "La contraseña debe contener al menos una letra mayúscula";
    }

    if (data.newPassword && !/[a-z]/.test(data.newPassword)) {
      newErrors.newPassword = "La contraseña debe contener al menos una letra minuscula";
    }

    if (data.newPassword && !/[0-9]/.test(data.newPassword)) {
      newErrors.newPassword = "La contraseña debe contener al menos un numero";
    }

    if (data.newPassword.length < 4) {
      newErrors.newPassword = "La contraseña debe tener 4 o mas caracteres";
    }

    if (data.identification && !/^[0-9]+$/.test(data.identification)) {
      newErrors.identification = "La identificación debe tener solo numeros";
    }

    if (data.identification.length <= 7) {
      newErrors.identification = "La identificación debe tener más de 7 caracteres";
    }

    if (data.identification.length > 10) {
      newErrors.identification = "La identificación debe tener menos de 11 caracteres";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  const renderMainErrorMessage = () => {
    if (errors.newPassword || errors.identification || errors.email || errors.message) {
      return (
        <main className="div-message-error scale-up-vertical-top">
          <h4>{errors.newPassword || errors.identification || errors.email || errors.message}</h4>
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
          <Link onClick={showForgotPassword}>
            <img src="/src/assets/imgs/flecha-circulo-izquierda.png" alt="" />
          </Link>
        </div>
        <div className="input-name">
          <label htmlFor="new-password">
            <img src="/src/assets/imgs/cerrar.svg" alt="" />
          </label>
          <input
            required
            name="newPassword"
            value={dataFormulary.newPassword}
            onChange={handlerOnChange}
            type={"password"}
            id="new-password"
            placeholder="Nueva Contraseña"
          />
        </div>
        <div className="input-password">
          <label htmlFor="repeat-password">
            <img src="/src/assets/imgs/icons8-user-48.png" alt="" />
          </label>
          <input required name="identification" value={dataFormulary.identification} onChange={handlerOnChange} type="text" id="repeat-password" placeholder="# Identificacion" />
        </div>
        <div className="input-password-email">
          <label>
            <img src="/src/assets/imgs/icons8-email-50.png" alt="" />
          </label>
          <input required name="email" value={dataFormulary.email} onChange={handlerOnChange} type="email" placeholder="Introduce tu email" />
        </div>
        <input className="input-submit" type="submit" value="Guardar" />
      </form>
      {renderMainErrorMessage()}
    </>
  );
};
