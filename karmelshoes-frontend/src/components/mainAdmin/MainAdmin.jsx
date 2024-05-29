/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { TableAdmin } from "./TableAdmin";
import { TableProduct } from "../mainProductsSales/TableProduct";
import "/src/css/styleMainAdmin.css";
import { getAllProductPages } from "../../services/productsService";
import { getAllClientAdmin } from "../../services/clientServices";

export const MainAdmin = ({
  currentPage,
  showDataAdmin,
  dataTableAdmin,
  dataTable,
  dataTableProductElement,
  dataTableProduct,
  getDataAdmin,
  getDataProduct,
  forcerRender,
  activeMainProductsSales,
  currentPageProduct,
  showDataProduct,
}) => {
  useEffect(() => {
    getAllData();
  }, [currentPage, forcerRender, currentPageProduct]);

  const getAllData = async () => {
    try {
      const dataProduct = await getAllProductPages(currentPageProduct - 1, 10);
      const dataAdmin = await getAllClientAdmin(currentPage - 1, 10);
      dataTableAdmin(dataAdmin);
      dataTableProduct(dataProduct);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerDataAdmin = (admin) => {
    showDataAdmin();
    getDataAdmin(admin);
  };

  const handlerDataProduct = (product) => {
    showDataProduct();
    getDataProduct(product);
  }

  return (
    <>
      <main className="main-admin">
        {activeMainProductsSales ? (
          <TableProduct
            dataTableProductElement={dataTableProductElement}
            handlerDataProduct={handlerDataProduct}
          />
        ) : (
          <TableAdmin
            dataTable={dataTable}
            handlerDataAdmin={handlerDataAdmin}
          />
        )}
      </main>
    </>
  );
};
