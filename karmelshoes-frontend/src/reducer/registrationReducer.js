import { initialStateFormRegistration } from "../models/initialStateFormRegistration";

export const registrationReducer = (
  state = initialStateFormRegistration,
  action
) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors,
      };
    case "SET_SERVER_ERROR":
      return { ...state, serverError: action.serverError };
    case "RESET_FORM":
      return initialStateFormRegistration;
    default:
      return state;
  }
};
