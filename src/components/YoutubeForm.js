import React from "react";
import { useFormik } from "formik";

function YoutubeForm() {
  // useFormik é um hook que possui os objetos auxiliadores do Formik
  // initialValues são os valores inicias do forms, crucial aqui que o nome do initialValues coincida com o campo "name" dos forms de destino.
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
  });

  console.log(formik.values);
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          onChange={formik.handleChange}
          value={formik.values.channel}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default YoutubeForm;
