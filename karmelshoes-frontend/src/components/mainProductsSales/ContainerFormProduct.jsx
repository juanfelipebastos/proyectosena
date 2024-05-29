/* eslint-disable react/prop-types */
import { FormInputFormularyData } from "../senaApp/FormInputFormularyData";

export const ContainerFormProduct = ({ handlerOnChange, errors, dataFormulary }) => {

    const { mark, code, stock, name } = dataFormulary;
    
    return (
        <>
            <div className="container-form-product">
                <FormInputFormularyData
                    label="NOMBRE"
                    name="name"
                    value={name}
                    onChange={handlerOnChange}
                    type="text"
                    id="name"
                    error={errors.name}
                />
                <FormInputFormularyData
                    label="MARCA"
                    name="mark"
                    value={mark}
                    onChange={handlerOnChange}
                    type="text"
                    id="mark"
                    error={errors.mark}
                />
                <FormInputFormularyData
                    label="CODIGO"
                    name="code"
                    value={code}
                    onChange={handlerOnChange}
                    type="text"
                    id="code"
                    error={errors.code}
                />
                <FormInputFormularyData
                    label={"CANTIDAD"}
                    name="stock"
                    value={stock}
                    onChange={handlerOnChange}
                    type={"number"}
                    error={errors.stock}
                />
            </div>
        </>
    );
}