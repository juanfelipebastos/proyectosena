import { getAllProductPageByGenderByModelAndProductType } from "../../services/productsService";

/* eslint-disable react/prop-types */
export const ContainerMenuProductGentleman = ({dataTableProductAvailable, currentPageProductAvalable}) => {

  const handlerShowProductBoots = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "CABALLERO", "ZAPATOS", "BOTINES");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductBootes = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "CABALLERO", "ZAPATOS", "BOTAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowAllProductsBoots = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "CABALLERO", "ZAPATOS", "BO");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsTeenisSneakers = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "CABALLERO", "TENIS", "SNEAKERS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsTeenisPlatforms = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "CABALLERO", "TENIS", "PLATAFORMA");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsTeenisWithoutCords = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "CABALLERO", "TENIS", "SIN CORDONES");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsTeenisSports = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "CABALLERO", "TENIS", "DEPORTIVOS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handerShowAllProductTeenis = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "CABALLERO", "TENIS", "S");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsSandsFlats = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "CABALLERO", "SANDALIAS", "PLANAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProdctsSandsPlatforms = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "CABALLERO", "SANDALIAS", "PLATAFORMA");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsSandsMedium = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "CABALLERO", "SANDALIAS", "MEDIANAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowAllPrductsSands = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "CABALLERO", "SANDALIAS", "S");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container-menu-product-man">
        <div className="container">
          <h2>Zapatos</h2>
          <ul>
            <li onClick={handlerShowProductBoots}>Botines</li>
            <li onClick={handlerShowProductBootes}>Botas</li>
            <li onClick={handlerShowAllProductsBoots}>Ver todo</li>
          </ul>
        </div>
        <div className="container">
          <h2>Tenis</h2>
          <ul>
            <li onClick={handlerShowProductsTeenisSneakers}>Sneakers</li>
            <li onClick={handlerShowProductsTeenisPlatforms}>Plataformas</li>
            <li onClick={handlerShowProductsTeenisWithoutCords}>Sin cordones</li>
            <li onClick={handlerShowProductsTeenisSports}>Deportivos</li>
            <li onClick={handerShowAllProductTeenis}>Ver todo</li>
          </ul>
        </div>
        <div className="container">
          <h2>Sandalias</h2>
          <ul>
            <li onClick={handlerShowProductsSandsFlats}>Planas</li>
            <li onClick={handlerShowProdctsSandsPlatforms}>Plataformas</li>
            <li onClick={handlerShowProductsSandsMedium}>Medianas</li>
            <li onClick={handlerShowAllPrductsSands}>Ver todo</li>
          </ul>
        </div>
      </div>
    </>
  );
};
