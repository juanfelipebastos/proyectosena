import { Link } from "react-router-dom";
import "/src/css/styleSectionRegistration.css";
import { useSateRegistration } from "../../hooks/useSateRegistration";
import { FormularyRegistration } from "./FormularyRegistration";

export const MainRegistration = ({ showRegistrer, showLoging, login }) => {
  const {
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
  } = useSateRegistration({ showLoging });

  return (
    <>
      <section className="sectionRegistration">
        <img className="img" src="/src/assets/imgs/foto-registro.jfif" alt="" />
        <article className="arcticle">
          <Link onClick={showRegistrer}>
            <img src="/src/assets/imgs/circulo-marca-x.png" alt="" />
          </Link>
          <FormularyRegistration
            login={login}
            handlerOnSubmit={handlerOnSubmit}
            handlerOnChange={handlerOnChange}
            errors={errors}
            phone={phone}
            name={name}
            email={email}
            address={address}
            identification={identification}
            status={status}
            admin={admin}
            password={password}
          ></FormularyRegistration>
        </article>
        {serverError && (
          <article className="message-error">
            <h2>No se puede regitrar, Ya existe este correo: {email}</h2>
          </article>
        )}
      </section>
    </>
  );
};
