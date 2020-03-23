import React from "react";

const FormField = ({ id, formData, change }) => {
  const showError = () => {
    let errMessage = "";

    if (!formData.valid)
      errMessage = (
        <div className="error_label">{formData.validationMessage}</div>
      );
    return errMessage;
  };

  const renderTemplate = () => {
    let formTemplate = null;
    switch (formData.element) {
      case "input":
        formTemplate = (
          <input
            {...formData.config}
            value={formData.value}
            onChange={event => change({ event, id })}
          />
        );
        break;
      case "textarea":
        formTemplate = (
          <textarea
            {...formData.config}
            value={formData.value}
            onChange={event => change({ event, id })}
          />
        );
        break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  };

  return (
    <div className="formBlock">
      {renderTemplate()}
      {showError()}
    </div>
  );
};

export default FormField;
