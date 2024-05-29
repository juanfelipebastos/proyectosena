/* eslint-disable react/prop-types */
import { ContainerMenuProductGentleman } from "./ContainerMenuProductGentleman";
import { ContainerMenuProductLady } from "./ContainerMenuProductLady";
import { ContainerMenuProductChild } from "./ContainerMenuProductChild";
import "/src/css/styleLady.css";
import "/src/css/styleGentleman.css";
import "/src/css/styleChild.css";

export const SectionProduct = ({ activeLady, activeGentleman, activeChild, dataTableProductAvailable, currentPageProductAvalable }) => {

  const sectionClassName = () => {
    if (activeLady || activeGentleman) {
      return "section-product";
    } else if (activeChild) {
      return "section-boy";
    } else {
      return "section-product";
    }
  };

  const renderProductContainer = () => {
    if (activeLady) {
      return <ContainerMenuProductLady
        dataTableProductAvailable={dataTableProductAvailable}
        currentPageProductAvalable={currentPageProductAvalable}
      />;
    } else if (activeGentleman) {
      return <ContainerMenuProductGentleman
        dataTableProductAvailable={dataTableProductAvailable}
        currentPageProductAvalable={currentPageProductAvalable}
      />;
    } else if (activeChild) {
      return <ContainerMenuProductChild
        dataTableProductAvailable={dataTableProductAvailable}
        currentPageProductAvalable={currentPageProductAvalable}
      />;
    } else {
      return null;
    }
  };

  return (
    <section className={sectionClassName()}>{renderProductContainer()}</section>
  );
};
