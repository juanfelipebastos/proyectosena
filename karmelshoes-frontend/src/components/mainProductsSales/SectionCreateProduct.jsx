/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { SectionCreateColor } from "./SectionCreateColor";
import { useStateCreateProduct } from "../../hooks/useSatetCreateProduct";
import { ContainerFormProduct } from "./ContainerFormProduct";
import { DivHeaderFormProduct } from "./DivHeaderFormProduct";
import { ContainerBodyButtomFormularyProduct } from "./ContainerBodyButtomFormularyProduct";
import { ContainerFormProductBodyFirst } from "./ContainerFormProductBodyFirst";
import { ContainerFormProductBodyTwo } from "./ContainerFormProductBodyTwo";
import { ContainerFormProductBodyThree } from "./ContainerFormProductBodyThree";
import "/src/css/styleSectionCreateProduct.css";
import "/src/css/styleSectionDataProduct.css";

export const SectionCreateProduct = ({ showFormularyCreateProduct, updateMainAdmin, showDataProduct, dataProduct }) => {

  const {
    state,
    handlerOnsubmit,
    handlerOnChange,
    handlerOnChangeImage,
    handlerSelectGenderOnChange,
    showSectionColor,
    handlerResetFormulary,
    dataListColorAndListSize,
    updateDataFormulary,
    errors,
    messageSuccesing,
    optionsModel,
    optionsProductType,
    dataFormulary,
    dataFormularyUpdate,
    updateModelOptions,
    updateProductTypeOptions,
    handlerDeleteProductById,
  } = useStateCreateProduct(updateMainAdmin, showDataProduct);

  useEffect(() => {
    updateModelOptions();
    updateProductTypeOptions();
  }, [dataFormulary?.gender, dataFormulary?.model, dataFormularyUpdate?.gender, dataFormularyUpdate?.model]);

  useEffect(() => {
    if (showDataProduct) {
      updateDataFormulary(dataProduct);
    }
  }, [])

  const renderSectionColorOrSize = () => {
    if (state.activeSectionColor) {
      return <SectionCreateColor dataListColorAndListSize={dataListColorAndListSize} showSectionColor={showSectionColor} />;
    }
  };

  const renderMessageErrors = () => {
    if (errors.description) {
      return <h3 style={{ fontSize: "30px" }}>{errors.description}</h3>;
    } else if (errors.color) {
      return <h3 style={{ fontSize: "30px" }}>{errors.color}</h3>;
    } else if (errors.sizes) {
      return <h3 style={{ fontSize: "30px" }}>{errors.sizes}</h3>;
    } else if (messageSuccesing) {
      return <h3 style={{ fontSize: "20px" }}>{messageSuccesing}</h3>;
    } else if (errors.productType) {
      return <h3 style={{ fontSize: "30px" }}>{errors.productType}</h3>;
    } else if (errors.model) {
      return <h3 style={{ fontSize: "30px" }}>{errors.model}</h3>;
    } else if (errors.gender) {
      return <h3 style={{ fontSize: "30px" }}>{errors.gender}</h3>;
    } else if (showDataProduct) {
      return "EDITAR PRODUCTO";
    } else {
      return "CREAR PRODUCTO";
    }
  };

  const renderFormularyCreateOrUpdateProduct = () => {
    if (showDataProduct) {
      return (
        <form onSubmit={handlerOnsubmit} className="data-product-body">
          <ContainerFormProduct
            handlerOnChange={handlerOnChange}
            errors={errors}
            dataFormulary={dataFormularyUpdate}
          />
          <div className="container-form-input-body">
            <ContainerFormProductBodyFirst
              dataFormulary={dataFormularyUpdate}
              handlerSelectGenderOnChange={handlerSelectGenderOnChange}
              optionsModel={optionsModel}
              optionsProductType={optionsProductType}
            />
            <ContainerFormProductBodyTwo
              showSectionColor={showSectionColor}
              handlerOnChangeImage={handlerOnChangeImage}
            />
            <ContainerFormProductBodyThree
              dataFormulary={dataFormularyUpdate}
              errors={errors}
              handlerOnChange={handlerOnChange}
            />
            <ContainerBodyButtomFormularyProduct
              showDataProduct={showDataProduct}
              handlerResetFormulary={handlerResetFormulary}
              showFormularyCreateProduct={showFormularyCreateProduct}
              handlerDeleteProductById={handlerDeleteProductById}
            />
          </div>
        </form>
      );
    } else {
      return (
        <form onSubmit={handlerOnsubmit} className="data-product-body">
          <ContainerFormProduct
            handlerOnChange={handlerOnChange}
            errors={errors}
            dataFormulary={dataFormulary}
          />
          <div className="container-form-input-body">
            <ContainerFormProductBodyFirst
              dataFormulary={dataFormulary}
              handlerSelectGenderOnChange={handlerSelectGenderOnChange}
              optionsModel={optionsModel}
              optionsProductType={optionsProductType}
            />
            <ContainerFormProductBodyTwo
              showSectionColor={showSectionColor}
              handlerOnChangeImage={handlerOnChangeImage}
            />
            <ContainerFormProductBodyThree
              dataFormulary={dataFormulary}
              errors={errors}
              handlerOnChange={handlerOnChange}
            />
            <ContainerBodyButtomFormularyProduct
              showFormularyCreateProduct={undefined}
              handlerDeleteProductById={undefined}
              showDataProduct={showDataProduct}
              handlerResetFormulary={handlerResetFormulary}
            />
          </div>
        </form>
      );
    }
  }

  return (
    <>
      <section className="data-product">
        <div className="data-admin-div">
          <DivHeaderFormProduct
            showDataProduct={showDataProduct}
            showFormularyCreateProduct={showFormularyCreateProduct}
            renderMessageErrors={renderMessageErrors}
          />
          {renderFormularyCreateOrUpdateProduct()}
        </div>
        {renderSectionColorOrSize()}
      </section>
    </>
  );
};
