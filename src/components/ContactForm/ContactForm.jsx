import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";

import { nanoid } from "nanoid";
import { useId } from "react";

export default function ContactForm({ onAdd }) {
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, action) => {
    onAdd({
      ...values,
      id: nanoid(5),
    });
    action.resetForm();
  };

  const FeedbackSchema = Yup.object().shape(
    {
      name: Yup.string("Must be a string!")
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required")
        .trim(),
      number: Yup.string()
        .min(3, "Too Short!")
        .max(50, "Too Long!")
        .required("Required")
        .trim(),
    },
    { strict: true }
  );

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form noValidate className={css.container}>
        <div className={css.inputGroup}>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.input} id={nameId} name="name" />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>

        <div className={css.inputGroup}>
          <label htmlFor={numberId}>Number</label>
          <Field className={css.input} id={numberId} name="number" />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
