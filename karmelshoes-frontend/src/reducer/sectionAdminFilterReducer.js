import { initialStateSectionAdminFilter } from "../models/productModel";

export const sectionAdminFilterReducer = (state = initialStateSectionAdminFilter, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                dataFormulary: {
                    ...state.dataFormulary,
                    [action.payload.name]: action.payload.value,
                }
            };
        case "SET_DATA_ALL":
            return {
                ...state,
                dataFormulary: {
                    ...state.dataFormulary,
                    selectText: "TODOS",
                    inputText: "TODOS",
                }
            };
        case "SET_DATA_ALL_USER":
            return {
                ...state,
                dataFormulary: {
                    ...state.dataFormulary,
                    selectText: "USUARIOS",
                    inputText: "USUARIOS",
                }
            };
        case "SET_DATA_RESET":
            return {
                ...state,
                dataFormulary: initialStateSectionAdminFilter.dataFormulary,
            };
        case "SET_DATA_OPTIONS":
            return {
                ...state,
                optionSelect: action.payload,
            };
        default:
            return state;
    }
}