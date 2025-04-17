import React from "react";
import "./ProductCard.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import fallbackImage from "../assets/images/FallbackImage.png"; 

const ProductCard = ({ images, title, price }) => {
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackImage;
  };

  return (
    <div className="product-card">
      <img
        src={images?.[0] || fallbackImage}
        alt={title || "Product Image"}
        className="product-image"
        onError={handleImageError}
      />
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
