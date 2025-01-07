import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearHotels } from "../../store/slices/hotelsSlice";

import { HotelCard } from "../HotelCard";

import { Row, Col } from "antd";

import styles from "./filteredHotelsContainer.module.scss";

export const FilteredHotelsContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearHotels());
  }, [dispatch]);
  const { hotels } = useSelector((state) => state.hotelsReducer);

  return (
    <div className={styles.filteredHotelsContainer}>
      {hotels.length > 0 ? (
        <Row gutter={[16, 16]}>
          {hotels.map((hotel, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={hotel.id}>
              <HotelCard hotel={hotel} index={index} />
            </Col>
          ))}
        </Row>
      ) : (
        <p>No hotels found</p>
      )}
    </div>
  );
};
