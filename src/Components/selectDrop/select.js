import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../selectDrop/select.css'

const Select=()=>{
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
      const path = `/category/${category.toLowerCase().replace(/\s+/g, '-')}`;
      navigate(path);
    };
  
    return (
      <div className="dropdownContent">
        <ul>
          <li onClick={() => handleCategoryClick('Electronics')}>Electronics</li>
          <li onClick={() => handleCategoryClick('Fashion')}>Fashion</li>
          <li onClick={() => handleCategoryClick('Home & Garden')}>Home & Garden</li>
          <li onClick={() => handleCategoryClick('Beauty')}>Beauty</li>
          <li onClick={() => handleCategoryClick('Books')}>Books</li>
        </ul>
      </div>
    );
  
}

export default Select;