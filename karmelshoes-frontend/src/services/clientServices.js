/* eslint-disable no-useless-catch */
import axios from "axios";

const configuration = () => {
  const token = sessionStorage.getItem("token");
  return {
    headers: {
      Authorization:token,
      "Content-Type": "application/json",
    },
  };
};

export const createClientOrAdmin = async ({
  name,
  email,
  phone,
  address,
  identification,
  status,
  admin,
  password,
}) => {
  try {
    return await axios.post("http://localhost:9090/client/create", {
      name,
      email,
      phone,
      address,
      identification,
      status,
      admin,
      password,
    });
  } catch (error) {
    throw error;
  }
};

export const updateAllFieldsClientOrAdmin = async ({
  id,
  name,
  email,
  phone,
  address,
  identification,
  status,
  admin,
  password,
}) => {
  try {
    return await axios.put(`http://localhost:9090/client/updateAll/${id}`, {
      name,
      email,
      phone,
      address,
      identification,
      status,
      admin,
      password,
    });
  } catch (error) {
    throw error;
  }
};

export const getClientByName = async (name) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/client/getByName/${name}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getClientById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/client/getById/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteClientById = async (id) => {
  try {
    await axios.patch(
      `http://localhost:9090/client/deleteById/${id}`,
      configuration()
    );
  } catch (error) {
    throw error;
  }
};


export const deleteAdminById = async (id) => {
  try {
    const response = await axios.patch(
      `http://localhost:9090/client/deleteAdminById/${id}`,null,
      configuration()
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllClient = async (currentPage, itemsPerPage) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/client/getAll/${currentPage}/${itemsPerPage}`,
      configuration()
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllClientAdmin = async (currentPage, itemsPerPage) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/client/getAllAdmin/${currentPage}/${itemsPerPage}`,
      configuration()
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllClientAdminByName = async (currentPage, itemsPerPage, name) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/client/getAllAdminByName/${currentPage}/${itemsPerPage}/${name}`,
      configuration()
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllClientAdminByAddress = async (currentPage, itemsPerPage, address) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/client/getAllAdminByAddress/${currentPage}/${itemsPerPage}/${address}`,
      configuration()
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllClientAdminByPhone = async (currentPage, itemsPerPage, phone) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/client/getAllAdminByPhone/${currentPage}/${itemsPerPage}/${phone}`,
      configuration()
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllClientAdminByEmail = async (currentPage, itemsPerPage, email) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/client/getAllAdminByEmail/${currentPage}/${itemsPerPage}/${email}`,
      configuration()
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllClientAdminByStatus = async (currentPage, itemsPerPage, status) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/client/getAllAdminByStatus/${currentPage}/${itemsPerPage}/${status}`,
      configuration()
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllClientAdminByIdentificaction = async (currentPage, itemsPerPage, identificaction) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/client/getAllAdminByIdentification/${currentPage}/${itemsPerPage}/${identificaction}`,
      configuration()
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllUser = async (currentPage, itemsPerPage) => {
  try {
    const response = await axios.get(
      `http://localhost:9090/client/getAllUser/${currentPage}/${itemsPerPage}`,
      configuration()
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePasswordByEmail = async (email, identification, newPassword) => {
  try {

    const formData = new FormData();
    formData.append("email", email);
    formData.append("identification ", identification);
    formData.append("newPassword", newPassword);

    const response = await axios.patch(
      `http://localhost:9090/client/updatePassword`,
      formData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};