import { mainPerfilStateInitial } from "../models/mainPerfilStateInitial";

export const mainPerfilReducer = (state = mainPerfilStateInitial, action) => {
  switch (action.type) {
    case "CLIENT_MODEL_ID_INITIAL":
      return {
        ...state,
      };
    case "SET_ERROR_STATE":
      return {
        ...state,
        erroState: action.payload,
      };
    case "SET_FORM_SUBMISSION_STATUS":
      return {
        ...state,
        formSubmissionStatus: action.payload,
      };
    case "SET_CLIENT_MODEL_ID":
      return {
        ...state,
        clientModelId: action.payload,
      };
    default:
      return state;
  }
};
