/* eslint-disable no-useless-catch */
import { useReducer } from "react";
import { logingReducer } from "../reducer/logingReducer";
import { logingAuthentication } from "/src/services/logingAuthentication";
import { initialLogin } from "../models/initialLogin";
import { createByIdClientOneShoppingCart, getByIdShoppingCart } from "../services/shoppingCartServices";

export const useLoging = () => {
  const [login, dispach] = useReducer(logingReducer, initialLogin);

  const handlerLoging = async ({ name, password }) => {
    try {
      const response = await logingAuthentication({ name, password });
      const token = response.data.token;
      const claims = JSON.parse(window.atob(token.split(".")[1]));
      const clientId = claims.clientId;
      const user = { name: claims.sub, clientId: clientId };

      dispach({
        type: "login",
        payload: { user, isAdmin: claims.isAdmin },
      });

      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isAuth: true,
          user: user,
          isAdmin: claims.isAdmin,
        })
      );

      sessionStorage.setItem("token", `Bearer ${token}`);
      const idShoppingCartDto = await handlerCreateShoppingCart(user.clientId);
      sessionStorage.setItem("shoppingCartId", idShoppingCartDto);
    } catch (error) {
      throw error;
    }
  };

  const handlerCreateShoppingCart = async (clientId) => {
    try {
      const data = await createByIdClientOneShoppingCart(clientId);
      return data.idShoppingCartDto;
    } catch (error) {
      console.log(error);
    }
  }

  const handlerLogout = async () => {
    try {
      dispach({
        type: "logout",
      });
      sessionStorage.removeItem("login");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("shoppingCartId");
      sessionStorage.clear();
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return {
    login,
    handlerLoging,
    handlerLogout,
  };
};
