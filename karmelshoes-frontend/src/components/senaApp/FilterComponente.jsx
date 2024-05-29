/* eslint-disable react/prop-types */
export const FilterComponente = ({name, handlerOnChange, handlerOnSubmit}) => {
    return (
        <>
            <form onSubmit={handlerOnSubmit} className="input-search">
                <input type="text" name={name} placeholder="Buscar Producto" onChange={handlerOnChange}/>
                <button type="submit">
                    <img src="/src/assets/imgs/busqueda.svg" alt="Buscar" />
                </button>
            </form>
        </>
    );
}