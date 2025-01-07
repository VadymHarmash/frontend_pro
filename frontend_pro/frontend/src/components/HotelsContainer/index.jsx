import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchHotels } from "../../store/thunks/hotelsThunk";

import { HotelCard } from "../HotelCard";

import { Row, Col, Pagination } from "antd";

import styles from "./hotelsContainer.module.scss";

export const HotelsContainer = () => {
  const { hotels } = useSelector((state) => state.hotelsReducer);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 12;

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  const startIndex = (currentPage - 1) * hotelsPerPage;
  const endIndex = startIndex + hotelsPerPage;
  const currentHotels = hotels.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.hotelsContainer}>
      <Row gutter={[16, 16]}>
        {currentHotels.map((hotel, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={hotel.id}>
            <HotelCard hotel={hotel} index={index} />
          </Col>
        ))}
      </Row>
      <Pagination
        current={currentPage}
        total={hotels.length}
        pageSize={hotelsPerPage}
        onChange={handlePageChange}
        showSizeChanger={false}
        style={{
          marginTop: "20px",
          textAlign: "center",
          width: "100%",
          justifyContent: "center",
        }}
      />
    </div>
  );
};
