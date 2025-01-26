import React, { useState } from "react";
import "../styles/FoodItem.css";

const FoodItem = ({ name, price, isVeg, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(name, price, newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(name, price, newQuantity);
    }
  };

  return (
    <div className="food-item">
      <div className="details">
        <div className="name">{name}</div>
        <div className="price">₹{price.toFixed(2)}</div>
        <div className={`${isVeg ? "veg-icon" : "non-veg-icon"}`}>●</div>
      </div>
      <div className="controls">
        <button className="decrement" onClick={decrementQuantity}>−</button>
        <div className="quantity">{quantity}</div>
        <button className="increment" onClick={incrementQuantity}>+</button>
      </div>
    </div>
  );
};

export default FoodItem;
