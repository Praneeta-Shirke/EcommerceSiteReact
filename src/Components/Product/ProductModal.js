import React, { useState } from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose, addCart }) => {
  const [message, setMessage] = useState('');
  const handleOnClick = () =>{
    alert('Congratulations! Order is Confirmed!! ✔');
  }
  if (!product) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={product.images?.[0]} alt={product.title} className="modal-image" />
        <h3>{product.title}</h3>
        <p>Price: ₹{(product.price * 100).toFixed()}</p>
        <p>Description: {product.description || "No description available."}</p>
        <button className="add-to-cart-btn" onClick={handleOnClick}>Buy now!</button>
      </div>
    </div>
  );
};

export default ProductModal;
