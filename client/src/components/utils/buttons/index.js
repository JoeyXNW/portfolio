import React from "react";
import "./buttons.css";

const Buttons = ({ url, title, type = "external" }) => {
  const renderButton = () => {
    let renderedButton = null;

    switch (type) {
      case "external":
        renderedButton = (
          <a href={url} target="_blank">
            {title}
          </a>
        );
        break;
      case "internal":
        renderedButton = <a href={url}>{title}</a>;
        break;
      default:
        renderedButton = null;
    }
    return renderedButton;
  };

  return <div className="button">{renderButton()}</div>;
};

export default Buttons;
