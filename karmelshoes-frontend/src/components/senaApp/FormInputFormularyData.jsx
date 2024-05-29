/* eslint-disable react/prop-types */
export const FormInputFormularyData = ({ label, name, value, onChange, type, id, error }) => {
  return (
    <div className="form-perfil-input">
      <input
        value={value}
        onChange={onChange}
        name={name}
        className="input"
        type={type}
        id={id}
      />
      <label htmlFor={id} className="form-label-perfil">
        <span>{label}</span>
      </label>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};
