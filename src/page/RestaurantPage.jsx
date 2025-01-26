import React from "react";
import "../styles/RestaurantPage.css";

const RestaurantPage = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">NOVA</div>
      </nav>
      <div className="restaurant">
        <div className="content-box">
          <p>
            <img
              src="https://images.unsplash.com/photo-1522701025355-3b334358d451?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="restaurant"
              className="res-image"
            />
            Experience the best culinary delights in town! Our chefs bring you a
            fusion of flavors from around the world. Whether you’re here for a
            quick bite or a fine dining experience, we’ve got you covered.
          </p>
        </div>
      </div>
    </>
  );
};

export default RestaurantPage;
