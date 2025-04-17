import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../selectDrop/select.css";
import ElectronicsListing from "../../pages/ElectronicsListing/electronics";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Select = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  const handleCategoryClick = (category) => {
    setSelectedData(category?.name);
    setShowDropdown(false)
    navigate(`/${category.slug}`);
  };

  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        setCategory(res);
        console.log(res);
      });
  }, []);
  return (
    <>
      <div
        className="selectDrop cursor"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        {selectedData || "All Category"}
        <KeyboardArrowDownIcon className="arrowIcon" />
      </div>
      {showDropdown ? <div className="dropdownContent">
        <ul>
          {category?.map((item, index) => (
            <li key={index} onClick={() => handleCategoryClick(item)}>
              {item?.name}
            </li>
          ))}
        </ul>
      </div>: null}
    </>
  );
};

export default Select;
