/* eslint-disable react/prop-types */
export const FormDataInputImg = ({ handlerOnChangeImage }) => {
    return (
        <>
            <div className="container-img">
                <label htmlFor="img" className="form-label-perfil">
                    <span>IMAGEN</span>
                </label>
                <div className="custom-file-input">
                    <input
                        required
                        name="img"
                        onChange={handlerOnChangeImage}
                        type="file"
                        id="img"
                        className="file"
                        accept="image/*"
                    />
                </div>
            </div>
        </>
    );
}