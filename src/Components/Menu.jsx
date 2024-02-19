import React from "react";
import PizzaCard from "./PizzaCard";
import "../App.css";

const Menu = () => {
  return (
    <>
      <div className="menu">
        <h2>Our Menu</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
          officia voluptatum inventore voluptate est deserunt non enim nam sint,
          repudiandae ex nesciunt eum perferendis odio. Doloremque dolorum
          tempora veniam esse?
        </p>
      </div>
      <PizzaCard />
    </>
  );
};

export default Menu;
