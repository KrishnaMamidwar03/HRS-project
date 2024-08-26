import React from "react";
import "../cssFiles/HotelDetails.css";

const HotelDetails = () => {
  return (
    <div className="container">
      {/* Daily Steal Deals Section */}
      <div className="daily-steal-deals">
        <h2>Daily Steal Deals</h2>
        <div className="deals-grid">
          <div className="deal-item">
            <img
              src="https://media.istockphoto.com/id/1453121684/photo/modern-hotel-room-with-double-bed-night-tables-and-day-sofa-bed.webp?b=1&s=170667a&w=0&k=20&c=0MGlloRKwQjR_xeIt0s0IklHyt2bQHDNoFvKml3BQPc="
              alt="Lemon Tree Premier, Mumbai"
            />
            <h3>Lemon Tree Premier, Mumbai</h3>
            <p>4.1/5 | 2456 Ratings</p>
            <p>₹5000 | 1 room per night</p>
          </div>
          <div className="deal-item">
            <img
              src="https://media.istockphoto.com/id/1453121684/photo/modern-hotel-room-with-double-bed-night-tables-and-day-sofa-bed.webp?b=1&s=170667a&w=0&k=20&c=0MGlloRKwQjR_xeIt0s0IklHyt2bQHDNoFvKml3BQPc="
              alt="Lemon Tree Hotel, Kalyan"
            />
            <h3>Lemon Tree Hotel, Kalyan</h3>
            <p>3.5/5 | 69 Ratings</p>
            <p>₹7559 | 1 room per night</p>
          </div>
          
        </div>
        <div className="deals-grid">
          <div className="deal-item">
            <img
              src="https://media.istockphoto.com/id/1453121684/photo/modern-hotel-room-with-double-bed-night-tables-and-day-sofa-bed.webp?b=1&s=170667a&w=0&k=20&c=0MGlloRKwQjR_xeIt0s0IklHyt2bQHDNoFvKml3BQPc="
              alt="Lemon Tree Premier, Mumbai"
            />
            <h3>Lemon Tree Premier, Mumbai</h3>
            <p>4.1/5 | 2456 Ratings</p>
            <p>₹5000 | 1 room per night</p>
          </div>
          <div className="deal-item">
            <img
              src="https://media.istockphoto.com/id/1453121684/photo/modern-hotel-room-with-double-bed-night-tables-and-day-sofa-bed.webp?b=1&s=170667a&w=0&k=20&c=0MGlloRKwQjR_xeIt0s0IklHyt2bQHDNoFvKml3BQPc="
              alt="Lemon Tree Hotel, Kalyan"
            />
            <h3>Lemon Tree Hotel, Kalyan</h3>
            <p>3.5/5 | 69 Ratings</p>
            <p>₹7559 | 1 room per night</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
