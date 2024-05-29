/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { getAllProductPageByGender } from "../../services/productsService";
import { useEffect } from "react";

export const ContainerNavTwo = ({
  currentPageProductAvalable,
  dataTableProductAvailable,
  showLady,
  showGentleman,
  showBoy,
  activeLady,
  activeGentleman,
  activeChild
}) => {

  useEffect(() => {
    if(activeLady) {
      handlerOnClickLinkOne();
    } else if (activeGentleman) {
      handlerOnClickLinkTwo();
    } else if(activeChild) {
      handlerOnClickLinkThree();
    }
  }, [currentPageProductAvalable]);

  const handlerOnClickLinkOne = async () => {
    showLady();
    try {
      const data = await getAllProductPageByGender( currentPageProductAvalable - 1 , 8, "DAMA");
      console.log("vamos");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerOnClickLinkTwo = async () => {
    showGentleman();
    try {
      const data = await getAllProductPageByGender( currentPageProductAvalable - 1 , 8, "CABALLERO");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerOnClickLinkThree = async () => {
    showBoy();
  }

  return (
    <>
      <div className="container-nav-2 navLink">
        <NavLink
          className={activeLady ? "active-link-people" : null}
          onClick={handlerOnClickLinkOne}
        >
          <h3>Dama</h3>
        </NavLink>
        <NavLink
          className={activeGentleman ? "active-link-people" : null}
          onClick={handlerOnClickLinkTwo}
        >
          <h3>Caballero</h3>
        </NavLink>
        <NavLink
          className={activeChild ? "active-link-people" : null}
          onClick={handlerOnClickLinkThree}
        >
          <h3>Niños</h3>
        </NavLink>
      </div>
    </>
  );
};
