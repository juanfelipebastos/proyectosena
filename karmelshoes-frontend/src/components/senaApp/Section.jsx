/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "/src/css/styleSection.css";

export const Section = ({login, showLoging, showRegistrer, handlerLogout, name}) => {

  const renderSectionIfIsAuth = () => {
    if (!login.isAuth) {
      return (
        <section className="section">
          <div className="img-logo-section">
            <img src="/src/assets/imgs/logo-k.png" alt="KARMELSHOES" />
          </div>
          <Link onClick={showRegistrer}>Registrarse</Link>
          <Link onClick={showLoging}>Inicio</Link>
        </section>
      );
    } else {
      return (
      <section className="section">
        <h2>Bienvenido</h2>
        <Link onClick={handlerLogout}>Cerrar Sesion</Link>
        <h2 className="h2-name">{name}</h2>
      </section>
      );
    }
  };

  return <>{renderSectionIfIsAuth()}</>;
};
