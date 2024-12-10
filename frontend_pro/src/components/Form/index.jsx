import React from "react";
import { Formik } from "formik";
import styles from "./form.module.scss";
import { validationSchema } from "../../validation/ValidationSchema";

const initialValues = { name: "", email: "", password: "" };

const handleFormSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const renderForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit} className={styles.form}>
    <input
      type="text"
      name="name"
      placeholder="Name"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
      className={styles.form__input}
    />
    {errors.name && touched.name && (
      <div className={styles.form__error}>{errors.name}</div>
    )}
    <input
      type="email"
      placeholder="Email"
      name="email"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.email}
      className={styles.form__input}
    />
    {errors.email && touched.email && (
      <div className={styles.form__error}>{errors.email}</div>
    )}
    <input
      type="password"
      placeholder="Password"
      name="password"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password}
      className={styles.form__input}
    />
    {errors.password && touched.password && (
      <div className={styles.form__error}>{errors.password}</div>
    )}
    <button
      type="submit"
      disabled={isSubmitting}
      className={styles.form__button}
    >
      Submit
    </button>
  </form>
);

export default function Form() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {renderForm}
    </Formik>
  );
}
