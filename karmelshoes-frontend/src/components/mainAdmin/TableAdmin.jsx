export const TableAdmin = ({ dataTable, handlerDataAdmin }) => {
  return (
    <>
      <table className="table-admin">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Eliminado</th>
            <th>Identificación</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.status ? "NO" : "SI"}</td>
              <td>{user.identification}</td> 
              <td>
                <img
                  onClick={() => handlerDataAdmin(user)}
                  className="img-table"
                  src="/src/assets/imgs/cong-admin.png"
                  alt="icono de configuracion"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
