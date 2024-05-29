/* eslint-disable react/prop-types */
export const DivHeaderFormProduct = ({ showFormularyCreateProduct, renderMessageErrors, showDataProduct }) => {

    const closeFormularyCreateProduct = () => {
        showFormularyCreateProduct();
        showDataProduct();
    }

    return (
        <>
            <div className="data-admin-head">
                <div className="data-admin-title">{renderMessageErrors()}</div>
                <div className="data-admin-img">
                    <img
                        onClick={closeFormularyCreateProduct}
                        src="/src/assets/imgs/circulo-marca-x.png"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}