import React from "react";
import "./service.css";

const Services = () => {
  return (
    <div className="section">
      <small className="section_Heading">Facilities </small>
      <h2 className="section_Title">
        Our Best <span>Services</span>
      </h2>

      <div className="services_cards">
        <div className="card">
          <i className="ri-hotel-line"></i>
          <h3>Basic Facilities</h3>
          <p>- Reception /Front Desk</p>
          <p>- House Keeping</p>
          <p>- Wifi & Parking</p>
          <p>- Room Services</p>
        </div>
        <div className="card">
          <i className="ri-hotel-bed-line"></i>
          <h3>Room Aminities</h3>
          <p>- Comfortable Bedding</p>
          <p>- Bed Room and Pool</p>
          <p>- TV and AC</p>
          <p>- Mini Fridge</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
