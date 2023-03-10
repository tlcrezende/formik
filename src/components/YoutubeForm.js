import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
};

const onSubmit = (values) => {
  console.log(values);
};

// Yup é uma forte biblioteca para colocar regras de validações mais rápidas e mais fácies de manusear e ler
const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("email inválido").required("Required email"),
  channel: Yup.string().required("Required channel"),
});

function YoutubeForm() {
  // useFormik é um hook que possui os objetos auxiliadores do Formik
  // initialValues são os valores inicias do forms, crucial aqui que o nome do initialValues coincida com o campo "name" dos forms de destino.
  // adicionando na tag form no onSubmit o handle Submit, toda vez que o forms for submitado ativara o onSubmit do formik e executara a arrow function predestinada.
  // <Formik> component subistiu totalmente o useFormik hook
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   validationSchema,
  // });

  //formik.getFieldProps substitui os valores de formulário onChange={formik.handleChange}, onBlur={formik.handleBlur} e value={formik.values.nomeAqui}
  // <Form> não precisa do onSubmit propr passando pra ele, já está diretamente ligado ao Formik
  // <Field> já possui getFieldProps por debaixo dos panos e não precisa passar para ele "entender" essas funcionalidades
  // Podemos mudar o estimo da mensagem de erro usando components ou passando uma função dentro do children
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email">
            {(errorMsg) => <div className="error">{errorMsg}</div>}
          </ErrorMessage>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" />
        </div>

        <div className="form-control">
          <label htmlFor="comments">Comments</label>
          <Field as="textarea" id="comments" name="comments" />
          <ErrorMessage name="comments" />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field name="address" type="text" >
            {(props) => {
              const { field, form, meta } = props;
              return (
                <div>
                  <input id="address" {...field} />
                  {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                </div>
              );
            }}
          </Field>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field as="textarea" id="facebook" name="social.facebook" />
          <ErrorMessage name="social.facebook" />
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <Field as="textarea" id="twitter" name="social.twitter" />
          <ErrorMessage name="social.twitter" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
