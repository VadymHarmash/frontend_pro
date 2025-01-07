import React, { useEffect } from "react";
import * as PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { findHotel } from "../../store/thunks/hotelsThunk";

import { Loader } from "../../loaders/Loader";

import styles from "./hotelInfo.module.scss";

export const HotelInfo = ({ hotel }) => {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findHotel(params.id));
  }, [dispatch, params.id]);

  return (
    <div className={styles.hotelInfo}>
      {hotel.id ? (
        <>
          <h1>{hotel.name}</h1>
          <p>
            {hotel.city}, {hotel.country_code}
          </p>
          <p>{hotel.address}</p>
          <p>
            Rating:{" "}
            {hotel.hotel_rating ? `${hotel.hotel_rating}/5` : "Not rated"}
          </p>
          <p className={styles.hotelInfo__contacts}>
            Contacts: {hotel.phone_number}
          </p>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

HotelInfo.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    country_code: PropTypes.string,
    hotel_rating: PropTypes.number,
    phone_number: PropTypes.string,
    website: PropTypes.string,
  }),
};
