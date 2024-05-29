export const FormInputFormularyDataProduct = ({
  label,
  name,
  value,
  onChange,
  type,
  id,
  error,
}) => {
  const handleInputChange = (event) => {
    if (type === "text" || !type || type === "select") {
      onChange(event.target.value);
    } else if (type === "number") {
      onChange(parseFloat(event.target.value));
    }

    if (type === "text" && name === "color") {
      const colorsArray = event.target.value
        .split(",")
        .map((color) => color.trim());
      onChange(colorsArray);
    }

    if (type === "text" && name === "sizes") {
      const sizesArray = event.target.value
        .split(",")
        .map((size) => size.trim());
      onChange(sizesArray);
    }
  };

  const inputElement =
    type === "textarea" ? (
      <textarea
        value={value}
        onChange={handleInputChange}
        name={name}
        className="textarea"
        id={id}
      />
    ) : type === "select" ? (
      <select
        value={value}
        onChange={handleInputChange}
        name={name}
        id={id}
        className="select"
      >
        {name === "productType" && (
          <>
            <option value="BOTINES">BOTINES</option>
            <option value="BOTAS">BOTAS</option>
            <option value="SNEAKERS">SNEAKERS</option>
            <option value="SIN CORDONES">SIN CORDONES</option>
            <option value="DEPORTIVOS">DEPORTIVOS</option>
            <option value="PLANAS">PLANAS</option>
            <option value="PLATAFORMAS">PLATAFORMAS</option>
            <option value="MEDIANAS">MEDIANAS</option>
            <option value="ALTOS">ALTOS</option>
            <option value="BAJOS">BAJOS</option>
            <option value="MEDIOS">MEDIOS</option>
          </>
        )}
        {name === "model" && (
          <>
            <option value="SANDALIAS">SANDALIAS</option>
            <option value="TENIS">TENIS</option>
            <option value="ZAPATOS">ZAPATOS</option>
            <option value="TACONES">TACONES</option>
          </>
        )}
        {name === "gender" && (
          <>
            <option value="M">DAMA</option>
            <option value="H">CABALLERO</option>
            <option value="NIÑO">NIÑO</option>
            <option value="NIÑA">NIÑA</option>
          </>
        )}
      </select>
    ) : (
      <input
        value={value}
        onChange={handleInputChange}
        name={name}
        className={type === "number" ? "input-number" : "input"}
        type={type}
        id={id}
      />
    );

  return (
    <div className="form-perfil-input">
      {inputElement}
      <label htmlFor={id} className="form-label-perfil">
        <span>{label}</span>
      </label>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};
