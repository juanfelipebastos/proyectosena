// useStateCreateProduct.js
import {
    useReducer
} from "react";
import {
    createProductReducer
} from "../reducer/createProductReducer";
import {
    initialStateFormularyCreateProduct
} from "../models/productModel";
import {
    createNewProduct,
    deleteProductById,
    updateProductById
} from "../services/productsService";

export const useStateCreateProduct = (updateMainAdmin, showDataProduct) => {
    const [state, dispatch] = useReducer(createProductReducer, initialStateFormularyCreateProduct);
    const {
        dataFormularyUpdate,
        dataFormulary,
        errors,
        activeSectionColor,
        messageSuccesing,
        optionsModel,
        optionsProductType,
    } = state;

    const handlerDeleteProductById = async () => {
        try {
            console.log("id para eliminar: ",dataFormularyUpdate.id);
            await deleteProductById(dataFormularyUpdate.id);
            dispatch({
                type: "SET_SUCCESS_MESSAGE",
                payload: "Se Elimino Correctamente El Producto"
            })
            updateMainAdmin();
        } catch (error) {
            const errors = error.response.data;
            console.log(error)
            if(errors.code === 404) {
                dispatch({
                    type: "SET_SUCCESS_MESSAGE",
                    payload: errors.message
                })
            }
        }
    }

    const updateDataFormulary = (dataProduct) => {
        dispatch({
            type: "SET_FORM_UPDATE_DATA",
            payload: dataProduct
        })

    }

    const handlerOnChangeImage = (event) => {
        if (showDataProduct) {
            dispatch({
                type: "SET_FORM_DATA_IMG_UPDATE",
                payload: event.target.files[0]
            });
        } else {
            dispatch({
                type: "SET_FORM_DATA_IMG",
                payload: event.target.files[0]
            });
        }
    };

    const handlerOnChange = (event) => {
        if (showDataProduct) {
            const {
                name,
                value
            } = event.target;
            dispatch({
                type: "SET_FORM_UPDATE_DATA",
                payload: {
                    ...dataFormularyUpdate,
                    [name]: value
                }
            });
        } else {
            const {
                name,
                value
            } = event.target;
            dispatch({
                type: "SET_FORM_DATA",
                payload: {
                    ...dataFormulary,
                    [name]: value
                }
            });
        }
    };

    const handlerSelectGenderOnChange = (event) => {
        if (showDataProduct) {
            const {
                name,
                value
            } = event.target;
            dispatch({
                type: "SET_FORM_DATA_SELECT_UPDATE",
                payload: {
                    name,
                    value
                }
            });
        } else {
            const {
                name,
                value
            } = event.target;
            dispatch({
                type: "SET_FORM_DATA_SELECT",
                payload: {
                    name,
                    value
                }
            });
        }
    };

    const handlerResetFormulary = () => {
        dispatch({
            type: "SET_FORM_DATA",
            payload: initialStateFormularyCreateProduct.dataFormulary,
        })
    };

    const dataListColorAndListSize = (data) => {
        if (showDataProduct) {
            dispatch({
                type: "SET_FORM_UPDATE_DATA",
                payload: {
                    ...dataFormularyUpdate,
                    color: data.colors,
                    sizes: data.sizes
                }
            })
        } else {
            dispatch({
                type: "SET_FORM_DATA",
                payload: {
                    ...dataFormulary,
                    color: data.colors,
                    sizes: data.sizes
                }
            })
        }
    }

    const showSectionColor = () => {
        dispatch({
            type: "TOGGLE_SECTION_COLOR"
        });
    };

    const handlerOnsubmit = async (event) => {
        event.preventDefault();
        if (showDataProduct) {
            if (validateProductFields(dataFormularyUpdate)) {
                try {
                    dispatch({
                        type: "SET_SUCCESS_MESSAGE",
                        payload: "Se Actualizo Correctamente El Producto"
                    })
                    const dataUpdate = await updateProductById(dataFormularyUpdate, dataFormularyUpdate.img, dataFormularyUpdate.id);
                    updateMainAdmin();
                    const dataUpdateNormalized = normalizeProductData(dataUpdate);
                    dispatch({
                        type: "SET_FORM_UPDATE_DATA",
                        payload: dataUpdateNormalized
                    })
                } catch (error) {
                    const errors = error.response.data;
                    console.log("errros: ", errors);
                    if (errors.code === 400) {
                        dispatch({
                            type: "SET_SUCCESS_MESSAGE",
                            payload: errors.message
                        })
                    }
                }
            }
        } else {
            if (validateProductFields(dataFormulary)) {
                try {
                    dispatch({
                        type: "SET_SUCCESS_MESSAGE",
                        payload: "Se Creo Correctamente El Producto"
                    })
                    await createNewProduct(dataFormulary, dataFormulary.img);
                    updateMainAdmin();
                    dispatch({
                        type: "SET_FORM_DATA",
                        payload: initialStateFormularyCreateProduct.dataFormulary
                    })
                } catch (error) {
                    const errors = error.response.data;
                    if (errors.code === 400) {
                        dispatch({
                            type: "SET_SUCCESS_MESSAGE",
                            payload: errors.message
                        })
                    }
                }
            }
        }
    };

    const validateProductFields = (product) => {
        const errors = {};

        if (product.name.length < 2 || product.name.length > 200) {
            errors.name = "El nombre debe tener entre 2 y 200 caracteres";
        }

        if (product.description.length < 8) {
            errors.description = "La descripción debe tener al menos 8 caracteres";
        }

        if (product.price <= 0) {
            errors.price = "El precio debe ser mayor a 0.00";
        }

        if (product.stock <= 0) {
            errors.stock = "El valor de stock debe ser mayor a 0.00";
        }

        if (product.productType.length < 4 || product.productType.length > 200) {
            errors.productType =
                "El tipo de producto debe tener entre 4 y 200 caracteres";
        }

        if (product.mark.length < 4 || product.mark.length > 200) {
            errors.mark = "La marca debe tener entre 4 y 200 caracteres";
        }

        if (product.model.length < 4 || product.model.length > 200) {
            errors.model = "El modelo no puede estar vacio";
        }

        if (product.gender.length < 4 || product.gender.length > 200) {
            errors.gender = "El genero no puede estar vacio";
        }

        if (product.productType.length < 4 || product.productType.length > 200) {
            errors.productType = "La categoria no puede estar vacia";
        }

        if (product.sizes.length === 0) {
            errors.sizes = "Las tallas no pueden estar vacios";
        }

        if (product.color.length === 0) {
            errors.color = "Los colores no pueden estar vacios";
        }

        if (product.img.length === 0) {
            errors.img = "La imagen es requerida";
        }

        if (product.code.length < 5) {
            errors.code = "El campo code debe tener al menos 5 caracteres";
        }

        dispatch({
            type: "SET_ERROR_STATE",
            payload: errors
        })
        return Object.keys(errors).length === 0;
    };


    const updateModelOptions = () => {
        if (showDataProduct) {
            if (dataFormularyUpdate.gender === "DAMA" || dataFormularyUpdate.gender === "NIÑA") {
                dispatch({
                    type: "SET_OPTIONS_MODEL",
                    payload: [{
                            value: "",
                            label: "SELECCIONA"
                        },
                        {
                            value: "ZAPATOS",
                            label: "ZAPATOS"
                        },
                        {
                            value: "TENIS",
                            label: "TENIS"
                        },
                        {
                            value: "SANDALIAS",
                            label: "SANDALIAS"
                        },
                        {
                            value: "TACONES",
                            label: "TACONES"
                        },
                    ],
                })
            } else if (
                dataFormularyUpdate.gender === "CABALLERO" ||
                dataFormularyUpdate.gender === "NIÑO"
            ) {
                dispatch({
                    type: "SET_OPTIONS_MODEL",
                    payload: [{
                            value: "",
                            label: "SELECCIONA"
                        },
                        {
                            value: "ZAPATOS",
                            label: "ZAPATOS"
                        },
                        {
                            value: "TENIS",
                            label: "TENIS"
                        },
                        {
                            value: "SANDALIAS",
                            label: "SANDALIAS"
                        },
                    ],
                })
            } else {
                dispatch({
                    type: "SET_OPTIONS_MODEL",
                    payload: [{
                        value: "",
                        label: "SELECCIONA"
                    }],
                })
            }
        } else {
            if (dataFormulary.gender === "DAMA" || dataFormulary.gender === "NIÑA") {
                dispatch({
                    type: "SET_OPTIONS_MODEL",
                    payload: [{
                            value: "",
                            label: "SELECCIONA"
                        },
                        {
                            value: "ZAPATOS",
                            label: "ZAPATOS"
                        },
                        {
                            value: "TENIS",
                            label: "TENIS"
                        },
                        {
                            value: "SANDALIAS",
                            label: "SANDALIAS"
                        },
                        {
                            value: "TACONES",
                            label: "TACONES"
                        },
                    ],
                })
            } else if (
                dataFormulary.gender === "CABALLERO" ||
                dataFormulary.gender === "NIÑO"
            ) {
                dispatch({
                    type: "SET_OPTIONS_MODEL",
                    payload: [{
                            value: "",
                            label: "SELECCIONA"
                        },
                        {
                            value: "ZAPATOS",
                            label: "ZAPATOS"
                        },
                        {
                            value: "TENIS",
                            label: "TENIS"
                        },
                        {
                            value: "SANDALIAS",
                            label: "SANDALIAS"
                        },
                    ],
                })
            } else {
                dispatch({
                    type: "SET_OPTIONS_MODEL",
                    payload: [{
                        value: "",
                        label: "SELECCIONA"
                    }],
                })
            }
        }
    };

    const updateProductTypeOptions = () => {
        if (showDataProduct) {
            if (dataFormularyUpdate.model === "ZAPATOS") {
                dispatch({
                    type: "SET_OPTIONS_PRODUCT_TYPE",
                    payload: [{
                            value: "",
                            label: "SELECCIONA"
                        },
                        {
                            value: "BOTAS",
                            label: "BOTAS"
                        },
                        {
                            value: "BOTINES",
                            label: "BOTINES"
                        },
                    ],
                })
            } else if (dataFormularyUpdate.model === "SANDALIAS") {
                dispatch({
                    type: "SET_OPTIONS_PRODUCT_TYPE",
                    payload: [{
                            value: "",
                            label: "SELECCIONA"
                        },
                        {
                            value: "PLANAS",
                            label: "PLANAS"
                        },
                        {
                            value: "PLATAFORMAS",
                            label: "PLATAFORMAS"
                        },
                        {
                            value: "MEDIANAS",
                            label: "MEDIANAS"
                        },
                    ],
                })
            } else if (dataFormularyUpdate.model === "TENIS") {
                dispatch({
                    type: "SET_OPTIONS_PRODUCT_TYPE",
                    payload: [{
                            value: "",
                            label: "SELECCIONA"
                        },
                        {
                            value: "SNEAKERS",
                            label: "SNEAKERS"
                        },
                        {
                            value: "PLATAFORMAS",
                            label: "PLATAFORMAS"
                        },
                        {
                            value: "SIN CORDONES",
                            label: "SIN CORDONES"
                        },
                        {
                            value: "DEPORTIVOS",
                            label: "DEPORTIVOS"
                        },
                    ],
                })
            } else if (
                (dataFormularyUpdate.model === "TACONES" &&
                    (dataFormularyUpdate.gender === "DAMA" || dataFormularyUpdate.gender === "NIÑA"))
            ) {
                dispatch({
                    type: "SET_OPTIONS_PRODUCT_TYPE",
                    payload: [{
                            value: "",
                            label: "SELECCIONA"
                        },
                        {
                            value: "ALTOS",
                            label: "ALTOS"
                        },
                        {
                            value: "BAJOS",
                            label: "BAJOS"
                        },
                        {
                            value: "MEDIOS",
                            label: "MEDIOS"
                        },
                    ],
                })
            } else {
                dispatch({
                    type: "SET_OPTIONS_PRODUCT_TYPE",
                    payload: [{
                        value: "",
                        label: "SELECCIONA"
                    }],
                })
            }
        } else {
            if (dataFormulary.model === "ZAPATOS") {
                dispatch({
                    type: "SET_OPTIONS_PRODUCT_TYPE",
                    payload: [{
                            value: "",
                            label: "SELECCIONA"
                        },
                        {
                            value: "BOTAS",
                            label: "BOTAS"
                        },
                        {
                            value: "BOTINES",
                            label: "BOTINES"
                        },
                    ],
                })
            } else if (dataFormulary.model === "SANDALIAS") {
                dispatch({
                    type: "SET_OPTIONS_PRODUCT_TYPE",
                    payload: [{
                            value: "",
                            label: "SELECCIONA"
                        },
                        {
                            value: "PLANAS",
                            label: "PLANAS"
                        },
                        {
                            value: "PLATAFORMAS",
                            label: "PLATAFORMAS"
                        },
                        {
                            value: "MEDIANAS",
                            label: "MEDIANAS"
                        },
                    ],
                })
            } else if (dataFormulary.model === "TENIS") {
                dispatch({
                    type: "SET_OPTIONS_PRODUCT_TYPE",
                    payload: [{
                            value: "",
                            label: "SELECCIONA"
                        },
                        {
                            value: "SNEAKERS",
                            label: "SNEAKERS"
                        },
                        {
                            value: "PLATAFORMAS",
                            label: "PLATAFORMAS"
                        },
                        {
                            value: "SIN CORDONES",
                            label: "SIN CORDONES"
                        },
                        {
                            value: "DEPORTIVOS",
                            label: "DEPORTIVOS"
                        },
                    ],
                })
            } else if (
                (dataFormulary.model === "TACONES" &&
                    (dataFormulary.gender === "DAMA" || dataFormulary.gender === "NIÑA"))
            ) {
                dispatch({
                    type: "SET_OPTIONS_PRODUCT_TYPE",
                    payload: [{
                            value: "",
                            label: "SELECCIONA"
                        },
                        {
                            value: "ALTOS",
                            label: "ALTOS"
                        },
                        {
                            value: "BAJOS",
                            label: "BAJOS"
                        },
                        {
                            value: "MEDIOS",
                            label: "MEDIOS"
                        },
                    ],
                })
            } else {
                dispatch({
                    type: "SET_OPTIONS_PRODUCT_TYPE",
                    payload: [{
                        value: "",
                        label: "SELECCIONA"
                    }],
                })
            }
        }

    };

    const normalizeProductData = (backendData) => {
        return {
            name: backendData.nameProductDto || "",
            description: backendData.descriptionProductDto || "",
            price: backendData.priceProductDto || 0.0,
            stock: backendData.stockProductDto || 0,
            productType: backendData.productTypeProductDto || "",
            mark: backendData.markProductDto || "",
            model: backendData.modelProductDto || "",
            sizes: backendData.sizesProductDto || [],
            color: backendData.colorProductDto || [],
            gender: backendData.genderProductDto || "",
            img: "",
            status: backendData.statusProductDto || true,
            code: backendData.codeProductDto || "",
        };
    };

    return {
        state,
        handlerOnsubmit,
        handlerOnChange,
        handlerOnChangeImage,
        handlerSelectGenderOnChange,
        showSectionColor,
        updateProductTypeOptions,
        updateModelOptions,
        handlerResetFormulary,
        dataListColorAndListSize,
        updateDataFormulary,
        errors,
        messageSuccesing,
        optionsModel,
        optionsProductType,
        dataFormulary,
        dataFormularyUpdate,
        handlerDeleteProductById,
    };
};