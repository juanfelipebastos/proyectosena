import { getAllProductPageByGenderByModelAndProductType } from "../../services/productsService";

/* eslint-disable react/prop-types */
export const ContainerMenuProductLady = ({ dataTableProductAvailable, currentPageProductAvalable }) => {

  const handlerShowAllProductsShoe = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "DAMA", "ZAPATOS", "BO");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsCategoryBootes = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "DAMA", "ZAPATOS", "BOTINES");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }
  const handlerShowProductCategoryBoots = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "DAMA", "ZAPATOS", "BOTAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductCategorySneakers = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 9, "DAMA", "TENIS", "SNEAKERS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsCategoryPlatforms = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 9, "DAMA", "TENIS", "PLATAFORMAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  } 

  const handlerShowProductsCategoryWithoutCords = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "DAMA", "TENIS", "SIN CORDONES");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsCategorySports = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "DAMA", "TENIS", "DEPORTIVOS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowAllProductsTennis = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "DAMA", "TENIS", "S");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  } 

  const handlerShowProductsSandalsFlats = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "DAMA", "SANDALIAS", "PLANAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductSandalsPlatform = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "DAMA", "SANDALIAS", "PLATAFORMAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowAllProductSandals = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "DAMA", "SANDALIAS", "S");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductsSandalsMedium = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "DAMA", "SANDALIAS", "MEDIANAS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductHeelsHigh = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "DAMA", "TACONES", "ALTOS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductHeelsLow = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "DAMA", "TACONES", "BAJOS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowProductHeelsMedium = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "DAMA", "TACONES", "MEDIOS");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerShowAllProductHeels = async () => {
    try {
      const data = await getAllProductPageByGenderByModelAndProductType(currentPageProductAvalable-1, 8, "DAMA", "TACONES", "S");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container-menu-product">
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
