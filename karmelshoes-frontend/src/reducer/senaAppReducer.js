export const senaAppReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ACTIVE_SECTION_MAIN":
      return {
        ...state,
        activeSection: action.payload,
        activatePayment: false,
      };
    case "SHOW_SHOPPING_CART":
      return {
        ...state,
        activeShoppingCart: !state.activeShoppingCart,
      };
    case "SHOW_BOY":
      return {
        ...state,
        activeDetailsProduct: false,
        activeChild: true,
        activeLady: false,
        activeGentleman: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
        activeFormularyCreateProduct: false,
        activatePayment: false,
      };
    case "SHOW_LADY":
      return {
        ...state,
        activeDetailsProduct: false,
        activeLady: true,
        activeChild: false,
        activeGentleman: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
        activeFormularyCreateProduct: false,
        activatePayment: false,
      };
    case "SHOW_GENTLEMAN":
      return {
        ...state,
        activeDetailsProduct: false,
        activeGentleman: true,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
        activeFormularyCreateProduct: false,
        activatePayment: false,
      };
    case "SHOW_REGISTRER":
      return {
        ...state,
        activeRegistrer: !state.activeRegistrer,
        activeDetailsProduct: false,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
        activeFormularyCreateProduct: false,
        activeLoging: false,
        activatePayment: false,
      };
    case "SHOW_LOGING":
      return {
        ...state,
        activeDetailsProduct: false,
        activeLoging: !state.activeLoging,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeRegistrer: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
        activeFormularyCreateProduct: false,
        activatePayment: false,
      };
    case "SHOW_WHO_WE_ARE":
      return {
        ...state,
        activeDetailsProduct: false,
        activeWhoWeAre: true,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
        activeFormularyCreateProduct: false,
        activatePayment: false,
      };
    case "SHOW_PURCHARSE_HISTORY":
      return {
        ...state,
        activeDetailsProduct: false,
        activePurchaseHistory: true,
        activeWhoWeAre: false,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
        activeFormularyCreateProduct: false,
        activatePayment: false,
      };
    case "SHOW_SHOP":
      return {
        ...state,
        activeDetailsProduct: false,
        activeShop: true,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
        activeFormularyCreateProduct: false,
        activatePayment: false,
      };
    case "SHOW_NAV_PERFIL":
      return {
        ...state,
        activeDetailsProduct: false,
        activeNavPerfil: true,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeShop: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
        activeFormularyCreateProduct: false,
        activatePayment: false,
      };
    case "SHOW_MAIN_ADMIN":
      return {
        ...state,
        activeDetailsProduct: false,
        activeMainAdmin: true,
        activeNavPerfil: false,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeShop: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
        activeFormularyCreateProduct: false,
        activatePayment: false,
      };
    case "SHOW_DATA_ADMIN":
      return {
        ...state,
        activeDetailsProduct: false,
        activeDataAdmin: !state.activeDataAdmin,
        activeMainAdmin: true,
        activeNavPerfil: false,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeShop: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
        activeFormularyCreateProduct: false,
        activatePayment: false,
      };
    case "SHOW_DATA_PRODUCT":
      return {
        ...state,
        activeDataProduct: !state.activeDataProduct,
        activeDetailsProduct: false,
        activeDataAdmin: false,
        activeMainAdmin: false,
        activeNavPerfil: false,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeShop: false,
        activeMainProductsSales: true,
        activeFormularyCreateProduct: false,
        activatePayment: false,
      };
    case "INIT_PAGE":
      return {
        ...state,
        activeDetailsProduct: false,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeDataProduct: false,
        activeMainProductsSales: false,
        activeFormularyCreateProduct: false,
        activatePayment: false,
      };
    case "SHOW_MAIN_PRODUCTS_SALES":
      return {
        ...state,
        activeDetailsProduct: false,
        activeMainProductsSales: true,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeFormularyCreateProduct: false,
        activatePayment: false,
      };
    case "SHOW_FORMULARY_CREATE_PRODUCT":
      return {
        ...state,
        activeFormularyCreateProduct: !state.activeFormularyCreateProduct,
        activeDetailsProduct: false,
        activeMainProductsSales: true,
        activeGentleman: false,
        activeChild: false,
        activeLady: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activatePayment: false,
      };
    case "SHOW_DETAILS_PRODUCT":
      return {
        ...state,
        activeDetailsProduct: !state.activeDetailsProduct,
        activeRegistrer: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
        activeFormularyCreateProduct: false,
        activatePayment: false,
      };
    case "SHOW_MAIN_PAYMENT":
      return {
        ...state,
        activatePayment: !state.activatePayment,
        activeChild: false,
        activeLady: false,
        activeGentleman: false,
        activeShoppingCart: false,
        activeDetailsProduct: false,
        activeRegistrer: false,
        activeShop: false,
        activeWhoWeAre: false,
        activePurchaseHistory: false,
        activeNavPerfil: false,
        activeMainAdmin: false,
        activeDataAdmin: false,
        activeMainProductsSales: false,
        activeDataProduct: false,
        activeFormularyCreateProduct: false,
      };
    case "SET_DATA_DETAILS_PRODUCT":
      return {
        ...state,
        dataDetailsProduct: action.payload,
      }

    case "SET_DATA_SHOPPING_CART_MODEL":
      return {
        ...state,
        shoppingCartModel: {
          ...state.shoppingCartModel,
          modelShoppingCart: action.payload
        }
      }
    case "INIT_DATA_CLIENT":
      return {
        ...state,
        clienteOrAdmin: {
          ...state.clienteOrAdmin,
          ...action.payload,
        },
      };
    case "SET_TOTAL_PAGE_TABLE_ADMIN":
      return {
        ...state,
        totalPages: action.payload,
      };
    case "SET_TOTAL_PAGE_TABLE_PRODUCT":
      return {
        ...state,
        totalPagesProduct: action.payload,
      };
    case "DATA_TABLE_ADMIN":
      return {
        ...state,
        dataTableAdmin: action.payload,
      };
    case "DATA_TABLE_PRODUCT":
      return {
        ...state,
        dataTableProduct: action.payload,
      };
    case "DATA_TABLE_PRODUCT_AVAILABLE":
      return {
        ...state,
        dataTableProductAvailable: action.payload,
      };
    case "DATA_ADMIN":
      return {
        ...state,
        dataAdmin: action.payload,
      };
    case "DATA_PRODUCT":
      return {
        ...state,
        dataProduct: action.payload,
      };
    case "SET_CURRENT_PAGE_TABLE_ADMIN":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_CURRENT_PAGE_TABLE_PRODUCT":
      return {
        ...state,
        currentPageProduct: action.payload,
      };
    case "UPDATE_COMPONENT_MAIN_ADMIN":
      return {
        ...state,
        updateMainAdmin: !state.updateMainAdmin,
      };
    case "SET_ARRAY_PRODUCTS_SHOPPING_CART": {
      return {
        ...state,
        modelProductsShoppingCart: action.payload,
      }
    }
    case "SET_LIST_MODEL_PRODUCT_COLORS_SIZES": {
      return {
        ...state,
        listModelProductWithColorsAndSizes: [...state.listModelProductWithColorsAndSizes, action.payload],
      };
    }
    case "SET_LIST_MODEL_PRODUCT_COLORS_SIZES_INITIAL": {
      return {
        ...state,
        listModelProductWithColorsAndSizes: [],
      };
    }
    case "SET_CURRENT_PAGE_PRODUCT_AVALABLE":
      return {
        ...state,
        currentPageProductAvalable: action.payload,
      };
    case "SET_TOTAL_PAGE_PRODUCT_AVALABLE":
      return {
        ...state,
        totalPagesProductAvailable: action.payload,
      }
    default:
      return state;
  }
};
