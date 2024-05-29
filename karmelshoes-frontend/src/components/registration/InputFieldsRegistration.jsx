export const InputFieldsRegistration = ({ name, value, handlerOnChange, errors, label, type = 'text' }) => {
  return (
    <>
      <div className="form-group">
      <input
        onChange={handlerOnChange}
        value={value}
        name={name}
        type={type}
        id={name}
        required
        className={errors ? 'error' : ''}
      />
      <label
        htmlFor={name}
        className={`form-label ${errors ? 'error-label' : ''}`}
      >
        <span className={`placeholder-text ${errors ? 'error-text' : ''}`}>
          {errors ? errors : label}
        </span>
      </label>
    </div>
    </>
  );
};
