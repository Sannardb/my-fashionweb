import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "../styles/Product.css";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const handleButtonClick = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add("ripple");

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const addToCartWithPrice = () => {
    const priceToUse = product.newPrice ? product.newPrice : product.price;
    const productToAdd = { ...product, price: priceToUse };
    addToCart(productToAdd);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="price">
        {product.newPrice ? (
          <>
            <span className="old-price">${product.price.toFixed(2)}</span>
            <span className="new-price">${product.newPrice.toFixed(2)}</span>
          </>
        ) : (
          <span>${product.price.toFixed(2)}</span>
        )}
      </p>
      <button
        onClick={(e) => {
          handleButtonClick(e);
          addToCartWithPrice();
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
