/* eslint-disable react/prop-types */
export const DivFooterPagination = ({currentPage, setCurrentPage, totalPages}) => {
  return (
    <>
      <div className="pagination">
        <button
          className="buttom-pagination"
          onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span className="text-span">
          Página {currentPage} de {totalPages}
        </span>
        <button
          className="buttom-pagination"
          onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
