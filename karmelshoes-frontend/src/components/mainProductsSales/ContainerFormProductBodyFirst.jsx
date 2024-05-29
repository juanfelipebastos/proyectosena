/* eslint-disable react/prop-types */
import { FormDataInputSelectMap } from "./FormDataInputSelectMap";
import { FormDataInputSelet } from "./FormDataInputSelet";

export const ContainerFormProductBodyFirst = ({ dataFormulary, handlerSelectGenderOnChange, optionsModel, optionsProductType }) => {
    const {gender, model, productType} = dataFormulary;
    return (
        <>
            <div className="container-body-1">
                <FormDataInputSelet
                    name={"gender"}
                    value={gender}
                    handlerSelectGenderOnChange={handlerSelectGenderOnChange}
                />
                <FormDataInputSelectMap
                    name={"model"}
                    value={model}
                    handlerSelectGenderOnChange={handlerSelectGenderOnChange}
                    optionsRender={optionsModel}
                    span="MODELO"
                />
                <FormDataInputSelectMap
                    name={"productType"}
                    value={productType}
                    handlerSelectGenderOnChange={handlerSelectGenderOnChange}
                    optionsRender={optionsProductType}
                    span="CATEGORIA"
                />
            </div>
        </>
    );
}