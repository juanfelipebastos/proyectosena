/* eslint-disable no-useless-catch */
import axios from "axios";

export const getSalesByIdClient = async (clientId) => {
  try {
    const response = await axios.get(`http://localhost:9090/sales/getByIdClient/${clientId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createSalesByIdShoppingCart = async (shoppingCartId, sale) => {
  try {
    const response = await axios.post(
      `http://localhost:9090/sales/create/${shoppingCartId}`,
      sale
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const generatePDFInvoice = async (idShoppingCart) => {
  try {
    const response = await axios.get(`http://localhost:9090/sales/invoiceGeneratedPDF/${idShoppingCart}`, {
      responseType: 'blob'
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getAllSalesByIdClient = async (clientId) => {
  try {
    const response = await axios.get(`http://localhost:9090/sales/getByIdClient/${clientId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}