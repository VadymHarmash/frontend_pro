import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Yup from "yup";
import { Formik } from "formik";

import { fetchDestinations } from "../../../../store/thunks/destinationThunk";
import { fetchHotelsByCity } from "../../../../store/thunks/hotelsThunk";

import { DatePicker, message, Select } from "antd";

import styles from "./bookingForm.module.scss";

export const BookingForm = () => {
  const dispatch = useDispatch();
  const { destinations } = useSelector((state) => state.destinationReducer);

  useEffect(() => {
    dispatch(fetchDestinations());
  }, [dispatch]);

  const initialValues = {
    destination: null,
    dateIn: null,
    dateOut: null,
    adults: "",
    children: "",
  };

  const validationSchema = Yup.object().shape({
    destination: Yup.object().required("Destination is required").nullable(),
    dateIn: Yup.date().required("Check-in date is required"),
    dateOut: Yup.date()
      .required("Check-out date is required")
      .min(
        Yup.ref("dateIn"),
        "Check-out date cannot be earlier than check-in date",
      ),
    adults: Yup.number()
      .min(1, "At least 1 adult is required")
      .required("Required"),
    children: Yup.number().min(0, "Cannot be negative").required("Required"),
  });

  const handleFormSubmit = (values, { setSubmitting }) => {
    dispatch(fetchHotelsByCity(values.destination.label))
      .unwrap()
      .then(() => {
        message.success("Hotels found!");
      })
      .catch((error) => {
        message.error(`Error: ${error}`);
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ values, errors, touched, setFieldValue, handleSubmit }) => (
        <form className={styles.bookingForm} onSubmit={handleSubmit}>
          <div>
            <Select
              options={destinations.map((dest) => ({
                value: dest.value,
                label: dest.label,
              }))}
              placeholder="Destination"
              onChange={(value) => {
                const selectedDestination = destinations.find(
                  (dest) => dest.value === value,
                );
                setFieldValue("destination", selectedDestination);
              }}
              value={values.destination ? values.destination.value : undefined}
            />
            {touched.destination && errors.destination && (
              <span className={styles.error}>{errors.destination}</span>
            )}
          </div>

          <div>
            <DatePicker
              placeholder="Check In"
              onChange={(date) => setFieldValue("dateIn", date)}
              value={values.dateIn}
            />
            {touched.dateIn && errors.dateIn && (
              <span className={styles.error}>{errors.dateIn}</span>
            )}
          </div>

          <div>
            <DatePicker
              placeholder="Check Out"
              onChange={(date) => setFieldValue("dateOut", date)}
              value={values.dateOut}
            />
            {touched.dateOut && errors.dateOut && (
              <span className={styles.error}>{errors.dateOut}</span>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="Adults"
              value={values.adults}
              onChange={(e) => setFieldValue("adults", e.target.value)}
            />
            {touched.adults && errors.adults && (
              <span className={styles.error}>{errors.adults}</span>
            )}
          </div>

          <div>
            <input
              type="number"
              placeholder="Children"
              value={values.children}
              onChange={(e) => setFieldValue("children", e.target.value)}
            />
            {touched.children && errors.children && (
              <span className={styles.error}>{errors.children}</span>
            )}
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      )}
    </Formik>
  );
};
