import React, { useState } from "react";
import FoodItem from "../components/FoodItem";
import { useNavigate, useParams } from "react-router-dom";
import hotels from "../components/hotels";
import menuList from "../components/menuList";
import "../styles/HotelMain.css";

const HotelMain = () => {
  const { hotelName } = useParams();
  const decodedhotelName = decodeURIComponent(hotelName);
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  const hotel = hotels.find((h) => h.hotelName === decodedhotelName);
  const menu = menuList.find((m) => m.hotelName === decodedhotelName)?.menu;

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  if (!menu) {
    return <div>Menu not available for this hotel</div>;
  }

  const handleQuantityChange = (itemName, price, quantity) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.name === itemName);
      if (existingItem) {
        return prev.map((item) =>
          item.name === itemName ? { ...item, quantity, total: quantity * price } : item
        );
      }
      return [...prev, { name: itemName, price, quantity, total: quantity * price }];
    });
  };

  const handleCartClick = () => {
    const totalAmount = cartItems.reduce((sum, item) => sum + item.total, 0);
    navigate("/cart", { state: { cartItems, totalAmount, hotel } });
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">NOVA</div>
      </nav>
      <div className="restaurant-menu">
        <div className="box">
          <div className="restaurant-info">
            <img
              src={hotel.imageUrl}
              alt={hotel.hotelName}
              className="restaurant-image"
            />
            <div className="restaurant-details">
              <h1>{hotel.hotelName}</h1>
              <p>{hotel.cuisine}</p>
              <p>{hotel.location}</p>
              <div className="rating">
                <span className="star">&#9733;</span>
                <p>{hotel.rating}</p>
              </div>
            </div>
          </div>
          <div className="menu">
            <h2>Menu</h2>
            {Object.keys(menu).map((section) => (
              <div key={section}>
                <h3>{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
                <div className="menu-item">
                  {menu[section].map((item, index) => (
                    <FoodItem
                      key={index}
                      name={item.name}
                      price={item.price}
                      isVeg={item.isVeg}
                      onQuantityChange={handleQuantityChange}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-button">
            <button className="btn" onClick={handleCartClick} disabled={cartItems.length === 0 || cartItems.length > 10}>
              Go to Cart
            </button>
          </div>
          <div className="hotel-dialog-box">
            <p>
              Add <strong>Some Items(maximum 10)</strong> to move to next page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelMain;
