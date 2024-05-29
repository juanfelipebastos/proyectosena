/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { ContainerBoy } from "./ContainerBoy";
import { ContainerGirld } from "./ContainerGirld";
import { getAllProductPageByGender } from "../../services/productsService";

export const ContainerMenuProductChild = ({ dataTableProductAvailable, currentPageProductAvalable }) => {
  const [selectedCategory, setSelectedCategory] = useState("boy");

  useEffect(() => {
    if (selectedCategory === "boy") {
      handlerOnClickBoy();
    } else if (selectedCategory === "girl") {
      handlerOnClickGirl();
    }
  }, [currentPageProductAvalable]);

  const handlerOnClickBoy = async () => {
    setSelectedCategory("boy");
    try {
      const data = await getAllProductPageByGender(currentPageProductAvalable - 1, 8, "NIÑO");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlerOnClickGirl = async () => {
    setSelectedCategory("girl");
    try {
      const data = await getAllProductPageByGender(currentPageProductAvalable - 1, 8, "NIÑA");
      dataTableProductAvailable(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className={`container-girl ${selectedCategory === "boy" && "inactive"}`}>
        <h2 onClick={handlerOnClickGirl}>Niña</h2>
        {selectedCategory === "girl" && <ContainerGirld
          dataTableProductAvailable={dataTableProductAvailable}
          currentPageProductAvalable={currentPageProductAvalable}
        />}
      </section>
      <section className={`container-boy ${selectedCategory === "girl" && "inactive"}`}>
        <h2 onClick={handlerOnClickBoy}>Niño</h2>
        {selectedCategory === "boy" && <ContainerBoy
          dataTableProductAvailable={dataTableProductAvailable}
          currentPageProductAvalable={currentPageProductAvalable}
        />}
      </section>
    </>
  );
};
