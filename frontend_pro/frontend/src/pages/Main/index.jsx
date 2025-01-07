import React from "react";
import { BookingForm } from "../../components/BookingForm";
import { BookingTitleBlock } from "../../components/BookingTitleBlock";
import { FilteredHotelsContainer } from "../../components/FilteredHotelsContainer";

export const Main = () => {
  return (
    <div className="container">
      <BookingForm />
      <BookingTitleBlock />
      <FilteredHotelsContainer />
    </div>
  );
};
