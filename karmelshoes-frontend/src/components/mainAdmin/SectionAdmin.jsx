/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "/src/css/styleSectionAdmin.css";
import { useStateSectionAdminFilter } from "../../hooks/useStateSectionAdminFilter";
import { DivSelectSearch } from "./DivSelectSearch";
import { DivInputTextSearch } from "./DivInputTextSearch";

export const SectionAdmin = ({
  showRegistrer,
  activeMainProductsSales,
  showFormularyCreateProduct,
  currentPageProduct,
  currentPage,
  dataTableAdmin,
  dataTableProduct,
}) => {
  const {
    state,
    handlerOnChange,
    optionsRender,
    handlerOnSubmit,
    handlerSetData,
    selectText,
    inputText,
    optionSelect,
  } = useStateSectionAdminFilter(activeMainProductsSales, dataTableProduct, dataTableAdmin, currentPage, currentPageProduct);

  useEffect(() => {
    optionsRender();
    handlerSetData();
  }, [activeMainProductsSales])

  return (
    <>
      <section className="section-admin">
        <form onSubmit={handlerOnSubmit} className="div-search-product">
          <DivSelectSearch
            selectText={selectText}
            optionSelect={optionSelect}
            handlerOnChange={handlerOnChange}
          />
          <DivInputTextSearch
            inputText={inputText}
            handlerOnChange={handlerOnChange}
            selectText={selectText}
          />
        </form>
        {activeMainProductsSales ? (
          <h2 className="h2-admin-section">PRODUCTOS</h2>
        ) : (
          <h2 className="h2-admin-section" style={{ paddingLeft: "40px" }}>ADMINISTRADOR</h2>
        )}
        <div className="img-create-admin">
          {activeMainProductsSales ? (
            <img
              style={{ width: "35px" }}
              onClick={showFormularyCreateProduct}
              src="/src/assets/imgs/create-zapato.png"
              alt=""
            />
          ) : (
            <img
              onClick={showRegistrer}
              src="/src/assets/imgs/agregar-usuario.png"
              alt=""
            />
          )}
        </div>
      </section>
    </>
  );
};
