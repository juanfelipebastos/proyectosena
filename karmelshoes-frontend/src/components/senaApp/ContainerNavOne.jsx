import { NavLink } from "react-router-dom";

export const ContainerNavOne = ({
  showWhoWeAre,
  showShop,
  showPurchaseHistory,
  activeWhoWeAre,
  activeShop,
  activePurchaseHistory,
}) => {
  return (
    <>
      <div className="container-nav-1">
        <img
          src="/src/assets/imgs/location-dot-solid.svg"
          alt="logo-ubucacion"
        />
        <NavLink
          className={activeShop ? "active-link" : null}
          onClick={showShop}
        >
          Tienda
        </NavLink>
        <img src="/src/assets/imgs/interrogatorio.svg" alt="" />
        <NavLink
          className={activeWhoWeAre ? "active-link" : null}
          onClick={showWhoWeAre}
        >
          ¿Quienes somos?
        </NavLink>
        <img src="/src/assets/imgs/buscar-alt.png" alt="logo-historial" />
        <NavLink
          className={activePurchaseHistory ? "active-link" : null}
          onClick={showPurchaseHistory}
        >
          Historial De Compras
        </NavLink>
      </div>
    </>
  );
};
