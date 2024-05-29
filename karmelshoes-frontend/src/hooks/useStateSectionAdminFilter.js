import { useReducer } from "react"
import { sectionAdminFilterReducer } from "../reducer/sectionAdminFilterReducer";
import { initialStateSectionAdminFilter } from "../models/productModel";
import { getAllClientAdmin, getAllClientAdminByAddress, getAllClientAdminByEmail, getAllClientAdminByIdentificaction, getAllClientAdminByName, getAllClientAdminByPhone, getAllClientAdminByStatus, getAllUser } from "../services/clientServices";
import { getAllProductPageByCode, getAllProductPageByGender, getAllProductPageByMark, getAllProductPageByModel, getAllProductPageByName, getAllProductPageByPrice, getAllProductPageByProductType, getAllProductPageByStatusFalse, getAllProductPages } from "../services/productsService";

export const useStateSectionAdminFilter = (activeMainProductsSales, dataTableProduct, dataTableAdmin, currentPage, currentPageProduct) => {
    const [state, dispatch] = useReducer(sectionAdminFilterReducer, initialStateSectionAdminFilter);

    const { optionSelect, dataFormulary } = state;
    const { selectText, inputText } = dataFormulary;


    const optionsRender = () => {
        if (activeMainProductsSales) {
            dispatch({
                type: "SET_DATA_OPTIONS",
                payload: [
                    { value: "", label: "SELECCIONA" },
                    { value: "TODOS", label: "TODOS" },
                    { value: "NOMBRE", label: "NOMBRE" },
                    { value: "MARCA", label: "MARCA" },
                    { value: "MODELO", label: "MODELO" },
                    { value: "GENERO", label: "GENERO" },
                    { value: "PRECIO", label: "PRECIO" },
                    { value: "CATEGORIA", label: "CATEGORIA" },
                    { value: "CODIGO", label: "CODIGO" },
                    { value: "ELIMINADO", label: "ELIMINADO" },
                ],
            })
        } else {
            dispatch({
                type: "SET_DATA_OPTIONS",
                payload: [
                    { value: "", label: "SELECCIONA" },
                    { value: "TODOS", label: "TODOS" },
                    { value: "NOMBRE", label: "NOMBRE" },
                    { value: "CORREO", label: "CORREO" },
                    { value: "TELEFONO", label: "TELEFONO" },
                    { value: "DIRECCION", label: "DIRECCION" },
                    { value: "ELIMINADO", label: "ELIMINADO" },
                    { value: "IDENTIFICACION", label: "IDENTIFICACION" },
                    { value: "USUARIOS", label: "USUARIOS" },
                ],
            })
        }
    }

    const handlerOnChange = (event) => {
        const { name, value } = event.target;
        if (name === "selectText" && value === "TODOS") {
            dispatch({
                type: "SET_DATA_ALL"
            })
            return;
        }
        if(name === "selectText" && value === "USUARIOS"){
            dispatch({
                type: "SET_DATA_ALL_USER"
            })
            return;
        }
        dispatch({
            type: "SET_DATA",
            payload: {
                name,
                value
            }
        })
    }

    const handlerOnSubmit = async (event) => {
        event.preventDefault();
        if (activeMainProductsSales) {
            const data = await getAllDataTableProductsBySelect(dataFormulary.selectText, dataFormulary.inputText);
            dataTableProduct(data);
        } else {
            const data = await getAllDataTableAdminBySelect(dataFormulary.selectText, dataFormulary.inputText);
            dataTableAdmin(data);
        }
        dispatch({
            type: "SET_DATA_RESET"
        })
    }

    const getAllDataTableAdminBySelect = async (selectText, inputText) => {
        try {
            switch (selectText) {
                case "NOMBRE": {
                    const data = await getAllClientAdminByName(currentPage - 1, 10, inputText);
                    return data;
                }
                case "CORREO": {
                    const data = await getAllClientAdminByEmail(currentPage - 1, 10, inputText);
                    return data;
                }
                case "TELEFONO": {
                    const data = await getAllClientAdminByPhone(currentPage - 1, 10, inputText);
                    return data;
                }
                case "DIRECCION": {
                    const data = await getAllClientAdminByAddress(currentPage - 1, 10, inputText);
                    return data;
                }
                case "ELIMINADO": {
                    let status = true;
                    if (
                        inputText === "si" ||
                        inputText === "SI" ||
                        inputText === "eliminado" ||
                        inputText === "ELIMINADO"
                    ) {
                        status = false;
                    }
                    const data = await getAllClientAdminByStatus(currentPage - 1, 10, status);
                    return data;
                }
                case "IDENTIFICACION": {
                    const data = await getAllClientAdminByIdentificaction(currentPage - 1, 10, inputText);
                    return data;
                }
                case "TODOS": {
                    const data = await getAllClientAdmin(currentPage - 1, 10);
                    return data;
                }
                case "USUARIOS": {
                    const data = await getAllUser(currentPage - 1, 10);
                    return data;
                }
                default: {
                    const data = await getAllClientAdmin(currentPage - 1, 10);
                    return data;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const getAllDataTableProductsBySelect = async (selectText, inputText) => {
        try {
            switch (selectText) {
                case "NOMBRE": {
                    const data = await getAllProductPageByName(currentPageProduct - 1, 10, inputText);
                    return data;
                }
                case "MARCA": {
                    const data = await getAllProductPageByMark(currentPageProduct - 1, 10, inputText);
                    return data;
                }
                case "MODELO": {
                    const data = await getAllProductPageByModel(currentPageProduct - 1, 10, inputText);
                    return data;
                }
                case "GENERO": {
                    const data = await getAllProductPageByGender(currentPageProduct - 1, 10, inputText);
                    return data;
                }
                case "PRECIO": {
                    const number = parseFloat(inputText);
                    const data = await getAllProductPageByPrice(currentPageProduct - 1, 10, number);
                    return data;
                }
                case "CATEGORIA": {
                    const data = await getAllProductPageByProductType(currentPageProduct - 1, 10, inputText);
                    return data;
                }
                case "CODIGO": {
                    const data = await getAllProductPageByCode(currentPageProduct - 1, 10, inputText);
                    return data;
                }
                case "ELIMINADO": {
                    if (
                        inputText === "ELIMINADOS" ||
                        inputText === "ELIMINADO" ||
                        inputText === "eliminado" ||
                        inputText === "eliminados" ||
                        inputText === "si" ||
                        inputText === "SI"
                    ) {
                        const data = await getAllProductPageByStatusFalse(currentPageProduct - 1, 10);
                        return data;
                    } else {
                        const data = await getAllProductPages(currentPageProduct - 1, 10);
                        return data;
                    }
                }
                case "TODOS": {
                    const data = await getAllProductPages(currentPageProduct - 1, 10);
                    return data;
                }
                default: {
                    const data = await getAllProductPages(currentPageProduct - 1, 10);
                    return data;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handlerSetData = () => {
        dispatch({
            type: "SET_DATA_RESET"
        })
    }

    return {
        state,
        handlerOnChange,
        optionsRender,
        handlerOnSubmit,
        handlerSetData,
        selectText,
        inputText,
        optionSelect,
    }
}