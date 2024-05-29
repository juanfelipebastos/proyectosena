import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ProductItemPurcharseHistory } from "./ProductItemPurcharseHistory";

export const DivTheProduct = ({ isAutoScrollEnabled, products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const uniqueProducts = products.filter((product, index) => {
    return products.findIndex(prod => prod.id === product.id) === index;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoScrollEnabled && uniqueProducts.length > 4) {
        setCurrentIndex(prevIndex => {
          const nextIndex = prevIndex + 1;
          return nextIndex >= uniqueProducts.length ? 0 : nextIndex;
        });
      }
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [isAutoScrollEnabled, uniqueProducts]);

  const repetitions = Math.ceil(uniqueProducts.length / 4);

  return (
    <>
      <motion.div
        className="container-products-inner"
        drag="x"
        dragConstraints={{
          right: 0,
          left: -(uniqueProducts.length * 180 * repetitions)
        }}
        animate={{ x: -(currentIndex % uniqueProducts.length) * 180 }}
      >
        {Array.from({ length: repetitions }, (_, i) => (
          <React.Fragment key={i}>
            {uniqueProducts.map((product, index) => (
              <ProductItemPurcharseHistory key={index} product={product} />
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </>
  );
};
