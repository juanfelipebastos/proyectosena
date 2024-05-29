import { senaAppReducer } from "../reducer/senaAppReducer";
import { initialStatePageSenaApp } from "../models/initialStatePageSenaApp";
import { useContext, useReducer } from "react";
import { AuthenticationContext } from "../context/AuthenticationProvider";
import { getClientById } from "../services/clientServices";
import { getByIdShoppingCart } from "../services/shoppingCartServices";

export const useStateSenaApp = () => {
  const [state, dispatch] = useReducer(senaAppReducer, initialStatePageSenaApp);
  const { login, handlerLogout, handlerLoging } = useContext(
    AuthenticationContext
  );

  const setDataShoppingCartModel = async (shoppingCartId) => {
    try {
      const data = await getByIdShoppingCart(shoppingCartId);
      dispatch({
        type: "SET_DATA_SHOPPING_CART_MODEL",
        payload: data
      })
      dispatch({
        type: "SET_LIST_MODEL_PRODUCT_COLORS_SIZES_INITIAL"
      })
    } catch (error) {
      console.log("error: ".error);
    }
  }

  const normalizeClientData = (data) => {
    return {
      id: data.idClientDto || 0,
      name: data.nameClientDto || "",
      email: data.emailClientDto || "",
      phone: data.phoneClientDto || "",
      address: data.addressClientDto || "",
      identification: data.identificationDto || "",
      admin: data.adminClientDto || false,
      password: data.passwordClientDto || "",
      status: data.statusClientDto || true,
    };
  };

  const getClientByIdData = async (id) => {
    const data = await getClientById(id);
    const normalizedData = normalizeClientData(data);
    return normalizedData;
  };

  const dataClientById = async (id) => {
    const clientData = await getClientByIdData(id);
    dispatch({ type: "INIT_DATA_CLIENT", payload: clientData });
  };

  const initPage = () => {
    dispatch({ type: "INIT_PAGE" });
    showSection("Main");
  };

  const showSection = (section) => {
    dispatch({ type: "SET_ACTIVE_SECTION_MAIN", payload: section });
  };

  const showBoy = () => {
    dispatch({ type: "SHOW_BOY" });
    showSection("Main");
  };

  const showMainPayment = () => {
    dispatch({
      type: "SHOW_MAIN_PAYMENT"
    })
  }

  const showLady = () => {
    dispatch({ type: "SHOW_LADY" });
    showSection("Main");
  };

  const showGentleman = () => {
    dispatch({ type: "SHOW_GENTLEMAN" });
    showSection("Main");
  };

  const showRegistrer = () => {
    dispatch({ type: "SHOW_REGISTRER" });
    showSection("Main");
  };

  const showFormularyCreateProduct = () => {
    dispatch({ type: "SHOW_FORMULARY_CREATE_PRODUCT" });
  }

  const showLoging = () => {
    dispatch({ type: "SHOW_LOGING" });
  };

  const showShoppingCart = () => {
    dispatch({ type: "SHOW_SHOPPING_CART" });
    showSection("Main");
  };

  const showWhoWeAre = () => {
    dispatch({ type: "SHOW_WHO_WE_ARE" });
    showSection("WhoWeAre");
  };

  const showPurchaseHistory = () => {
    dispatch({ type: "SHOW_PURCHARSE_HISTORY" });
    showSection("Main");
  };

  const showShop = () => {
    dispatch({ type: "SHOW_SHOP" });
    showSection("Shop");
  };

  const showNavPerfil = () => {
    dispatch({ type: "SHOW_NAV_PERFIL" });
    showSection("NavPerfil");
  };

  const showMainAdmin = () => {
    dispatch({ type: "SHOW_MAIN_ADMIN" });
    showSection("MainAdmin");
  };

  const showMainProductsSales = () => {
    dispatch({ type: "SHOW_MAIN_PRODUCTS_SALES" });
    showSection("MainAdmin");
  };

  const showDetailsProduct = () => {
    dispatch({ type: "SHOW_DETAILS_PRODUCT" });
  }

  const setDataDetailsProduct = (data) => {
    dispatch({
      type: "SET_DATA_DETAILS_PRODUCT",
      payload: data
    });
  }

  const setTotalPages = (totalPages) => {
    dispatch({
      type: "SET_TOTAL_PAGE_TABLE_ADMIN",
      payload: totalPages,
    });
  };

  const setTotalPagesProduct = (totalPagesProduct) => {
    dispatch({
      type: "SET_TOTAL_PAGE_TABLE_PRODUCT",
      payload: totalPagesProduct,
    });
  };

  const setCurrentPage = (currentPage) => {
    dispatch({
      type: "SET_CURRENT_PAGE_TABLE_ADMIN",
      payload: currentPage,
    });
  };

  const setCurrentPageProduct = (currentPageProduct) => {
    dispatch({
      type: "SET_CURRENT_PAGE_TABLE_PRODUCT",
      payload: currentPageProduct,
    });
  };

  const setCurrentPageProductAvalable = (currentPageProduct) => {
    dispatch({
      type: "SET_CURRENT_PAGE_PRODUCT_AVALABLE",
      payload: currentPageProduct,
    })
  }

  const setTotalPageProductAvalible = (totalPagesProduct) => {
    dispatch({
      type: "SET_TOTAL_PAGE_PRODUCT_AVALABLE",
      payload: totalPagesProduct,
    })
  }

  const showDataAdmin = () => {
    dispatch({ type: "SHOW_DATA_ADMIN" });
  };

  const showDataProduct = () => {
    dispatch({ type: "SHOW_DATA_PRODUCT" });
  };

  const getDataAdmin = (data) => {
    dispatch({
      type: "DATA_ADMIN",
      payload: data,
    });
  };

  const getDataProduct = (data) => {
    dispatch({
      type: "DATA_PRODUCT",
      payload: data,
    });
  };

  const updateMainAdmin = () => {
    dispatch({
      type: "UPDATE_COMPONENT_MAIN_ADMIN",
    });
  };

  const setModelProductsShoppingCart = async (shoppingCartId, color, sizes, productId) => {
    try {
      const modelProductWithColorsAndSizes = {
        color: color,
        sizes: sizes,
        productId: productId,
      }
      const data = await getByIdShoppingCart(shoppingCartId);
      dispatch({
        type: "SET_ARRAY_PRODUCTS_SHOPPING_CART",
        payload: data,
      });

      dispatch({
        type: "SET_LIST_MODEL_PRODUCT_COLORS_SIZES",
        payload: modelProductWithColorsAndSizes,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const removeProductShoppingCart = async (shoppingCartId) => {
    try {
      const data = await getByIdShoppingCart(shoppingCartId);
      dispatch({
        type: "SET_ARRAY_PRODUCTS_SHOPPING_CART",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  }


  const normalizeClientDataArray = (data) => {
    if (data && data.content && Array.isArray(data.content)) {
      return data.content.map((client) => ({
        id: client.idClientDto || 0,
        name: client.nameClientDto || "",
        email: client.emailClientDto || "",
        phone: client.phoneClientDto || "",
        address: client.addressClientDto || "",
        identification: client.identificationDto || "",
        admin: client.adminClientDto || false,
        password: client.passwordClientDto || "",
        status: client.statusClientDto,
      }));
    }
    return [];
  };

  const dataTableAdmin = (data) => {
    const arrayData = normalizeClientDataArray(data);
    setTotalPages(data.totalPages);
    dispatch({ type: "DATA_TABLE_ADMIN", payload: arrayData });
  };

  const dataTableProduct = (data) => {
    const arrayData = normalizeClientDataArrayProduct(data.content);
    setTotalPagesProduct(data.totalPages);
    dispatch({ type: "DATA_TABLE_PRODUCT", payload: arrayData });
  };

  const dataTableProductAvailable = (data) => {
    const arrayData = normalizeClientDataArrayProduct(data.content);
    setTotalPageProductAvalible(data.totalPages);
    dispatch({ type: "DATA_TABLE_PRODUCT_AVAILABLE", payload: arrayData });
  }

  const normalizeClientDataArrayProduct = (dataArray) => {
    if (dataArray && Array.isArray(dataArray)) {
      return dataArray.map((data) => ({
        id: data.idProductDto || 0,
        name: data.nameProductDto || "",
        description: data.descriptionProductDto || "",
        price: data.priceProductDto || 0,
        stock: data.stockProductDto || 0,
        productType: data.productTypeProductDto || "",
        mark: data.markProductDto || "",
        model: data.modelProductDto || "",
        sizes: data.sizesProductDto || [],
        color: data.colorProductDto || "",
        gender: data.genderProductDto || "",
        img: data.imgProductDto || "",
        status: data.statusProductDto,
        code: data.codeProductDto || "",
      }));
    }
    return [];
  };

  return {
    handlerLoging,
    handlerLogout,
    login,
    state,
    initPage,
    showBoy,
    showLady,
    showGentleman,
    showRegistrer,
    showLoging,
    showShoppingCart,
    showWhoWeAre,
    showPurchaseHistory,
    showShop,
    showNavPerfil,
    dataClientById,
    showMainAdmin,
    setTotalPages,
    setCurrentPage,
    showDataAdmin,
    dataTableAdmin,
    dataTableProduct,
    getDataAdmin,
    getDataProduct,
    updateMainAdmin,
    showMainProductsSales,
    setCurrentPageProduct,
    showDataProduct,
    showFormularyCreateProduct,
    dataTableProductAvailable,
    showDetailsProduct,
    setDataDetailsProduct,
    setModelProductsShoppingCart,
    setDataShoppingCartModel,
    removeProductShoppingCart,
    showMainPayment,
    setCurrentPageProductAvalable,
  };
};
