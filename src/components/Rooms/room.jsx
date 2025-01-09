import React from "react";

import "./room.css";
import { useNavigate } from "react-router-dom";

const Room = () => {
  const navigate = useNavigate(); //initialize the navigate function

  const handleBookingClick = () => {
    navigate("/booking");
  };
  return (
    <div className="section">
      <small className="section_Heading">Luxury Suites</small>
      <h2 className="section_Title">
        Our Best <span>Rooms</span>
      </h2>

      <div className="boxes">
        <div className="box_Container">
          <div className="box">
            <div className="box_front box_front1">
              <button>Junior Suite</button>
            </div>
            <div className="box_back">
              <div className="price">
                <p>₹6500/Night</p>
              </div>
              <div className="box_content">
                <h3>Junior Suite</h3>
                <p> - Daily Cleaning</p>
                <p> - Home Service</p>
                <p> - HouseKeeping</p>
                <p> - Wifi & Parking</p>
              </div>
              <div className="BookNow">
                <button onClick={handleBookingClick}>Book Now</button>
                <i className="ri-arrow-right-line" onClick={handleBookingClick}></i>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="box_Container">
          <div className="box">
            <div className="box_front box_front2">
              <button>Twin Room</button>
            </div>
            <div className="box_back box_back2">
              <div className="price">
                <p>₹7500/Night</p>
              </div>
              <div className="box_content">
                <h3>Junior Suite</h3>
                <p> - Daily Cleaning</p>
                <p> - Home Service</p>
                <p> - HouseKeeping</p>
                <p> - Wifi & Parking</p>
              </div>
              <div className="BookNow">
                <button onClick={handleBookingClick}>Book Now</button>
                <i className="ri-arrow-right-line" onClick={handleBookingClick}></i>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="box_Container">
          <div className="box">
            <div className="box_front box_front3">
              <button>Quad Room</button>
            </div>
            <div className="box_back box_back3">
              <div className="price">
                <p>₹9000/Night</p>
              </div>
              <div className="box_content">
                <h3>Quad Room</h3>
                <p> - Daily Cleaning</p>
                <p> - Home Service</p>
                <p> - HouseKeeping</p>
                <p> - Wifi & Parking</p>
              </div>
              <div className="BookNow">
                <button onClick={handleBookingClick}>Book Now</button>
                <i className="ri-arrow-right-line" onClick={handleBookingClick}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="box_Container">
          <div className="box">
            <div className="box_front box_front4">
              <button>Deluxe Room</button>
            </div>
            <div className="box_back box_front4">
              <div className="price">
                <p>₹10,000/Night</p>
              </div>
              <div className="box_content">
                <h3>Deluxe Room</h3>
                <p> - Daily Cleaning</p>
                <p> - Home Service</p>
                <p> - HouseKeeping</p>
                <p> - Wifi & Parking</p>
              </div>
              <div className="BookNow">
                <button onClick={handleBookingClick}>Book Now</button>
                <i className="ri-arrow-right-line" onClick={handleBookingClick}></i>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="box_Container">
          <div className="box">
            <div className="box_front box_front5">
              <button>Exclusive Room</button>
            </div>
            <div className="box_back box_back5">
              <div className="price">
                <p>₹12,000/Night</p>
              </div>
              <div className="box_content">
                <h3>Exclusive Room</h3>
                <p> - Daily Cleaning</p>
                <p> - Home Service</p>
                <p> - HouseKeeping</p>
                <p> - Wifi & Parking</p>
              </div>
              <div className="BookNow">
                <button onClick={handleBookingClick}>Book Now</button>
                <i className="ri-arrow-right-line" onClick={handleBookingClick}></i>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="box_Container">
          <div className="box">
            <div className="box_front box_front6">
              <button>Personal Room</button>
            </div>
            <div className="box_back box_back6">
              <div className="price">
                <p>₹15,000/Night</p>
              </div>
              <div className="box_content">
                <h3>Personal Room</h3>
                <p> - Daily Cleaning</p>
                <p> - Home Service</p>
                <p> - HouseKeeping</p>
                <p> - Wifi & Parking</p>
              </div>
              <div className="BookNow">
                <button onClick={handleBookingClick}>Book Now</button>
                <i className="ri-arrow-right-line" onClick={handleBookingClick}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
