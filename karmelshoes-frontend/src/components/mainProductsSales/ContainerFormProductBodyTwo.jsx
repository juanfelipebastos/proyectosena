/* eslint-disable react/prop-types */
import { ContainerFormProductButtom } from "./ContainerFormProductButtom";
import { FormDataInputImg } from "./FormDataInputImg";

export const ContainerFormProductBodyTwo = ({showSectionColor, handlerOnChangeImage }) => {
    return (
        <>
            <div className="container-body-2">
                <ContainerFormProductButtom
                    label="color"
                    span="COLORES"
                    showSectionColor={showSectionColor}
                />
                <ContainerFormProductButtom
                    label="sizes"
                    span="TALLAS"
                    showSectionColor={showSectionColor}
                />
                <FormDataInputImg handlerOnChangeImage={handlerOnChangeImage} />
            </div>
        </>
    );
}