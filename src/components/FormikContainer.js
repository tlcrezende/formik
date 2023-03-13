import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const initialValues = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Põe aqui algo!")
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
            lamebl="Email"
            name="email"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikContainer;
