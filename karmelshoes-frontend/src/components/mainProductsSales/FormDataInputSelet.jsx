/* eslint-disable react/prop-types */
export const FormDataInputSelet = ({name, value,  handlerSelectGenderOnChange}) => {
    return (
        <>
            <div className="form-perfil-input">
                <label htmlFor={name} className="form-label-perfil">
                    <span>GENERO</span>
                </label>
                <select
                    required
                    name={name}
                    value={value}
                    className="select-1"
                    id={name}
                    onChange={handlerSelectGenderOnChange}
                >
                    <option value="">SELECCIONAR</option>
                    <option value="DAMA">DAMA</option>
                    <option value="CABALLERO">CABALLERO</option>
                    <option value="NIÑO">NIÑO</option>
                    <option value="NIÑA">NIÑA</option>
                </select>
            </div>
        </>
    );
}