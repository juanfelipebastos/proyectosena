export const DivButtomFormAdmin = ({handlerDataAdminDelete, handlerDataAdmin}) => {
  return (
    <>
      <div className="data-admin-div-buttom">
        <div className="data-admin-div-delete-admin">
          <button
            onClick={handlerDataAdminDelete}
            className="buttom-data-admin"
            type="button"
          >
            <h2>ELIMINAR</h2>
          </button>
        </div>
        <button
          onClick={handlerDataAdmin}
          className="buttom-data-admin"
          type="submit"
        >
          <h2>GUARDAR</h2>
        </button>
      </div>
    </>
  );
};
