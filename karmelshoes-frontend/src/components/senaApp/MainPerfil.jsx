/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { DivReproductorVideo } from "./DivReproductorVideo";
import { useStateMainPerfil } from "../../hooks/useStateMainPerfil";
import { FormularyUpdateDataUser } from "./FormularyUpdateDataUser";

import "/src/css/styleMainPerfil.css";

export const MainPerfil = ({ login, dataClientOrAdmin, dataClientById, showMainAdmin, showMainProductsSales }) => {
  const {
    updateFieldsWithDataClient,
    formSubmissionStatus,
    handlerOnSubmit,
    handlerOnChange,
    erroState,
    clientModelId,
  } = useStateMainPerfil(dataClientOrAdmin, dataClientById);

  useEffect(() => {
    dataClientOrAdmin.password = "Null123";
    updateFieldsWithDataClient(dataClientOrAdmin);
  }, [dataClientOrAdmin]);

  return (
    <>
      <main className="main-perfil">
        <DivReproductorVideo />
        <FormularyUpdateDataUser
          handlerOnSubmit={handlerOnSubmit}
          handlerOnChange={handlerOnChange}
          erroState={erroState}
          clientModelId={clientModelId}
          formSubmissionStatus={formSubmissionStatus}
          login={login}
          showMainAdmin={showMainAdmin}
          showMainProductsSales={showMainProductsSales}
        />
      </main>
    </>
  );
};
