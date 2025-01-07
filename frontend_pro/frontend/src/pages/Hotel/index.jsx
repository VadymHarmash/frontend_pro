import React from "react";
import { useSelector } from "react-redux";
import { HotelInfo } from "./components/HotelInfo";
import { Loader } from "../../loaders/Loader";

export const Hotel = () => {
  const { hotelToShow } = useSelector((state) => state.hotelsReducer);

  if (!hotelToShow) {
    return <Loader />;
  }

  return (
    <div className="container">
      <HotelInfo hotel={hotelToShow} />
    </div>
  );
};
