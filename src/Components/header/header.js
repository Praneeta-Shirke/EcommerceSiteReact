import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import "../header/header.css";

import Logo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";

import Select from "../selectDrop/select";
import { Block, Padding } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import LocationSelect from "../selectDrop/locationSelect";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

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

  return (
    <>
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
            {/*Header Search starts in this div*/}
            <div className="col-sm-5 d-flex">
              <div className="headerSearch d-flex align-items-center  position-relative">
                <div
                  ref={dropdownRef}
                  className="dropdownWrapper position-relative"
                >
                  
                  <Select />
                </div>
                <div className="search">
                  <input type="text" placeholder="Search for items.." />
                  <SearchIcon className="searchIcon cursor" />
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

                <li className="list-inline-item">
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

                <li className="list-inline-item">
                  <span>
                    <AccountCircleOutlinedIcon className="headerIcon" />
                    Account
                  </span>
                </li>
              </ul>
            </div>
            <div>
                <ul className="headerList">
                    <li className="list-inline-item"><Link to="/">Home</Link></li>
                    <li className="list-inline-item"><Link to="/About">About</Link></li>
                    <li className="list-inline-item"><Link to="/Blogs">Blogs</Link></li>
                    <li className="list-inline-item"><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
