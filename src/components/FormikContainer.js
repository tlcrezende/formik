import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropdownOptions = [
    { key: "Select one", value: "" },
    { key: "Option 1", value: "value 1" },
    { key: "Option 2", value: "value 2" },
    { key: "Option 3", value: "value 3" },
    { key: "Option 4", value: "value 4" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Põe aqui algo!"),
    description: Yup.string().required("Põe aqui algo!"),
    selectOption: Yup.string().required("Põe aqui algo!"),
  });
  const onSubmit = (values) => {
    console.log("values: ", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="email"
          />
          <FormikControl
            control="textarea"
            type="text"
            label="Description"
            name="description"
          />
          <FormikControl
            control="select"
            label="Select a option"
            name="selectOption"
            options={dropdownOptions}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
