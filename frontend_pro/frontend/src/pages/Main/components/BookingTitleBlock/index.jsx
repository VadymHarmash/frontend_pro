import React from "react";
import styles from './bookingTitleBlock.module.scss'

export const BookingTitleBlock = () => {
  return (
    <div className={styles.bookingTitleBlock}>
      <h1>
        Travel with <span>Booking</span>
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at
        deleniti laboriosam maxime neque nobis odit velit. Aliquam dolorum eos
        et inventore nobis porro qui sapiente sint totam. Cupiditate, labore
        laboriosam molestias nam nulla odio quidem quod repellat sunt
        voluptatem.
      </p>
    </div>
  );
};
