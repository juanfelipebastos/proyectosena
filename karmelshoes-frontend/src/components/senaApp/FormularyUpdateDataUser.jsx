import { DivButtomFromularyUpdate } from "./DivButtomFromularyUpdate";
import { DivContainerInputFormularyUpdate } from "./DivContainerInputFormularyUpdate";
import { DivMessageUpdateData } from "./DivMessageUpdateData";

/* eslint-disable react/prop-types */
export const FormularyUpdateDataUser = ({
  handlerOnSubmit,
  handlerOnChange,
  erroState,
  clientModelId,
  formSubmissionStatus,
  login,
  showMainAdmin,
  showMainProductsSales,
}) => {
  return (
    <>
      <form
        onSubmit={handlerOnSubmit}
        className="container-input-perfil"
        action=""
      >
        <DivContainerInputFormularyUpdate
          clientModelId={clientModelId}
          handlerOnChange={handlerOnChange}
          erroState={erroState}
        />
        <DivMessageUpdateData formSubmissionStatus={formSubmissionStatus} />
        <DivButtomFromularyUpdate login={login} showMainAdmin={showMainAdmin} showMainProductsSales={showMainProductsSales}/>
      </form>
    </>
  );
};
