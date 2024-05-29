/* eslint-disable react/prop-types */
import { useState } from "react";
import { ItemProductPayment } from "./ItemProductPayment";
import "/src/css/styleSectionMainPayment.css"
import { FormularyPaymentInformation } from "./FormularyPaymentInformation";
import { FormularyPaymentDelivery } from "./FormularyPaymentDelivery";

export const SectionMainPayment = ({ showMainPayment, clienteOrAdmin, listModelProductWithColorsAndSizes, shoppingCartModel, setDataShoppingCartModel }) => {

    const [dataFormulary, setDataFormulary] = useState(clienteOrAdmin);
    const [errors, setErrors] = useState({});
    const [activeFormularyPayment, setActiveFormularyPayment] = useState(true);
    const [activateRenderMessage, setActivateRenderMessage] = useState(false);

    const renderActivateMessage = () => {
        setActivateRenderMessage(true);
    }

    function interval() {
        setTimeout(() => {
            setErrors({});
        }, 5000);
    }

    const handlerOnChange = (event) => {
        const { name, value } = event.target;
        setDataFormulary((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handlerOnSubmit = (event) => {
        event.preventDefault();
        if (validateFormulary(dataFormulary)) {
            try {
                console.log(dataFormulary);
                setErrors({});
                setActiveFormularyPayment(false);
            } catch (error) {
                console.log("erros: ", error);
            }
        }
        interval();
    }

    const validateFormulary = (data) => {
        const newErrors = {};
        if (data.phone.length < 14 || data.phone.length > 14 || !/^\+57\s\d{10}$/.test(data.phone)) {
            newErrors.phone = "Debe tener 10 digitos y +57";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const renderListOrEmpty = () => {
        if (shoppingCartModel.modelShoppingCart.productEntitiesShoppingCartDto) {
            const uniqueProductIds = new Set();
            const uniqueProducts = Object.values(shoppingCartModel.modelShoppingCart.productEntitiesShoppingCartDto).filter(product => {
                if (!uniqueProductIds.has(product.id)) {
                    uniqueProductIds.add(product.id);
                    return true;
                }
                return false;
            });

            if (uniqueProducts.length === 0) {
                return (
                    <div className="empty-list-prooducts">
                        <div className="empty-img-list">
                            <img src="/src/assets/imgs/fondo-carro-compras -sin-fondo.png" alt="" />
                        </div>
                    </div>
                );
            }

            return uniqueProducts.map((product, index) => (
                <ItemProductPayment
                    key={index}
                    product={product}
                    quantity={getProductQuantity(product.id, shoppingCartModel.modelShoppingCart.productEntitiesShoppingCartDto)}
                />
            ));

        } else {
            return (
                <div className="empty-list-prooducts">
                    <div className="empty-img-list">
                        <img src="/src/assets/imgs/fondo-carro-compras -sin-fondo.png" alt="" />
                    </div>
                </div>
            )
        }
    }

    const getProductQuantity = (productId, productEntities) => {
        return productEntities.filter(product => product.id === productId).length;
    };

    const renderFormularyPaymentOrFormularyInformation = () => {
        if (activeFormularyPayment) {
            return (
                <FormularyPaymentInformation
                    handlerOnSubmit={handlerOnSubmit}
                    handlerOnChange={handlerOnChange}
                    errors={errors}
                    dataFormulary={dataFormulary}
                />
            )
        } else {


            return (
                <FormularyPaymentDelivery
                    backArrow={backArrow}
                    dataFormulary={dataFormulary}
                    modelProductsShoppingCart={shoppingCartModel.modelShoppingCart}
                    setDataShoppingCartModel={setDataShoppingCartModel}
                    renderActivateMessage={renderActivateMessage}
                />
            )
        }
    }

    const backArrow = () => {
        setActiveFormularyPayment(true);
    }

    return (
        <>
            <section className="section-main-payment">
                <div className="section-main-payment-div">
                    <div className="section-payment-head">
                        <img onClick={backArrow} src="/src/assets/imgs/icons8-back-arrow-30.png" alt="Cerrar" />
                        <h2>{activeFormularyPayment ? "DATOS DE ENVIO" : "METODO DE PAGO"}</h2>
                        <img onClick={showMainPayment} src="/src/assets/imgs/circulo-marca-x.png" alt="Cerrar" />
                    </div>
                    <div className="section-payment-body">
                        {renderFormularyPaymentOrFormularyInformation()}
                        <div className="setion-body-div-payment">
                            <div className="section-body-container-one-div-payment">
                                <h3>TU CESTA</h3>
                            </div>
                            <div className="section-body-container-two-div-payment">
                                {renderListOrEmpty()}
                            </div>
                            <div className="section-body-container-three-div-payment">
                                <h3>TOTAL:</h3>
                                <h3>{shoppingCartModel.modelShoppingCart.totalPriceShoppingCartDto}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {activateRenderMessage &&
                    <section className="activate-message-payment scale-up-vertical-top">
                        <h4>Compra Exitosa</h4>
                    </section>
                }
            </section>

        </>
    );
}