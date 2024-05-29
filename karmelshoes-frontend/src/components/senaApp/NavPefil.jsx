import { Link } from "react-router-dom";

import "/src/css/styleNavPerfil.css";

export const NavPerfil = ({ showPurchaseHistory, showShop, initPage }) => {
  return (
    <>
      <nav className="nav">
        <Link onClick={initPage} className="link">
          <h1 className="title">KARMELSHOES</h1>
        </Link>
        <div className="container-nav-perfil-2">
          <h2>Perfil</h2>
        </div>
        <div className="container-nav-perfil-3">
          <div className="img">
            <img onClick={showPurchaseHistory} src="/src/assets/imgs/buscar-alt.png" alt="" />
          </div>
          <div className="img">
            <img onClick={showShop} src="/src/assets/imgs/location-dot-solid.svg" alt="" />
          </div>
          <div className="img">
            <img onClick={initPage} src="/src/assets/imgs/house-solid.svg" alt="" />
          </div>
        </div>
      </nav>
    </>
  );
};
