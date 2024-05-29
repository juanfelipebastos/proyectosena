/* eslint-disable react/prop-types */
import { FormInputFormularyData } from "../senaApp/FormInputFormularyData";
import { FormDataInputTextArea } from "./FormDataInputTextArea";

export const ContainerFormProductBodyThree = ({dataFormulary, errors, handlerOnChange }) => {
    const {price, description} = dataFormulary;
    return (
        <>
            <div className="container-body-3">
                <div className="container-price">
                    <FormInputFormularyData
                        label="PRECIO $"
                        name="price"
                        value={price}
                        onChange={handlerOnChange}
                        type="number"
                        id="price"
                        error={errors.price}
                    />
                </div>
                <FormDataInputTextArea
                    value={description}
                    handlerOnChange={handlerOnChange}
                />
            </div>
        </>
    );
}