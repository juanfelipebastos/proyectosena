/* eslint-disable react/prop-types */
import { FormDataInputSelectMap } from "../mainProductsSales/FormDataInputSelectMap";

export const BodyHeadDetailsProduct = ({ dataFormulary, handlerOnChange, product, optionRenderColor, optionRenderSize }) => {
    return (
        <>
            <div className="body-head-details-product">
                <div className="details-product-container-size-color">
                    <h3>COLOR</h3>
                    <FormDataInputSelectMap span={""} optionsRender={optionRenderColor} name={"color"} value={dataFormulary.color} handlerSelectGenderOnChange={handlerOnChange} />
                </div>
                <div className="details-product-container-size-color">
                    <h3>TALLA</h3>
                    <FormDataInputSelectMap span={""} optionsRender={optionRenderSize} name={"sizes"} value={dataFormulary.sizes} handlerSelectGenderOnChange={handlerOnChange} />
                </div>
            </div>
        </>
    );
}