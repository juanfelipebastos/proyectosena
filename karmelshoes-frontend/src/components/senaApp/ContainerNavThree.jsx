/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FilterComponente } from "./FilterComponente";

export const ContainerNavThree = ({
  showShoppingCart,
  showNavPerfil,
  login,
}) => {
  const renderImgUser = () => {
    if (login.isAuth) {
      return (
        <Link onClick={showNavPerfil} className="enlace">
          <img src="/src/assets/imgs/user-solid.svg" alt="" />
        </Link>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <>
      <div className="container-nav-3">
        <FilterComponente name={"nameProduct"} handlerOnChange={undefined} handlerOnSubmit={undefined} />
        {renderImgUser()}
        <Link onClick={showShoppingCart} className="enlace">
          <img src="/src/assets/imgs/cart-shopping-solid.svg" alt="" />
        </Link>
      </div>
    </>
  );
};
