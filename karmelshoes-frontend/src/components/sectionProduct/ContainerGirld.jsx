/* eslint-disable react/prop-types */
import { getAllProductPageByGenderByModelAndProductType } from "../../services/productsService";

export const ContainerGirld = ({ dataTableProductAvailable, currentPageProductAvalable }) => {


  const handlerShowAllProductsShoe = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "ZAPATOS", "BO");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsCategoryBootes = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "ZAPATOS", "BOTINES");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }
  const handlerShowProductCategoryBoots = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "ZAPATOS", "BOTAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductCategorySneakers = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "TENIS", "SNEAKERS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsCategoryPlatforms = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "TENIS", "PLATAFORMAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsCategoryWithoutCords = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "TENIS", "SIN CORDONES");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsCategorySports = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "TENIS", "DEPORTIVOS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowAllProductsTennis = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "TENIS", "S");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsSandalsFlats = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "SANDALIAS", "PLANAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductSandalsPlatform = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "SANDALIAS", "PLATAFORMAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowAllProductSandals = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "SANDALIAS", "S");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsSandalsMedium = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "SANDALIAS", "MEDIANAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductHeelsHigh = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "TACONES", "ALTOS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductHeelsLow = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "TACONES", "BAJOS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductHeelsMedium = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "TACONES", "MEDIOS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowAllProductHeels = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable - 1, 8, "NIÑA", "TACONES", "S");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container-menu-product-girld">
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
        <div className="container">
          <h2>Tacones</h2>
          <ul>
            <li onClick={handlerShowProductHeelsHigh}>Altos</li>
            <li onClick={handlerShowProductHeelsLow}>Bajo</li>
            <li onClick={handlerShowProductHeelsMedium}>Medios</li>
            <li onClick={handlerShowAllProductHeels}>Ver todo</li>
          </ul>
        </div>
      </div>
    </>
  );
};
