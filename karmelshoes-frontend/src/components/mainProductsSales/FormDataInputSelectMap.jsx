/* eslint-disable react/prop-types */
export const FormDataInputSelectMap = ({value, name, handlerSelectGenderOnChange, optionsRender, span}) => {
    return (
        <>
            <div className="form-perfil-input">
                <label htmlFor={name} className="form-label-perfil">
                    <span>{span}</span>
                </label>
                <select
                    required
                    name={name}
                    value={value}
                    className="select-1"
                    id={name}
                    onChange={handlerSelectGenderOnChange}
                >
                    {optionsRender.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}