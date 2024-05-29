/* eslint-disable react/prop-types */
export const DivInputTextSearch = ({ inputText, handlerOnChange, selectText }) => {
    return (
        <>
            <div className="input-search-configuration">
                <div className="input-search">
                    <input
                        type="text"
                        value={inputText}
                        name="inputText"
                        placeholder={selectText ? selectText : "BUSCAR PRODUCTO"}
                        className="input-1"
                        id="inputText"
                        required={selectText}
                        onChange={handlerOnChange} />
                    <button type="submit">
                        <img src="/src/assets/imgs/busqueda.svg" alt="Buscar" />
                    </button>
                </div>
            </div>
        </>
    );
}