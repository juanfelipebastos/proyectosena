import { initialLogin } from "../models/initialLogin";

export const logingReducer = (state= initialLogin, action) => {
  switch (action.type) {
    case "login":
      return {
        isAuth: true,
        isAdmin: action.payload.isAdmin,
        user: action.payload.user,
        message:"",
      };

    case "logout":
      return {
        isAuth: false,
        isAdmin: false,
        user: undefined,
        message: "",
      };
    case "SET_MESSAGE":
      return {
        ...state,
        message: action.payload,
      }
    default:
      return state;
  }
};