import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import CardComponent from "../components/HotelCard";
import "../styles/RestaurantList.css";

const RestaurantList = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/hotel`);
  }

  const hotels = [
    {
      hotelName: "Mughal Hotel",
      cuisine: "Arabian, North-Indian, Biriyani",
      location: "Race Course",
      rating: "4.3",
      imageUrl:
        "https://images.unsplash.com/photo-1543992321-cefacfc2322e?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      hotelName: "Spice Symphony",
      cuisine: "Indian, Chinese, Continental",
      location: "MG Road",
      rating: "4.5",
      imageUrl:
        "https://media.istockphoto.com/id/904547646/photo/modern-black-burger-on-wooden-board-toned-picture.webp?s=170667a&w=0&k=20&c=tFXWmHiigylyRvSmVGRlZFvd9guSp3xMuClJUdTIsMA=",
    },
    {
      hotelName: "Ocean Breeze",
      cuisine: "Seafood, Italian",
      location: "Marine Drive",
      rating: "4.2",
      imageUrl:
        "https://images.unsplash.com/photo-1561586003-e1bcd340f5d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      hotelName: "Green Valley",
      cuisine: "Vegetarian, South-Indian",
      location: "Lalbagh",
      rating: "4.6",
      imageUrl:
        "https://images.unsplash.com/photo-1646614699785-2a4e78144722?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      hotelName: "Skyline Diner",
      cuisine: "American, Fast Food",
      location: "Brigade Road",
      rating: "4.4",
      imageUrl:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      hotelName: "Mountain Retreat",
      cuisine: "Continental, Indian",
      location: "Nandi Hills",
      rating: "4.7",
      imageUrl:
        "https://images.unsplash.com/photo-1634148649480-07a33d222040?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

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
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantList;
