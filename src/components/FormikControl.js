import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
      case "textarea":
        return <Textarea {...rest} />;
    case "int":
    case "iput":
    case "iut":
    case "inpt":
    default:
      return null;
  }
}

export default FormikControl;
