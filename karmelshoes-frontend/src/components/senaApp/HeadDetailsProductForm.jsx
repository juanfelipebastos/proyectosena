export const HeadDetailsProductForm = ({ showDetailsProduct, product }) => {

    return (
        <>
            <div className="head-details-product">
                <h2>{product.name}</h2>
                <img onClick={showDetailsProduct} className="arrow" src="/src/assets/imgs/circulo-marca-x.svg" alt="volver atras" />
                <h3>{product.gender}</h3>
                <h3>${product.price}</h3>
            </div>
        </>
    );
}