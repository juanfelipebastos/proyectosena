/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getImgProductById } from "../../services/productsService";

export const ProductItemPurcharseHistory = ({ product }) => {
    const [imageSrc, setImageSrc] = useState("");

    useEffect(() => {
        const fetchData = async () => {
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
        };

        fetchData();
    },[]);

    return (
        <>
            <motion.div className="container-the-product" style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover' }}>
                <h4>{product.name}</h4>
                <h4>${product.price}</h4>
            </motion.div>
        </>
    );
};
