import { useEffect, useState } from "react";
import { getImgProductById } from "../../services/productsService";

/* eslint-disable react/prop-types */
export const DivProduct = ({ product, showDetailsProduct, setDataDetailsProduct }) => {

  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    getImgByIdProduct();
  }, [product])

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

  const handlerAddToShoppingCart = () => {
    showDetailsProduct();
    const data = {
      product: product,
      imageUrl: imageSrc,
    };
    setDataDetailsProduct(data);
  }

  return (
    <>
      <div className="div-product">
        <div className="div-head">
          <img onClick={handlerAddToShoppingCart} className="img-1" src={imageSrc} alt="imagen del poruducto" />
        </div>
        <div className="div-color">
          <p>{product.name}</p>
        </div>
      </div>
    </>
  );
};
