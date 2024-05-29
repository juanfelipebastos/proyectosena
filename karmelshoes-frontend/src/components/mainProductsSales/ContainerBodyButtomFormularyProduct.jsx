/* eslint-disable react/prop-types */
export const ContainerBodyButtomFormularyProduct = ({ handlerResetFormulary, showDataProduct, handlerDeleteProductById, showFormularyCreateProduct }) => {

    const closeFormularyCreateProduct = () => {
        handlerDeleteProductById();
        showFormularyCreateProduct();
        showDataProduct();
    }

    const renderIfShowDataProductIsFalse = () => {
        if (!showDataProduct) {
            return (
                <div className="buttom-delete">
                    <input
                        onClick={handlerResetFormulary}
                        type="button"
                        value="LIMPIAR"
                    />
                </div>
            );
        } else {
            return (
                <div className="buttom-delete">
                    <input
                        onClick={closeFormularyCreateProduct}
                        type="button"
                        value="ELIMINAR"
                    />
                </div>
            );
        }
    }

    return (
        <>
            <div className="container-body-buttom">
                {renderIfShowDataProductIsFalse()}
                <div className="buttom-create">
                    <input type="submit" value={"GUARDAR"} />
                </div>
            </div>
        </>
    );
}