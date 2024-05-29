/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { ItemShoppingCart } from "./ItemShoppingCart";
import "/src/css/styleShoppingCart.css";

export const ShoppingCart = ({
  showShoppingCart,
  removeProductShoppingCart,
  showMainPayment,
  shoppingCartModel,
  setDataShoppingCartModel
}) => {



  useEffect(() => {
    setDataShoppingCartModel(shoppingCartModel.modelShoppingCart.idShoppingCartDto);
  }, [shoppingCartModel.modelShoppingCart.productEntitiesShoppingCartDto]);


  const renderListProductsShoppingCart = () => {
    if (shoppingCartModel.modelShoppingCart.productEntitiesShoppingCartDto) {
      const uniqueProductIds = new Set();
      const uniqueProducts = Object.values(shoppingCartModel.modelShoppingCart.productEntitiesShoppingCartDto).filter(product => {
        if (!uniqueProductIds.has(product.id)) {
          uniqueProductIds.add(product.id);
          return true;
        }
        return false;
      });

      if (uniqueProducts.length === 0) {
        return (
          <div className="div-body">
            <div className="container-null-body">
              <img src="/src/assets/imgs/fondo-carro-compras -sin-fondo.png" alt="imagen fondo carrito compras" />
            </div>
          </div>
        );
      }

      return (
        <div className="div-body" >
          {
            uniqueProducts.map((product, index) => (
              <ItemShoppingCart
                removeProductShoppingCart={removeProductShoppingCart}
                key={index}
                product={product}
                quantity={getProductQuantity(product.id, shoppingCartModel.modelShoppingCart.productEntitiesShoppingCartDto)}
                modelProductsShoppingCart={shoppingCartModel.modelShoppingCart}
              />
            ))
          }
        </div>
      )
    } else {
      return (
        <div className="div-body">
          <div className="container-null-body">
            <img src="/src/assets/imgs/fondo-carro-compras -sin-fondo.png" alt="imagen fondo carrito compras" />
          </div>
        </div>
      );
    }
  }

  const getProductQuantity = (productId, productEntities) => {
    return productEntities.filter(product => product.id === productId).length;
  };
  const renderButtomIfNotEmpty = () => {
    if (shoppingCartModel.modelShoppingCart.productEntitiesShoppingCartDto.length > 0) {
      return (
        <button onClick={showMainPayment}>Realizar Compra</button>
      );
    } else {
      return (
        <button disabled>Sin Productos</button>
      );
    }
  }

  return (
    <div className="div-showShoppingCart">
      <div className="div-ShoopingCart">
        <div className="div-header">
          <h2>Carrito De Compras</h2>
          <img
            className="img"
            onClick={showShoppingCart}
            src="/src/assets/imgs/circulo-marca-x.png"
            alt=""
          />
        </div>
        {renderListProductsShoppingCart()}
        <div className="div-footer">
          <div>
            <h2>Total:</h2>
            <h2>{shoppingCartModel.modelShoppingCart.totalPriceShoppingCartDto}</h2>
          </div>
          {renderButtomIfNotEmpty()}
        </div>
      </div>
    </div>
  );
};
