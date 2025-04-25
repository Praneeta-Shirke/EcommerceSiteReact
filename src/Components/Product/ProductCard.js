import React, { useState } from "react";
import "./ProductCard.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import fallbackImage from "../../assets/images/FallbackImage.png";
import ProductModal from "./ProductModal";

const ProductCard = ({ prod, setCart, cart, isCart = false }) => {
  const { images, title, price } = prod;
  let [showModal, setShowModal] = useState(false);
  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = fallbackImage;
  };
  const addCart = (product) => {
    console.log("......cart", cart, product);
    setCart((prev) => [product, ...prev]);
  };
  return (
    <>
      <div className="product-card" onClick={() => setShowModal(true)}>
        <img
          src={images?.[0] || fallbackImage}
          alt={title || "Product Image"}
          className="product-image"
          onError={handleImageError}
        />
        <h5 className="product-title">{title}</h5>
        <p className="product-price">₹{(price * 100).toFixed()}</p>
        {/* {isCart ? ( */}
          <button className="add-to-cart-btn" onClick={() => addCart(prod)}>
            <ShoppingCartOutlinedIcon style={{ marginRight: "8px" }} />
            Add to Cart
          </button>
        {/* ) : null} */}
      </div>
      {showModal && (
        <ProductModal
          product={prod}
          onClose={() => setShowModal(false)}
          addCart={addCart}
        />
      )}
    </>
  );
};

export default ProductCard;
