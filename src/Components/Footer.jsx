import React from "react";

const Footer = () => {
  const openingTime = 12;
  const closingTime = 22;
  const currentHour = new Date().getHours();
  const time = currentHour >= openingTime && currentHour < closingTime;

  const message = time
    ? "Our hours are from 12:00 to 22:00. Come visit us or order online"
    : "We're currently closed. Please visit us during our operating hours from 12:00 to 22:00.";

  return (
    <div className="order">
      <h2 className="footer">{message}</h2>
      {time ? <button className="btn">Order</button> : null}
    </div>
  );
};

export default Footer;
