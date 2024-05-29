/* eslint-disable react/prop-types */
import "/src/css/styleSectionDetailsProduct.css"
import { useEffect } from "react";
import { useStateSectionDetailsProduct } from "../../hooks/useStateSectionDetailsProduct";
import { HeadDivSectionDetailsProduct } from "./HeadDivSectionDetailsProduct";
import { HeadDetailsProductForm } from "./HeadDetailsProductForm";
import { BodyHeadDetailsProduct } from "./BodyHeadDetailsProduct";

export const SectionDetailsProduct = ({ showDetailsProduct, dataDetailsProduct, setModelProductsShoppingCart, login, showLoging, shoppingCartModel }) => {

    const { product, imageUrl } = dataDetailsProduct;
    const {
        state,
        handlerSetOptionRenderColor,
        handlerSetOptionRenderSize,
        handlerOnChange,
        handlerOnSubmit,
        dataFormulary,
        optionRenderColor,
        optionRenderSize,
        setActivateMessage,
    } = useStateSectionDetailsProduct(setModelProductsShoppingCart, product, imageUrl, shoppingCartModel);

    useEffect(() => {
        handlerSetOptionRenderColor(product);
        handlerSetOptionRenderSize(product);
        funtionInterval();
    }, [product]);

    const funtionInterval = () => {
        const interval = setInterval(() => {
            setActivateMessage();
        }, 4000);
        return () => {
            clearInterval(interval);
        };
    }

    const renderSectionMessageAddToShoppingCart = () => {
        if (state.activateMessage) {
            return (
                <section className="message-add-to-shoppingCart scale-up-vertical-top">
                    <div className="message-add">
                        <h2>SE AÑADIO AL CARRITO</h2>
                    </div>
                </section>
            )
        }
    }

    const renderLoginsIsAythnetication = () => {
        if (login.isAuth) {
            return (
                <div className="body-footer-details-product padding-top-body-head border-top-body-body-details-product" >
                    <button type="submit">AÑADIR AL CARRITO</button>
                </div>
            )
        } else {
            return (
                <div className="body-footer-details-product padding-top-body-head border-top-body-body-details-product" >
                    <button onClick={showLoging} type="button">INICA SESION</button>
                </div>
            )
        }
    }


    return (
        <>
            <section className="section-details-product">
                <form onSubmit={handlerOnSubmit} className="div-details-product">
                    <HeadDivSectionDetailsProduct imageUrl={imageUrl} />
                    <div className="details-product">
                        <HeadDetailsProductForm showDetailsProduct={showDetailsProduct} product={product} />
                        <BodyHeadDetailsProduct dataFormulary={dataFormulary} handlerOnChange={handlerOnChange} product={product} optionRenderColor={optionRenderColor} optionRenderSize={optionRenderSize} />
                        <div className="body-body-details-product padding-top-body-head" >
                            <p>{product.description}</p>
                        </div>
                        {renderLoginsIsAythnetication()}
                    </div>
                </form>
                {renderSectionMessageAddToShoppingCart()}
            </section>
        </>
    );
}