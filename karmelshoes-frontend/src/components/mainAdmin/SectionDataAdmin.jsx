/* eslint-disable react/prop-types */
import { DivContainerInputFormularyUpdate } from "../senaApp/DivContainerInputFormularyUpdate";
import "/src/css/styleSectionDataAdmin.css";
import { useEffect } from "react";
import { useStateDataAdmin } from "../../hooks/useStateDataAdmin";
import { DivMessageUpdateData } from "../senaApp/DivMessageUpdateData";
import { DivButtomFormAdmin } from "./DivButtomFormAdmin";

export const SectionDataAdmin = ({
  showDataAdmin,
  dataAdmin,
  updateMainAdmin,
  id,
}) => {
  const {
    updateFieldsWithDataClient,
    handlerOnSubmit,
    handlerOnChange,
    erroState,
    clientModelId,
    handlerDeleteAdmin,
    formSubmissionStatus,
  } = useStateDataAdmin(dataAdmin, id);

  useEffect(() => {
    dataAdmin.password = "Null123";
    updateFieldsWithDataClient(dataAdmin);
  }, [dataAdmin]);

  const handlerDataAdminDelete = () => {
    handlerDeleteAdmin(dataAdmin);
    updateMainAdmin();
  };

  const handlerDataAdmin = () => {
    updateMainAdmin();
  };

  const handlerDataAdminClose = () => {
    updateMainAdmin();
    showDataAdmin();
  };

  return (
    <>
      <section className="data-admin">
        <div className="data-admin-div">
          <div className="data-admin-head">
            <div className="data-admin-title">DATOS</div>
            <div className="data-admin-img">
              <img
                onClick={handlerDataAdminClose}
                src="/src/assets/imgs/circulo-marca-x.png"
                alt=""
              />
            </div>
          </div>
          <form onSubmit={handlerOnSubmit} className="data-admin-body">
            <DivContainerInputFormularyUpdate
              erroState={erroState}
              handlerOnChange={handlerOnChange}
              clientModelId={clientModelId}
            />
            <div className="message-admin">
              <DivMessageUpdateData
                formSubmissionStatus={formSubmissionStatus}
              />
            </div>
            <DivButtomFormAdmin handlerDataAdminDelete={handlerDataAdminDelete} handlerDataAdmin={handlerDataAdmin}/>
          </form>
        </div>
      </section>
    </>
  );
};
