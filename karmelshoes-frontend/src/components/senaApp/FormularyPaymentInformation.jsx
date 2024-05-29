/* eslint-disable react/prop-types */
export const FormularyPaymentInformation = ({ handlerOnSubmit, handlerOnChange, errors, dataFormulary }) => {
    return (
        <>
            <form onSubmit={handlerOnSubmit} className="section-body-form-one-payment">
                <div className="form-payment-container-one">
                    <div className="payment-input">
                        <label htmlFor="name">NOMBRE</label>
                        <input
                            required
                            onChange={handlerOnChange}
                            className={errors.name ? "error-input-payment" : null}
                            value={errors.name ? errors.name : dataFormulary.name}
                            name="name"
                            id="name"
                            type="text"
                        />
                    </div>
                    <div className="payment-input">
                        <label htmlFor="city">CIUDAD</label>
                        <input
                            required
                            onChange={handlerOnChange}
                            style={errors.city ? { color: "red" } : null}
                            value={errors.city ? errors.city : dataFormulary.city}
                            name="city"
                            id="city"
                            type="text"
                        />
                    </div>
                </div>
                <div className="form-payment-container-two">
                    <div className="payment-input">
                        <label htmlFor="address">DIRECCION & NUMERO</label>
                        <input
                            required
                            onChange={handlerOnChange}
                            style={errors.address ? { color: "red" } : null}
                            value={errors.address ? errors.address : dataFormulary.address}
                            id="address"
                            type="text"
                            name="address"
                        />
                    </div>
                </div>
                <div className="form-payment-container-three">
                    <div className="payment-input">
                        <label htmlFor="email">CORRREO</label>
                        <input
                            required
                            onChange={handlerOnChange}
                            style={errors.email ? { color: "red" } : null}
                            value={errors.email ? errors.email : dataFormulary.email}
                            name="email"
                            id="email"
                            type="email"
                        />
                    </div>
                    <div className="payment-input">
                        <label htmlFor="phone">TELEFONO</label>
                        <input
                            required
                            onChange={handlerOnChange}
                            style={errors.phone ? { color: "red" } : null}
                            value={errors.phone ? errors.phone : dataFormulary.phone}
                            id="phone"
                            type="text"
                            name="phone"
                        />
                    </div>
                </div>
                <div className="form-payment-container-fourt">
                    <button type="submit">GUARDAR Y CONTINUAR</button>
                </div>
            </form>
        </>
    );
}