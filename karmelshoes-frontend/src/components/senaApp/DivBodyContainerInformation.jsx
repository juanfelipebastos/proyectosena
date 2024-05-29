/* eslint-disable react/prop-types */
export const DivBodyContainerInformation = ({totalProducts, totalPrice}) => {
  return (
    <>
      <div className="body-container-information">
        <div className="left-container">
          <h2>Total De Productos</h2>
          <h2>{totalProducts}</h2>
          <h2>Direccion Mas Usada</h2>
          <h2>{"No se una calle cualquiera"}</h2>
        </div>
        <div className="right-container">
          <h2>Metodo De Pago Mas Usado</h2>
          <h2>{"Efectivo"}</h2>
          <h2>Total:</h2>
          <h2>{totalPrice}</h2>
        </div>
      </div>
    </>
  );
};
