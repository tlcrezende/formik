import React from "react";
import Input from "./Input";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "inpu":
    case "int":
    case "iput":
    case "iut":
    case "inpt":
    default:
      return null;
  }
}

export default FormikControl;
