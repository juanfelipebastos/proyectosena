import { stateInitialDetailsProductsReducer } from "../models/productModel"

export const sectionDetailsProductReducer = (state = stateInitialDetailsProductsReducer, action) => {
    switch (action.type) {
        case "INITIAL_STATE": {
            return stateInitialDetailsProductsReducer;
        }
        case "SET_FORM_DATA": {
            return {
                ...state,
                dataFormulary: action.payload
            }
        }
        case "SET_OPTION_RENDER_COLOR": {
            return {
                ...state,
                optionRenderColor: action.payload
            }
        }
        case "SET_OPTION_RENDER_SIZE": {
            return {
                ...state,
                optionRenderSize: action.payload
            }
        }
        case "SET_ACTIVATE_MESSAGE": {
            return {
                ...state,
                activateMessage: action.payload
            }
        }
        default: {
            return state;
        }
    }
}