import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "../styles/Header.css";

const Header = ({ onToggleCartVisibility }) => {
  const { getTotalItems } = useContext(CartContext);

  const handleHeaderClick = () => {
    window.location.reload(); // Reloads the page
  };

  return (
    <header className="App-header">
      <h1 className="ysabeau-sc-font" onClick={handleHeaderClick}>
        Fashion Webshop
      </h1>
      <button className="cart-button" onClick={onToggleCartVisibility}>
        🛒 Cart {getTotalItems() > 0 && `(${getTotalItems()})`}
      </button>
    </header>
  );
};

export default Header;
