/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { DivTheProduct } from "./DivTheProduct";

export const DivContainerProductsHistory = ({products}) => {
  const containerRef = useRef(null);
  const [isManualInteraction, setIsManualInteraction] = useState(false);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);


  const handleMouseDown = () => {
    setIsManualInteraction(true);
    setIsAutoScrollEnabled(false);
  };

  const handleMouseUp = () => {
    setIsManualInteraction(false);
    setTimeout(() => {
      setIsAutoScrollEnabled(true);
    }, 10000);
  };

  return (
    <>
      <motion.div
        className="container-products"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <DivTheProduct products={products} isAutoScrollEnabled={isAutoScrollEnabled}></DivTheProduct>
      </motion.div>
    </>
  );
};
