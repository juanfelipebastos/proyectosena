/* eslint-disable react/prop-types */

import { DivFooterPagination } from "./DivFooterPagination";
import "/src/css/styleFooterAdmin.css";

export const FooterAdmin = ({
  currentPage,
  setCurrentPage,
  totalPages,
  activeMainProductsSales,
  currentPageProduct,
  totalPagesProduct,
  setCurrentPageProduct,
}) => {
  return (
    <>
      <footer className="section-pagination">
        {activeMainProductsSales ? (
          <DivFooterPagination
            currentPage={currentPageProduct}
            setCurrentPage={setCurrentPageProduct}
            totalPages={totalPagesProduct}
          />
        ) : (
          <DivFooterPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        )}
      </footer>
    </>
  );
};
