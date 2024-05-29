/* eslint-disable react/prop-types */
export const DivSelectSearch = ({selectText, optionSelect, handlerOnChange}) => {
    return (
        <>
            <div className="select-search">
                <select
                    style={{ width: "150px", height: "25px", borderRadius: "3px" }}
                    required
                    name="selectText"
                    value={selectText}
                    className="select-1"
                    id="selectText"
                    onChange={handlerOnChange}
                >
                    {optionSelect.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
}