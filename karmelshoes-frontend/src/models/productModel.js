export const productModel = {
  id: 0,
  name: "",
  description: "",
  price: 0.0,
  stock: 0,
  productType: "",
  mark: "",
  model: "",
  sizes: [],
  color: "",
  gender: "",
  img: "",
  status: true,
  code: "",
};

export const setDataDetailsProduct = {
  productDetailsModel: {},
  imgBlob: null,
}

export const productDetailsModel = {
  id: 0,
  name: "",
  description: "",
  price: 0.0,
  stock: 0,
  productType: "",
  mark: "",
  model: "",
  sizes: [],
  color: "",
  gender: "",
  img: "",
  status: true,
  code: "",
}

export const productModelCreateFormulary = {
  name: "",
  description: "",
  price: 0.0,
  stock: 0,
  productType: "",
  mark: "",
  model: "",
  sizes: [],
  color: [],
  gender: "",
  img: "",
  status: true,
  code: "",
};

export const initialStateFormularyCreateProduct = {
  dataFormulary: productModelCreateFormulary,
  errors: {},
  activeSectionColor: false,
  messageSuccesing: "",
  optionsModel: [],
  optionsProductType: [],
  dataFormularyUpdate: productModelCreateFormulary,
}

export const initialDataFormularyFilter = {
  selectText: "",
  inputText: "",
}

export const initialStateSectionAdminFilter = {
  dataFormulary: initialDataFormularyFilter,
  optionSelect: [],
}

export const initialFormularyDetailsProduct = {
  color: "",
  sizes: "",
  quantity: 0,
}

export const stateInitialDetailsProductsReducer = {
  dataFormulary: initialFormularyDetailsProduct,
  optionRenderColor: [],
  optionRenderSize: [],
  activateMessage: false,
}