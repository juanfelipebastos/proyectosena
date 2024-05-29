/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ContainerNavOne } from "./ContainerNavOne";
import { ContainerNavTwo } from "./ContainerNavTwo";
import { ContainerNavThree } from "./ContainerNavThree";
import "/src/css/styleNav.css";

export const Nav = ({
  currentPageProductAvalable,
  dataTableProductAvailable,
  showShoppingCart,
  showLady,
  showGentleman,
  showBoy,
  initPage,
  activeChild,
  activeLady,
  activeGentleman,
  showWhoWeAre,
  showShop,
  showPurchaseHistory,
  activeWhoWeAre,
  activeShop,
  activePurchaseHistory,
  showNavPerfil,
  login
}) => {

  return (
    <>
      <nav className="nav">
        <Link onClick={initPage} to={"/"} className="link">
          <h1 className="title">KARMELSHOES</h1>
        </Link>
        <ContainerNavOne
          showWhoWeAre={showWhoWeAre}
          showShop={showShop}
          showPurchaseHistory={showPurchaseHistory}
          activeWhoWeAre={activeWhoWeAre}
          activeShop={activeShop}
          activePurchaseHistory={activePurchaseHistory}
        />
        <ContainerNavTwo
          currentPageProductAvalable={currentPageProductAvalable}
          dataTableProductAvailable={dataTableProductAvailable}
          showLady={showLady}
          showGentleman={showGentleman}
          showBoy={showBoy}
          activeChild={activeChild}
          activeLady={activeLady}
          activeGentleman={activeGentleman}
        />
        <ContainerNavThree
          showShoppingCart={showShoppingCart}
          showNavPerfil={showNavPerfil}
          login={login}
        />
      </nav>
    </>
  );
};
