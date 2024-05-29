/* eslint-disable react/prop-types */
export const ContainerFormProductButtom = ({laben, span, showSectionColor}) => {
    return (
        <>
            <div className="container-buttom-sizes">
                <label htmlFor={laben} className="form-label-perfil">
                    <span>{span}</span>
                </label>
                <button onClick={showSectionColor} type="button">SELECCIONAR</button>
            </div>
        </>
    );
}