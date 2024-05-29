import {
    initialStateFormularyCreateProduct
} from "../models/productModel"

export const createProductReducer = (state = initialStateFormularyCreateProduct, action) => {
    switch (action.type) {
        case "SET_FORM_DATA":
            return {
                ...state,
                dataFormulary: action.payload,
            };
        case "SET_FORM_UPDATE_DATA":
            return {
                ...state,
                dataFormularyUpdate: action.payload,
            };
        case "SET_FORM_DATA_IMG":
            return {
                ...state,
                dataFormulary: {
                    ...state.dataFormulary,
                    img: action.payload,
                },
            };
        case "SET_FORM_DATA_IMG_UPDATE":
            return {
                ...state,
                dataFormularyUpdate: {
                    ...state.dataFormularyUpdate,
                    img: action.payload,
                },
            };
        case "SET_FORM_DATA_SELECT":
            return {
                ...state,
                dataFormulary: {
                    ...state.dataFormulary,
                    [action.payload.name]: action.payload.value,
                }
            };
        case "SET_FORM_DATA_SELECT_UPDATE":
            return {
                ...state,
                dataFormularyUpdate: {
                    ...state.dataFormularyUpdate,
                    [action.payload.name]: action.payload.value,
                }
            };
        case "TOGGLE_SECTION_COLOR":
            return {
                ...state,
                activeSectionColor: !state.activeSectionColor,
            };
        case "SET_ERROR_STATE":
            return {
                ...state,
                errors: action.payload,
            };
        case "SET_SUCCESS_MESSAGE":
            return {
                ...state,
                messageSuccesing: action.payload,
            };
        case "SET_OPTIONS_MODEL":
            return {
                ...state,
                optionsModel: action.payload,
            };
        case "SET_OPTIONS_PRODUCT_TYPE":
            return {
                ...state,
                optionsProductType: action.payload,
            };
        default:
            return state;
    }
};