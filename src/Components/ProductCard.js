import React from "react";
import "./ProductCard.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const ProductCard = ({ images, title, price }) => {
  
  return (
    <div className="product-card">
      <img src={images?.[0]} alt={title} className="product-image" />
      <h5 className="product-title">{title}</h5>
      <p className="product-price">₹{(price * 100).toFixed()}</p>
      <button className="add-to-cart-btn">
        <ShoppingCartOutlinedIcon style={{ marginRight: "8px" }} />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
