/* eslint-disable react/prop-types */
export const DivMessageUpdateData = ({formSubmissionStatus}) => {
  const renderMessageUpdateData = () => {
    if (formSubmissionStatus === "Los Datos Se Han Actualizado Correctamente") {
      return (
        <div className="container-form-1">
          <h2 className="h2-update">{formSubmissionStatus}</h2>
        </div>
      );
    } else if (formSubmissionStatus) {
      return (
        <div className="container-form-1">
          <h2 className="h2-update-server">{formSubmissionStatus}</h2>
        </div>
      );
    } else {
      return <div className="container-form-1"></div>;
    }
  };

  return <>{renderMessageUpdateData()}</>;
};
