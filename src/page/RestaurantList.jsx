import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CardComponent from "../components/HotelCard";
import hotels from "../components/hotels";
import "../styles/RestaurantList.css";

const RestaurantList = () => {
  const navigate = useNavigate();

  const handleClick = (hotelName) => {
    console.log(`Navigating to hotel: ${hotelName}`);
    navigate(`/hotel/${encodeURIComponent(hotelName)}`);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">NOVA</div>
      </nav>
      <div className="Restaurants">
        <h1>Restaurants in Coimbatore</h1>
        <div className="card-container">
        {hotels.map((hotel, index) => (
            <CardComponent
              key={index}
              imgUrl={hotel.imageUrl}
              hotelName={hotel.hotelName}
              rating={hotel.rating}
              cuisine={hotel.cuisine}
              location={hotel.location}
              handleClick={()=>handleClick(hotel.hotelName)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantList;
