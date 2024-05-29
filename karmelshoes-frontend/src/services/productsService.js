/* eslint-disable no-useless-catch */

import axios from "axios";


const configuration = () => {
  const token = sessionStorage.getItem("token");
  return {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  };
};

const configurationFile = () => {
  const token = sessionStorage.getItem("token");
  return {
    headers: {
      Authorization: token,
    },
  };
};

const configurationImg = () => {
  return {
    responseType: 'arraybuffer',
  };
};


export const getAllProduct = async () => {
  try {
    const response = await axios.get("http://localhost:9090/product/getAll");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllProductPages = async (currentPage, itemsPerPage) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/product/getAllProductPage/${currentPage}/${itemsPerPage}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createNewProduct = async (product, img) => {
  try {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('status', product.status);
    formData.append('stock', product.stock);
    formData.append('productType', product.productType);
    formData.append('mark', product.mark);
    formData.append('model', product.model);
    formData.append('sizes', product.sizes);
    formData.append('color', product.color);
    formData.append('gender', product.gender);
    formData.append('code', product.code);
    formData.append('img', img);

    const response = await axios.post(
      'http://localhost:9090/product/createProductImg',
      formData,
      configurationFile()
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProductById = async (product, img, id) => {
  try {
    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('price', product.price);
    formData.append('status', product.status);
    formData.append('stock', product.stock);
    formData.append('productType', product.productType);
    formData.append('mark', product.mark);
    formData.append('model', product.model);
    formData.append('sizes', product.sizes);
    formData.append('color', product.color);
    formData.append('gender', product.gender);
    formData.append('code', product.code);
    formData.append('img', img);

    const response = await axios.put(
      `http://localhost:9090/product/update/${id}`,
      formData,
      configurationFile()
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getImgProductById = async (id) => {
  try {
    const data = await axios.get(`http://localhost:9090/product/getImgProductById/${id}`, configurationImg());
    return data.data;
  } catch (error) {
    throw error;
  }
}

export const getProductById = async (id) => {
  try {
    const data = await axios.get(`http://localhost:9090/product/getById/${id}`)
    return data.data;
  } catch (error) {
    throw error;
  }
}

export const deleteProductById = (id) => {
  try {
    return axios.patch(`http://localhost:9090/product/delete/${id}`, null, configuration());
  } catch (error) {
    throw error;
  }
}

export const getAllProductPageByName = async (currentPage, itemsPerPage, name) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/product/getAllProductPageByName/${currentPage}/${itemsPerPage}/${name}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getAllProductPageByMark = async (currentPage, itemsPerPage, mark) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/product/getAllProductPageByMark/${currentPage}/${itemsPerPage}/${mark}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getAllProductPageByModel = async (currentPage, itemsPerPage, model) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/product/getAllProductPageByModel/${currentPage}/${itemsPerPage}/${model}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getAllProductPageByGender = async (currentPage, itemsPerPage, gender) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/product/getAllProductPageByGender/${currentPage}/${itemsPerPage}/${gender}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getAllProductPageByPrice = async (currentPage, itemsPerPage, price) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/product/getAllProductPageByPrice/${currentPage}/${itemsPerPage}/${price}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getAllProductPageByProductType = async (currentPage, itemsPerPage, productType) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/product/getAllProductPageByProductType/${currentPage}/${itemsPerPage}/${productType}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getAllProductPageByCode = async (currentPage, itemsPerPage, code) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/product/getAllProductPageByCode/${currentPage}/${itemsPerPage}/${code}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getAllProductPageByStatusFalse = async (currentPage, itemsPerPage) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/product/getAllProductPageByStatusFalse/${currentPage}/${itemsPerPage}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getAllProductPageByGenderByModelAndProductType = async (currentPage, itemsPerPage, gender, model, productType) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/product/getAllProductPageByGenderByModelAndProductType/${currentPage}/${itemsPerPage}/${gender}/${model}/${productType}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}