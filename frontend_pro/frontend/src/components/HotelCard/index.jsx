import React from "react";
import { useNavigate } from "react-router-dom";
import * as PropTypes from "prop-types";

import { Card } from "antd";

import hotel1 from "../../assets/images/hotel-1.jpg";
import hotel2 from "../../assets/images/hotel-2.jpg";
import hotel3 from "../../assets/images/hotel-3.jpg";
import hotel4 from "../../assets/images/hotel-4.jpg";
import hotel5 from "../../assets/images/hotel-5.jpg";

import styles from "./hotelCard.module.scss";

const hotelImages = [hotel1, hotel2, hotel3, hotel4, hotel5];

export const HotelCard = ({ hotel, index }) => {
  const imageIndex = index % hotelImages.length;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/hotels/${hotel.id}`);
  };

  return (
    <Card hoverable className={styles.hotelCard} onClick={handleCardClick}>
      <img src={hotelImages[imageIndex]} alt={`hotel-${imageIndex + 1}`} />
      <h3>{hotel.name}</h3>
      <div>
        <p className={styles.hotelCard__info}>
          <span>
            {hotel.city}, {hotel.country_code}
          </span>
          {hotel.hotel_rating ? (
            <span>
              {hotel.hotel_rating}/<span>5</span>
            </span>
          ) : (
            <span></span>
          )}
        </p>
        <p>{hotel.address}</p>
      </div>
    </Card>
  );
};

HotelCard.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string,
    country_code: PropTypes.string.isRequired,
    hotel_rating: PropTypes.number,
    phone_number: PropTypes.string,
    website: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
