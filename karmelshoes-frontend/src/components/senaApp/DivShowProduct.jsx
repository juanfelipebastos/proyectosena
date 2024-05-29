/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { DivProduct } from "./DivProduct";
import "/src/css/styleDivShowProduct.css";

export const DivShowProduct = ({
  dataTableProductAvailable,
  showDetailsProduct,
  setDataDetailsProduct,
  setCurrentPageProductAvalable,
  currentPageProductAvalable,
  totalPagesProductAvailable,
}) => {

  useEffect(() => {
    console.log("currentPageProductAvalable: ", currentPageProductAvalable, "totalPagesProductAvailable: ", totalPagesProductAvailable);
  }, [currentPageProductAvalable, totalPagesProductAvailable]);
  

  const handlePrevClick = () => {
    setCurrentPageProductAvalable(Math.max(currentPageProductAvalable - 1, 1));
  };

  const handleNextClick = () => {
    setCurrentPageProductAvalable(Math.min(currentPageProductAvalable + 1, totalPagesProductAvailable));
  };

  return (
    <>
      <div className="show-product">
        <div className="show-products-section">
          {dataTableProductAvailable.map((product, index) => (
            <DivProduct
              showDetailsProduct={showDetailsProduct}
              key={index}
              product={product}
              setDataDetailsProduct={setDataDetailsProduct}
            />
          ))}
        </div>
        <div className="buttom-concurrent">
          <div className="div-product-img-cuncurrent" onClick={handlePrevClick}>
            <img
              src="/src/assets/imgs/flecha-circulo-izquierda.png"
              alt="regresar"
            />
          </div>
          <div className="div-product-img-cuncurrent" onClick={handleNextClick}>
            <img
              src="/src/assets/imgs/flecha-circulo-izquierda.png"
              alt="seguir"
            />
          </div>
        </div>
      </div>
    </>
  );
};
