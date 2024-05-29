import { useState } from "react";
import { createSalesByIdShoppingCart, generatePDFInvoice } from "../../services/salesService";
import { createByIdClientOneShoppingCart } from "../../services/shoppingCartServices";

/* eslint-disable react/prop-types */
export const FormularyPaymentDelivery = ({
    dataFormulary,
    backArrow,
    modelProductsShoppingCart,
    setDataShoppingCartModel,
    renderActivateMessage
}) => {

    const [activatePaypal, setActivatePaypal] = useState(true);
    const [dataFormularyTarget, setDataFormularyTarget] = useState({
        target: "",
        date: "",
    });

    const handlerOnChange = (event) => {
        const { name, value } = event.target;
        if (name === "target") {
            let inputTarget = event.target.value;
            inputTarget = inputTarget.replace(/\D/g, '');
            inputTarget = inputTarget.replace(/(.{4})/g, '$1 ').trim();
            setDataFormularyTarget((prevData) => ({
                ...prevData,
                [name]: inputTarget,
            }));
        }

        if (name === "date") {
            let inputDate = value;
            inputDate = inputDate.replace(/\D/g, '');
            if (inputDate.length > 2) {
                inputDate = inputDate.slice(0, 2) + '/' + inputDate.slice(2);
            }
            setDataFormularyTarget((prevData) => ({
                ...prevData,
                [name]: inputDate,
            }));
        }
    }

    const handlerOnSubmit = async (event) => {
        const card = "Tarjeta";
        event.preventDefault();
        try {
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const day = currentDate.getDate().toString().padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            const sale = {
                date: formattedDate,
                paymentMethod: card,
                client: {
                    id: dataFormulary.id
                }
            }
            event.target.removeEventListener('submit', handlerOnSubmit);
            await createSalesByIdShoppingCart(modelProductsShoppingCart.idShoppingCartDto, sale);
            try {
                const PDFInvoice = await generatePDFInvoice(modelProductsShoppingCart.idShoppingCartDto);
                const blob = new Blob([PDFInvoice], { type: 'application/pdf' });
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'factura.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.log(error);
            }

            try {
                const data = await createByIdClientOneShoppingCart(dataFormulary.id);
                setDataShoppingCartModel(data.idShoppingCartDto);
            } catch (error) {
                console.log(error);
            }

            renderActivateMessage();

            setDataFormularyTarget({
                target: "",
                date: "",
            });
        } catch (error) {
            console.log("erros: ", error);
        }
    }

    const handlerOnCLickInputRadioPaypal = () => {
        setActivatePaypal(true);
    }

    const handlerOnCLickInputRadioTarget = () => {
        setActivatePaypal(false);
    }

    const renderFormuladryPaypaylOrTarget = () => {
        if (!activatePaypal) {
            return (
                <>
                    <div className="section-formulary-delivery-body">
                        <div style={{ width: "80%" }} className="payment-input">
                            <label htmlFor="target">NUMERO DE TARJETA</label>
                            <input
                                onChange={handlerOnChange}
                                maxLength={21}
                                required
                                value={dataFormularyTarget.target}
                                name="target"
                                id="target"
                                type="text"
                                placeholder="XXXX XXXX XXXX XXXX X"
                                pattern="[0-9 ]{16,21}"
                                title="Ingrese un número de tarjeta válido"
                            />
                        </div>
                        <div style={{ width: "60%" }} className="payment-input">
                            <label htmlFor="target">FECHA</label>
                            <input
                                onChange={handlerOnChange}
                                placeholder="MM/AA"
                                required
                                value={dataFormularyTarget.date}
                                name="date"
                                id="date"
                                type="text"
                                maxLength={5}
                                pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
                                title="Ingrese una fecha válida en formato MM/AA"
                            />
                        </div>
                        <div className="form-payment-container-fourt aligtn-items">
                            <button type="submit">REALIZAR COMPRAR</button>
                        </div>
                    </div>
                </>
            );
        } else {
            return <>
                <div className="section-formulary-delivery-body-container-two">
                    <h4>Se te redirigirá al sitio de PayPal tras revisar tu pedido.</h4>
                    <div className="form-payment-container-fourt">
                        <a
                            href="https://www.paypal.com/cgibin/webscr?cmd=_express-checkout&token=EC-9JB80783DG511161B"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="a-payemt-paypal"
                        >
                            Ir a PayPal
                        </a>
                    </div>
                </div>
            </>
        }
    }
    return (
        <>
            <div className="section-body-form-one-payment-two">
                <div className="information-delivery">
                    <div className="information-delivery-container-head">
                        <h3>INFORMACION DE ENVIO</h3>
                        <label onClick={backArrow}>EDITAR</label>
                    </div>
                    <div className="information-delivery-container-body">
                        <h4>NOMBRE</h4>
                        <h4>{dataFormulary.name}</h4>
                    </div>
                    <div className="information-delivery-container-body">
                        <h4>DIRECCION</h4>
                        <h4>{dataFormulary.address}</h4>
                    </div>
                    <div className="information-delivery-container-body">
                        <h4>CIUDAD</h4>
                        <h4>{dataFormulary.city}</h4>
                    </div>
                    <div className="information-delivery-container-body">
                        <h4>CORREO</h4>
                        <h4>{dataFormulary.email}</h4>
                    </div>
                    <div className="information-delivery-container-body">
                        <h4>TELEFONO</h4>
                        <h4>{dataFormulary.phone}</h4>
                    </div>
                </div>
                <form onSubmit={handlerOnSubmit} className="section-body-form-two">
                    <div className="section-formulary-delivery">
                        <div className="items-radious-select">
                            <input
                                onClick={handlerOnCLickInputRadioPaypal}
                                defaultChecked
                                className="input-radio-delivery"
                                type="radio"
                                name="delivery"
                                id="delivery"
                            />
                            <label htmlFor="delivery" className="img-paypal-logo">
                                <img src="/src/assets/imgs/logo_paypal2x.png" alt="PayPal" />
                            </label>
                        </div>
                        <div className="items-radious-select">
                            <input onClick={handlerOnCLickInputRadioTarget} type="radio" name="delivery" id="delivery-target" />
                            <label htmlFor="delivery-target">Tarjeta de credito o debito</label>
                        </div>
                    </div>
                    {renderFormuladryPaypaylOrTarget()}
                </form>
            </div>
        </>
    );
}