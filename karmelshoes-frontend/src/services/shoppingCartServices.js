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

export const getByIdShoppingCart = async (shoppingCartId) => {
    try {
        const response = await axios.get(
            `http://localhost:9090/shoppingCart/getById/${shoppingCartId}`,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}


export const createByIdClientOneShoppingCart = async (id) => {
    try {
        const response = await axios.post(`http://localhost:9090/shoppingCart/createShoppingCart/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const addProductToShoppingCart = async (shoppingCartId, productId) => {
    try {
        const response = await axios.put(
            `http://localhost:9090/shoppingCart/addProduct/${shoppingCartId}/${productId}`,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const removeProductFromShoppingCart = async (shoppingCartId, productId) => {
    try {
        const response = await axios.put(
            `http://localhost:9090/shoppingCart/removeProduct/${shoppingCartId}/${productId}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteByIdShoppingCart = async (shoppingCartId) => {
    try {
        const response = await axios.put(
            `http://localhost:9090/shoppingCart/deleteById/${shoppingCartId}`,
        );
        return response.data;
    } catch (error) {
        throw error;
    }
}