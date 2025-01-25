import React,{useState} from 'react';
import '../styles/FoodItem.css';

const FoodItem = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="food-item">
      <div className="details">
        <div className="name">Paneer Qt's</div>
        <div className="price">Rs.240</div>
        <div className="veg-icon">●</div>
      </div>
      <div className="controls">
        <button className="decrement" onClick={decrementQuantity}>−</button>
        <div className="quantity">{quantity}</div>
        <button className="increment" onClick={incrementQuantity}>+</button>
      </div>
    </div>
  );
}

export default FoodItem;
