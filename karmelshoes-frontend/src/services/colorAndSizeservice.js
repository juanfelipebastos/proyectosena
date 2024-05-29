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

export const getAllListColorAndSize = async () => {
  try {
    const data = await axios.get("http://localhost:9090/list/getAll", configuration());
    return data.data;
  } catch (error) {
    throw error;
  }
}

export const createNewColor = async ({ name }) => {
  try {
    const data = await axios.post(
      "http://localhost:9090/color/create",
      {
        name,
      },
      configuration()
    );

    return data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteColorByName = async (name) => {
  try {
    const data = await axios.delete(
      `http://localhost:9090/color/delete/${name}`,
      configuration()
    );

    return data.data;
  } catch (error) {
    throw error;
  }
};

export const createNewSize = async ({ size }) => {
  try {
    const data = await axios.post(
      "http://localhost:9090/size/create",
      {
        size,
      },
      configuration()
    );

    return data.data;
  } catch (error) {
    throw error;
  }
};

export const deleteSizrBySize = async (size) => {
  try {
    const data = await axios.delete(
      `http://localhost:9090/size/delete/${size}`,
      configuration()
    );

    return data.data;
  } catch (error) {
    throw error;
  }
};