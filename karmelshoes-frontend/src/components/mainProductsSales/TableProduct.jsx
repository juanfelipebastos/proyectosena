/* eslint-disable react/prop-types */
export const TableProduct = ({dataTableProductElement, handlerDataProduct}) => {
  return (
    <>
      <table className="table-admin">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Genero</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th>Codigo</th>
            <th>Eliminado</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {dataTableProductElement.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.mark}</td>
              <td>{product.model}</td>
              <td>{product.gender}</td>
              <td>${product.price}</td>
              <td>{product.productType}</td>
              <td>{product.code}</td>
              <td>{product.status ? "NO" : "SI"}</td>
              <td>
                <img
                  onClick={() => handlerDataProduct(product)}
                  className="img-table"
                  src="/src/assets/imgs/zapato-config.png"
                  alt="icono de configuracion"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
