import { Link } from "react-router-dom";

export const NavConfiguration = ({
  initPage,
  showNavPerfil,
  showMainAdmin,
  showMainProductsSales
}) => {
  return (
    <>
      <nav className="nav">
        <Link onClick={initPage} className="link">
          <h1 className="title">KARMELSHOES</h1>
        </Link>
        <div className="container-nav-perfil-2">
          <h2>Configuracion</h2>
        </div>
        <div className="container-nav-perfil-3">
          <div className="img">
            <img
              style={{ width: "25px" }}
              onClick={showMainAdmin}
              src="/src/assets/imgs/cong-admin.png"
              alt=""
            />
          </div>
          <div className="img">
            <img
              style={{ width: "30px" }}
              onClick={showMainProductsSales}
              src="/src/assets/imgs/configuration-product.png"
              alt=""
            />
          </div>
          <div className="img">
            <img
              onClick={showNavPerfil}
              src="/src/assets/imgs/user-solid.svg"
              alt=""
            />
          </div>
        </div>
      </nav>
    </>
  );
};
