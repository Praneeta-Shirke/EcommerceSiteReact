import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../header/header.css";

import Logo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";

import Select from "../selectDrop/select";
import { Block, Padding } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import LocationSelect from "../selectDrop/locationSelect";

const Header = ({ setProducts }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    console.log("Logged Out");
    
sessionStorage.clear();
navigate("/login")

    // You can add more logic like clearing localStorage, etc.
  };

  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2">
            <img
              src={Logo}
              alt="Logo"
              style={{
                maxWidth: "100%",
                maxHeight: "70%",
                objectFit: "contain",
              }}
            />
          </div>

          <div className="col-sm-5 d-flex">
            <div className="headerSearch d-flex align-items-center  position-relative">
              <div ref={dropdownRef} className="dropdownWrapper position-relative">
                <Select />
              </div>
              <div className="search">
                <input
                  type="text"
                  placeholder="Search for items.."
                  value={searchText}
                  onChange={(res) => {
                    setSearchText(res?.target?.value);
                  }}
                />
                <SearchIcon
                  className="searchIcon cursor"
                  onClick={() => {
                    fetch(`https://dummyjson.com/products/search?q=${searchText.trim()}&limit=200`)
                      .then((res) => res.json())
                      .then((res) => {
                        console.log("Search result:",res.products);
                        setProducts(res?.products);
                        setSearchText("");
                      });
                  }}
                />
              </div>
            </div>
          </div>

          <div className="col-sm-5 d-flex ml-auto" style={{ left: "5px" }}>
            <div className="location-select ms-2">
              <LocationSelect />
            </div>
            <ul className="list d-flex list-inline mb-0 headerTabs">
              <li className="list-inline-item">
                <span>
                  <span
                    className="badge rounded-circle"
                    style={{ backgroundColor: "#7dc3f5", color: "white" }}
                  >
                    3
                  </span>
                  <FavoriteBorderOutlinedIcon className="headerIcon" />
                  WishList
                </span>
              </li>

              <li className="list-inline-item" onClick={() => navigate("/cart")}>
                <span>
                  <span
                    className="badge rounded-circle"
                    style={{ backgroundColor: "#7dc3f5", color: "white" }}
                  >
                    3
                  </span>
                  <ShoppingCartOutlinedIcon className="headerIcon" />
                  Cart
                </span>
              </li>

              <li
                className="list-inline-item position-relative"
                ref={dropdownRef}
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span>
                  <AccountCircleOutlinedIcon className="headerIcon" />
                  Account
                </span>
                {showDropdown && (
                  <div className="account-dropdown">
                    <p className="username">🧒🏻 JohnDoe</p>
                    <button className="logout-btn" onClick={handleLogout}>
                      Log Out
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div>
            <ul className="headerList">
              <li className="list-inline-item">
                <Link to="/" className="custom-link">
                  Home
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/About" className="custom-link">
                  About
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/Blogs" className="custom-link">
                  Blogs
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/Contact" className="custom-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
