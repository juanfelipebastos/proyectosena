import { useEffect, useState } from "react";
import { getImgProductById } from "../../services/productsService";

/* eslint-disable react/prop-types */
export const ItemProductPayment = ({ product, quantity }) => {
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        getImgByIdProduct();
    }, [product]);

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
    return (
        <>
            <div className="item-producto-payment">
                <div className="item-producto-div-img">
                    <img src={imageSrc} alt="imagn del producto" />
                </div>
                <div className="item-product-div-information">
                    <div className="item-producto-body-container-one">
                        <h4>{product.name}</h4>
                        <h5>${product.price}</h5>
                    </div>
                    <div className="item-producto-body-container-one">
                        <h5>CANTIDAD:</h5>
                        <h5>{quantity}</h5>
                    </div>
                </div>
            </div>
        </>
    );
}