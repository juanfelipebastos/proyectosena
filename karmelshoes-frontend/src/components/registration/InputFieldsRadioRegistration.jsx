import { useEffect } from "react";

export const InputFieldsRadioRegistration = ({ handlerOnChange }) => {
  useEffect(() => {
    handlerOnChange({
      target: {
        name: "admin",
        value: false,
        type: "radio",
        checked: true,
      },
    });
  }, []);
  
  return (
    <>
      <div className="radio">
        <input
          onChange={handlerOnChange}
          defaultChecked
          value={false}
          type="radio"
          name="admin"
          id="client"
        />
        <label htmlFor="client">Cliente</label>
      </div>
      <div className="radio">
        <input
          onChange={handlerOnChange}
          value={true}
          type="radio"
          name="admin"
          id="admin"
        />
        <label htmlFor="admin">Administrador</label>
      </div>
    </>
  );
};
