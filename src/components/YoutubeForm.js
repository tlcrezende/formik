import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
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
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

    //formik.getFieldProps substitui os valores de formulário onChange={formik.handleChange}, onBlur={formik.handleBlur} e value={formik.values.nomeAqui} 
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            { ...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            { ...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            { ...formik.getFieldProps('channel')}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className="error">{formik.errors.channel}</div>
          ) : null}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
