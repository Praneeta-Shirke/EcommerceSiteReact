import React from "react";
import "./ProductCard.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h5 className="product-title">{title}</h5>
      <p className="product-price">₹{price}</p>
      <button className="add-to-cart-btn">
        <ShoppingCartOutlinedIcon style={{ marginRight: "8px" }} />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
