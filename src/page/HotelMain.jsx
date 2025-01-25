import React from "react";
import Image from "../assets/mughal.jpeg";
import FoodItem from "../components/FoodItem";
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import '../styles/HotelMain.css';

const HotelMain=()=>{
    // const { hotelName } = useParams();

    const navigate = useNavigate();

    const handleClick=()=>{
        navigate('/cart');
    }

    return(
        <>
            <nav className="navbar">
                <div className="logo">NOVA</div>    
            </nav>
            <div className="restaurant-menu">
                <div className="box">
                    <div className="restaurant-info">
                        <img src={Image} alt="Restaurant" className="restaurant-image" />
                        <div className="restaurant-details">
                        <h1>Conan</h1>
                        <p>Continental, American</p>
                        <p>Peelamedu</p>
                        <div className="rating">
                            <span className="star">&#9733;</span>
                            <p>4.5</p>
                        </div>
                        </div>
                    </div>
                    <div className="menu">
                        <h2>Menu</h2>
                        <h3>Starters</h3>
                        <div className="menu-item">
                            <FoodItem></FoodItem>
                            <FoodItem></FoodItem>
                            <FoodItem></FoodItem>
                            <FoodItem></FoodItem>
                            <FoodItem></FoodItem>
                            <FoodItem></FoodItem>
                        </div>
                    </div>
                    <div className="cart-button" onClick={()=>handleClick()}>
                        <button className="btn" >Cart</button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default HotelMain
