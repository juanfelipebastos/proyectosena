import { useReducer } from "react";
import { createClientOrAdmin } from "../services/clientServices";
import { registrationReducer } from "../reducer/registrationReducer";
import { initialStateFormRegistration } from "../models/initialStateFormRegistration";

export const useSateRegistration = ({ showLoging }) => {
  const [state, dispatch] = useReducer(
    registrationReducer,
    initialStateFormRegistration
  );

  const {
    name,
    email,
    phone,
    address,
    identification,
    status,
    admin,
    password,
    errors,
    serverError,
  } = state;

  const handlerOnChange = (event) => {
    const { name, value, type, checked } = event.target;
    dispatch({
      type: "SET_FIELD",
      field: name,
      value:type === "checkbox" ? checked: type === "radio" ? value === "true": value,
    });
  };

  const handlerOnSubmit = async (event) => {
    event.preventDefault();
    validateFields();
    try {
      await createClientOrAdmin(state);
      console.log(state);
      dispatch({ type: "RESET_FORM" });
      showLoging();
    } catch (error) {
      if (error.response?.status === 400) {
        const errorData = error.response.data;
        console.error("Error al crear cliente:", errorData.message);

        if (errorData.errors) {
          dispatch({ type: "SET_SERVER_ERROR", serverError: null });
        } else if (errorData.message) {
          dispatch({
            type: "SET_SERVER_ERROR",
            serverError: errorData.message,
          });
        }
      } else {
        throw error;
      }
    }
  };

  const validateFields = () => {
    const errors = {};
    if (name.length < 6 || name.length > 70) {
      errors.name = "Debe tener entre 4 y 70 caracteres";
    }

    if (email.length < 15 || email.length > 100) {
      errors.email = "Debe tener entre 15 y 100 caracteres";
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      errors.email = "El email no tiene el formato correcto";
    }

    if (!/\+57 \d{10}/.test(phone)) {
      errors.phone = "Debe ser con +57 seguido de 10 digitos";
    }

    if (address.length < 8 || address.length > 200) {
      errors.address = "Debe tener entre 8 y 200 caracteres";
    }

    if (!/\d{8,10}/.test(identification)) {
      errors.identification =
        "Un máximo de 10 números y un mínimo de 8 números.";
    }

    if (password) {
      const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/;
      if (!passwordRegex.test(password)) {
        errors.password =
          "Debe tener una letra mayúscula, una letra minúscula y un número";
      }
    }
    dispatch({ type: "SET_ERRORS", errors: errors });
    return Object.keys(errors).length === 0;
  };

  return {
    handlerOnSubmit,
    handlerOnChange,
    errors,
    serverError,
    name,
    email,
    phone,
    address,
    identification,
    status,
    admin,
    password,
  };
};
