/* eslint-disable react/prop-types */
export const FormDataInputTextArea = ({value, handlerOnChange}) => {
    return (
        <>
            <div className="container-title-description">
                <label htmlFor="description" className="form-label-perfil">
                    <span>DESCRIPCION:</span>
                </label>
            </div>
            <textarea
                required
                onChange={handlerOnChange}
                className="text-area"
                name="description"
                value={value}
            ></textarea>
        </>
    );
}