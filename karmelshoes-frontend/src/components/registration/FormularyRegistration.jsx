import { InputFieldsRadioRegistration } from "./InputFieldsRadioRegistration";
import { InputFieldsRegistration } from "./InputFieldsRegistration";

/* eslint-disable react/prop-types */
export const FormularyRegistration = ({
  handlerOnSubmit,
  handlerOnChange,
  errors,
  phone,
  name,
  address,
  email,
  identification,
  status,
  admin,
  password,
  login
}) => {

  const renderComponentIfIsAdmin = () => {
    if(login.isAdmin) {
      return (<InputFieldsRadioRegistration
        handlerOnChange={handlerOnChange}
      />);
    } else {
      return (
      <>
      <div></div>
      <div></div>
      </>)
    }
  }

  return (
    <>
      <form onSubmit={handlerOnSubmit} className="formulary">
        <InputFieldsRegistration
          handlerOnChange={handlerOnChange}
          value={name}
          name="name"
          type="text"
          id="name"
          errors={errors.name}
          label="Nombre:"
        />
        <InputFieldsRegistration
          handlerOnChange={handlerOnChange}
          value={email}
          name="email"
          type="email"
          id="email"
          errors={errors.email}
          label="Correo:"
        />
        <InputFieldsRegistration
          handlerOnChange={handlerOnChange}
          value={identification}
          name="identification"
          type="text"
          id="identification"
          errors={errors.identification}
          label="Cedula De Ciudadania:"
        />
        <InputFieldsRegistration
          handlerOnChange={handlerOnChange}
          value={address}
          name="address"
          type="text"
          id="address"
          errors={errors.address}
          label="Direccion:"
        />
        <InputFieldsRegistration
          handlerOnChange={handlerOnChange}
          value={phone}
          name="phone"
          type="text"
          id="phone"
          errors={errors.phone}
          label="Telefono:"
        />
        <InputFieldsRegistration
          handlerOnChange={handlerOnChange}
          value={password}
          name="password"
          type="password"
          id="password"
          errors={errors.password}
          label="Contraseña:"
        />
        <div className="form-input-radio">
          {renderComponentIfIsAdmin()}
          <button className="button" type="submit">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};
