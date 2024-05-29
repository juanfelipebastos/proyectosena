/* eslint-disable react/prop-types */
import { getAllProductPageByGenderByModelAndProductType } from "../../services/productsService";

export const ContainerBoy = ({dataTableProductAvailable, currentPageProductAvalable}) => {

  const handlerShowAllProductsShoe = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑO", "ZAPATOS", "BO");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsCategoryBootes = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑO", "ZAPATOS", "BOTINES");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }
  const handlerShowProductCategoryBoots = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑO", "ZAPATOS", "BOTAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductCategorySneakers = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑO", "TENIS", "SNEAKERS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsCategoryPlatforms = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑO", "TENIS", "PLATAFORMAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsCategoryWithoutCords = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑO", "TENIS", "SIN CORDONES");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsCategorySports = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑO", "TENIS", "DEPORTIVOS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowAllProductsTennis = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑO", "TENIS", "S");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsSandalsFlats = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑO", "SANDALIAS", "PLANAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductSandalsPlatform = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑO", "SANDALIAS", "PLATAFORMAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowAllProductSandals = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑO", "SANDALIAS", "S");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsSandalsMedium = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑO", "SANDALIAS", "MEDIANAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container-menu-product-boy">
        <div className="container">
          <h2>Zapatos</h2>
          <ul>
            <li onClick={handlerShowProductsCategoryBootes}>Botines</li>
            <li onClick={handlerShowProductCategoryBoots}>Botas</li>
            <li onClick={handlerShowAllProductsShoe}>Ver todo</li>
          </ul>
        </div>
        <div className="container">
          <h2>Tenis</h2>
          <ul>
            <li onClick={handlerShowProductCategorySneakers}>Sneakers</li>
            <li onClick={handlerShowProductsCategoryPlatforms}>Plataformas</li>
            <li onClick={handlerShowProductsCategoryWithoutCords}>Sin cordones</li>
            <li onClick={handlerShowProductsCategorySports}>Deportivos</li>
            <li onClick={handlerShowAllProductsTennis}>Ver todo</li>
          </ul>
        </div>
        <div className="container">
          <h2>Sandalias</h2>
          <ul>
            <li onClick={handlerShowProductsSandalsFlats}>Planas</li>
            <li onClick={handlerShowProductSandalsPlatform}>Plataformas</li>
            <li onClick={handlerShowProductsSandalsMedium}>Medianas</li>
            <li onClick={handlerShowAllProductSandals}>Ver todo</li>
          </ul>
        </div>
      </div>
    </>
  );
};
