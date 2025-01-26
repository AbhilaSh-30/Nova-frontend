import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import "../styles/CartPage.css";
import img from "../assets/cart.jpeg";

const OrderConfirmation = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, totalAmount, hotel } = location.state || {};
  const handleOrderPlacement = () => {
    const timer = setTimeout(() => {
      setOrderPlaced(true);
    }, 1000);

    return () => clearTimeout(timer);
  };

  if (!cartItems || cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  const handleClick = () => {
    navigate("/", { state: { orderConfirmed: true } });
  };

  return (
    <div className="signin-container">
      <div className="image-section">
        <img src={img} alt="Restaurant" />
      </div>
      <div className="form-section">
        <h2>Cart</h2>
        <div className="restaurant-info">
          <p>
            <h3>{hotel.hotelName}</h3>
            <p>{hotel.cuisine}</p>
            <p>{hotel.location}</p>
          </p>
        </div>
        <div className="item-details">
          {cartItems.map((item, index) => (
            <div className="item" key={index}>
              <span>{item.name} x {item.quantity}</span>
              <span className="rate">₹{item.total.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <h3 className="bill-details-heading">Bill Details</h3>
        <div className="bill-details">
          <div className="bill-item">
            <span>Delivery Partner Fee</span>
            <span className="rate">₹32.00</span>
          </div>
          <div className="bill-item">
            <span>GST and Restaurant Charges</span>
            <span className="rate">₹18.00</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span className="rate">₹{(totalAmount+32+18).toFixed(2)}</span>
          </div>
        </div>
        {orderPlaced ? (
          <div>
            <div className="confirmation-message">
              Your order has been confirmed
              <br />
              Our delivery partner will arrive soon.
            </div>
            <button
              type="submit"
              className="pay-button"
              onClick={() => handleClick()}
            >
              Return to Home
            </button>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleOrderPlacement();
            }}
          >
            <button type="submit" className="pay-button">
              Pay On Delivery
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default OrderConfirmation;
