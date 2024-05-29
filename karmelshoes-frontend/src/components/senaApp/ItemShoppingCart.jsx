import { useEffect, useState } from "react";
import { getImgProductById } from "../../services/productsService";
import { removeProductFromShoppingCart } from "../../services/shoppingCartServices";

/* eslint-disable react/prop-types */
export const ItemShoppingCart = ({ product, quantity, modelProductsShoppingCart, removeProductShoppingCart }) => {
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        getImgByIdProduct();
    }, [product, removeProductShoppingCart]);

    const getImgByIdProduct = async () => {
        try {
            const dataImg = await getImgProductById(product.id);
            if (dataImg instanceof ArrayBuffer) {
                const blob = new Blob([dataImg], { type: 'image/*' });
                const imageUrl = URL.createObjectURL(blob);
                setImageSrc(imageUrl);
            } else {
                console.error('Los datos recibidos no son un ArrayBuffer.');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handlerRemoveProduct = async  () => {
        try {
            console.log("modelProductsShoppingCart: ", modelProductsShoppingCart.idShoppingCartDto);
            await removeProductFromShoppingCart(modelProductsShoppingCart.idShoppingCartDto, product.id);
            await removeProductShoppingCart(modelProductsShoppingCart.idShoppingCartDto);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="div-item">
                <div className="div-img">
                    <img className="img" src={imageSrc} alt="imagen del producto" />
                </div>
                <div className="div-name">
                    <h2>{product.name}</h2>
                    <img onClick={handlerRemoveProduct} className="img" src="/src/assets/imgs/circulo-marca-x.svg" alt="quitar producto" />
                </div>
                <div className="div-price">
                    <h2>Cantidad:</h2>
                    <h2>{quantity}</h2>
                    <h2>{product.price}$</h2>
                </div>
            </div>
        </>
    );
}
